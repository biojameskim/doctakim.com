import SpotifyWebApi from 'spotify-web-api-node';
import * as http from 'http';
import * as url from 'url';
import dotenv from 'dotenv';
import open from 'open'; // We might not have this, so I'll skip auto-opening or use a simple console log.

dotenv.config();

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = 'http://127.0.0.1:8888/callback';

if (!clientId || !clientSecret) {
    console.error('Error: SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET must be set in .env file.');
    process.exit(1);
}

const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret,
    redirectUri: redirectUri
});

const scopes = ['user-top-read'];

const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url || '', true);

    if (parsedUrl.pathname === '/callback') {
        const code = parsedUrl.query.code as string;

        if (code) {
            try {
                const data = await spotifyApi.authorizationCodeGrant(code);
                const refreshToken = data.body['refresh_token'];

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>Success!</h1><p>Check your terminal for the Refresh Token.</p>');

                console.log('\n=== YOUR REFRESH TOKEN ===');
                console.log(refreshToken);
                console.log('==========================\n');
                console.log('Please copy this token and paste it into your .env file as SPOTIFY_REFRESH_TOKEN');

                server.close();
                process.exit(0);
            } catch (error) {
                console.error('Error getting tokens:', error);
                res.writeHead(500);
                res.end('Error getting tokens');
            }
        }
    }
});

server.listen(8888, () => {
    const authUrl = spotifyApi.createAuthorizeURL(scopes, 'state');
    console.log('1. Make sure you have added http://127.0.0.1:8888/callback to your Redirect URIs in the Spotify Dashboard.');
    console.log('2. Open this URL to authorize:');
    console.log(authUrl);
});
