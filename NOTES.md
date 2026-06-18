## Important Notes to Self

</br>

### Font Family (Satoshi)
- Light 300
- Regular 400 (Default)
- Medium 500
- Bold 700
- Black 900

### Testing on Local Host for Mobile Devices

To test on localhost using your phone, use this command.
```
npm start
```
You'll see a link to follow on "On Your Network:"

</br>

### Image Compression
When uploading any photos, use lossy compression to reduce file size.
- https://compressor.io/ (up to 10mb per file)
- https://imagecompressor.com/ (no limits)

</br>

### Cover Photos for Blog
- fotor.com
- Keep each photo at 1280x960 --> (2048x1536, 1024x768, etc)

### Deployment
- Deployed with Netlify

### Images
- Hosted on Cloudinary

### Spotify Refresh Token (re-auth runbook)
As of July 20, 2026 Spotify refresh tokens expire after six months. When the stored
token expires, the weekly `Update Spotify Music` Action fails with `invalid_grant`
and GitHub emails the failure. To re-authorize:
1. `npm run get-token` and complete the Spotify sign-in.
2. Update the GitHub secret: `gh secret set SPOTIFY_REFRESH_TOKEN` (paste the new
   token), and update `.env` for local runs.
3. Re-run the workflow: Actions > Update Spotify Music > Run workflow.