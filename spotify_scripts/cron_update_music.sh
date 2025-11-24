#!/bin/bash

# Navigate to the project directory
cd /Users/jinhan/repos/doctakim.com

# Run the update music script
npm run update-music

# Optional: Commit and push changes to git
# Uncomment the lines below if you want to auto-commit the changes
git add src/data/top_songs_artists.ts
git commit -m "chore: update Spotify music data"
git push
