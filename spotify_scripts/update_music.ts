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
    try {
        const data = await spotifyApi.refreshAccessToken();
        spotifyApi.setAccessToken(data.body['access_token']);

        const topTracks = await spotifyApi.getMyTopTracks({ limit: 5, time_range: 'short_term' });
        const topArtists = await spotifyApi.getMyTopArtists({ limit: 5, time_range: 'short_term' });

        const songs = topTracks.body.items.map((track: any) => ({
            title: track.name,
            artist: track.artists.map((a: any) => a.name).join(', '),
            cover: track.album.images[0]?.url || ''
        }));

        const artists = topArtists.body.items.map((artist: any) => ({
            name: artist.name,
            image: artist.images[0]?.url || ''
        }));

        const fileContent = `export const topSongs = ${JSON.stringify(songs, null, 4)};\n\nexport const topArtists = ${JSON.stringify(artists, null, 4)};\n`;

        const outputPath = path.join(__dirname, '../src/data/top_songs_artists.ts');
        fs.writeFileSync(outputPath, fileContent);

        console.log('Successfully updated music data!');
    } catch (error) {
        console.error('Error updating music data:', error);
    }
}

updateMusicData();
