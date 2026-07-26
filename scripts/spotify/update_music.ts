import SpotifyWebApi from 'spotify-web-api-node';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
});

async function updateMusicData() {
    let data;
    try {
        data = await spotifyApi.refreshAccessToken();
    } catch (error: any) {
        // Spotify (effective July 20, 2026): refresh tokens expire after six months.
        // An expired/revoked token returns HTTP 400 invalid_grant. Per Spotify's guidance,
        // do NOT retry — discard it and re-run the sign-in flow to mint a new one.
        const isInvalidGrant = error?.statusCode === 400 && error?.body?.error === 'invalid_grant';
        if (isInvalidGrant) {
            console.error(
                '\n=== SPOTIFY REFRESH TOKEN EXPIRED (invalid_grant) ===\n' +
                'The stored SPOTIFY_REFRESH_TOKEN is no longer valid and must be replaced.\n' +
                'To re-authorize:\n' +
                '  1. Run `npm run get-token` locally and complete the Spotify sign-in.\n' +
                '  2. Copy the new refresh token into your .env and update the GitHub secret:\n' +
                '       gh secret set SPOTIFY_REFRESH_TOKEN\n' +
                '  3. Re-run this workflow (Actions > Update Spotify Music > Run workflow).\n' +
                '=====================================================\n'
            );
        } else {
            console.error('Error refreshing Spotify access token:', error);
        }
        // Exit non-zero so the GitHub Action fails loudly instead of silently going green.
        process.exit(1);
    }

    try {
        spotifyApi.setAccessToken(data.body['access_token']);

        const topTracks = await spotifyApi.getMyTopTracks({ limit: 5, time_range: 'short_term' });
        const topArtists = await spotifyApi.getMyTopArtists({ limit: 5, time_range: 'short_term' });

        const songs = topTracks.body.items.map((track: any) => ({
            title: track.name,
            artist: track.artists.map((a: any) => a.name).join(', '),
            cover: track.album.images[0]?.url || '',
            link: track.external_urls?.spotify || ''
        }));

        const artists = topArtists.body.items.map((artist: any) => ({
            name: artist.name,
            image: artist.images[0]?.url || '',
            link: artist.external_urls?.spotify || ''
        }));

        const fileContent = `export const topSongs = ${JSON.stringify(songs, null, 4)};\n\nexport const topArtists = ${JSON.stringify(artists, null, 4)};\n`;

        const outputPath = path.join(__dirname, '../../src/data/top_songs_artists.ts');
        fs.writeFileSync(outputPath, fileContent);

        console.log('Successfully updated music data!');
    } catch (error) {
        console.error('Error updating music data:', error);
        process.exit(1);
    }
}

updateMusicData();
