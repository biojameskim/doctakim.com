# Spotify Music Data Scripts

This folder contains scripts to automatically fetch top songs and artists from Spotify.

## Setup (One-Time)

### Set `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` in `.env` file

Go to Spotify Developer Dashboard (<https://developer.spotify.com/dashboard>) to get these.

The homepage's now-playing card also uses these values as Netlify environment
variables. After adding or changing the `user-read-currently-playing` scope, run
`npm run get-token` again and update `SPOTIFY_REFRESH_TOKEN` in both `.env` and
Netlify. Spotify refresh tokens expire after six months and must then be renewed.

### Generate Refresh Token

Run this command to get refresh token:

```bash
npm run get-token
```

This will:

- Start a local server on port 8888
- Print an authorization URL
- Open the URL in your browser and authorize the app
- Print your refresh token in the terminal
- Copy the token and paste it into `.env` as `SPOTIFY_REFRESH_TOKEN`

## Usage

### Update Music Data

Whenever you want to refresh your top songs and artists:

```bash
npm run update-music
```

This will:

- Fetch your top 5 songs and top 5 artists from Spotify
- Update `src/data/top_songs_artists.ts` with the new data

### Customize Time Range

By default, the script fetches your top tracks from the **last 4 weeks**. You can change this in `scripts/spotify/update_music.ts` by modifying the `time_range` parameter:

**Available options:**

- `'short_term'` - Last ~4 weeks (default)
- `'medium_term'` - Last ~6 months
- `'long_term'` - All time (several years)

### Manual Updates

You can also run `npm run update-music` manually whenever you want to update the music displayed on your site.

## Troubleshooting

**Error: "INVALID_CLIENT: Insecure redirect URI"**

- Make sure you added `http://127.0.0.1:8888/callback` (not localhost) to your Spotify app's Redirect URIs
- Make sure you saved the changes in the Spotify Dashboard

**Error: "EADDRINUSE: address already in use"**

- Port 8888 is already in use
- Kill the process: `lsof -ti:8888 | xargs kill -9`
- Try again

**Error: "Invalid access token"**

- Your refresh token may have expired
- Run `npm run get-token` again to get a new one
