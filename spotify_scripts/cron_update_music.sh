#!/bin/bash

# Define log file
LOG_FILE="$(dirname "$0")/update_music.log"

# Function to log messages with timestamp
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

log_message "Starting Spotify music data update..."

# Load NVM environment
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
    . "$NVM_DIR/nvm.sh"
    log_message "NVM loaded successfully."
else
    log_message "ERROR: Could not find nvm.sh at $NVM_DIR/nvm.sh"
    exit 1
fi

# Navigate to the project directory (one level up from this script)
cd "$(dirname "$0")/.." || { log_message "ERROR: Failed to change directory to project root."; exit 1; }

# Run the update music script
log_message "Running npm run update-music..."
if npm run update-music >> "$LOG_FILE" 2>&1; then
    log_message "Music data updated successfully."
else
    log_message "ERROR: npm run update-music failed."
    exit 1
fi

# Check if there are changes to commit
if [[ -n $(git status -s src/data/top_songs_artists.ts) ]]; then
    log_message "Changes detected. Committing and pushing..."
    git add src/data/top_songs_artists.ts
    if git commit -m "chore: update Spotify music data" >> "$LOG_FILE" 2>&1; then
        if git push >> "$LOG_FILE" 2>&1; then
            log_message "Changes pushed successfully."
        else
            log_message "ERROR: git push failed."
            exit 1 # Failing push might not be fatal for the update itself, but good to know
        fi
    else
        log_message "ERROR: git commit failed."
        exit 1
    fi
else
    log_message "No changes detected in src/data/top_songs_artists.ts."
fi

log_message "Script finished."
