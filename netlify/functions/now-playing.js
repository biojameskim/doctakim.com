const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
const SPOTIFY_NOW_PLAYING_URL =
  "https://api.spotify.com/v1/me/player/currently-playing?additional_types=track,episode";

const PLAYBACK_CACHE_MS = 15_000;
const ACCESS_TOKEN_BUFFER_MS = 60_000;

let accessTokenCache = null;
let playbackCache = null;

const responseHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "public, max-age=10, stale-while-revalidate=30",
  "Netlify-CDN-Cache-Control": "public, durable, max-age=15, stale-while-revalidate=30",
};

function json(statusCode, body, headers = responseHeaders) {
  return {
    statusCode,
    headers,
    body: JSON.stringify(body),
  };
}

async function getAccessToken() {
  if (accessTokenCache && accessTokenCache.expiresAt > Date.now()) {
    return accessTokenCache.value;
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Spotify environment variables are not configured");
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const tokenResponse = await fetch(SPOTIFY_TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  if (!tokenResponse.ok) {
    throw new Error(`Spotify token refresh failed (${tokenResponse.status})`);
  }

  const token = await tokenResponse.json();
  accessTokenCache = {
    value: token.access_token,
    expiresAt: Date.now() + token.expires_in * 1000 - ACCESS_TOKEN_BUFFER_MS,
  };

  return accessTokenCache.value;
}

function normalizePlayback(playback) {
  const item = playback.item;

  if (!playback.is_playing || !item) {
    return { isPlaying: false };
  }

  const isTrack = item.type === "track";
  const image = isTrack ? item.album?.images?.[0]?.url : item.images?.[0]?.url;
  const byline = isTrack
    ? item.artists?.map((artist) => artist.name).join(", ")
    : item.show?.name;

  return {
    isPlaying: true,
    title: item.name,
    artist: byline || "Spotify",
    album: isTrack ? item.album?.name || "" : "Podcast",
    image: image || "",
    link: item.external_urls?.spotify || "https://open.spotify.com/",
  };
}

exports.handler = async () => {
  if (playbackCache && playbackCache.expiresAt > Date.now()) {
    return json(200, playbackCache.value);
  }

  try {
    const accessToken = await getAccessToken();
    const spotifyResponse = await fetch(SPOTIFY_NOW_PLAYING_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    let body;
    if (spotifyResponse.status === 204) {
      body = { isPlaying: false };
    } else if (spotifyResponse.ok) {
      body = normalizePlayback(await spotifyResponse.json());
    } else {
      throw new Error(`Spotify playback request failed (${spotifyResponse.status})`);
    }

    playbackCache = {
      value: body,
      expiresAt: Date.now() + PLAYBACK_CACHE_MS,
    };

    return json(200, body);
  } catch (error) {
    console.error("Unable to retrieve Spotify playback:", error);
    return json(
      503,
      { isPlaying: false },
      {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
      }
    );
  }
};
