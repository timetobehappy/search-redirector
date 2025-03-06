# Search Redirector Chrome Extension

A Chrome extension that allows you to quickly search selected text across multiple search platforms including ChatGPT, Google, Brave, and Grok.

## Features

- Right-click context menu integration
- Search selected text on:
  - ChatGPT
  - Google
  - Brave Search
  - Grok

## Installation

### Option 1: Installing from Git
1. Open your terminal
2. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/search-redirector.git
   ```
3. Open Chrome and navigate to `chrome://extensions/`
4. Enable "Developer mode" by clicking the toggle switch in the top right corner
5. Click "Load unpacked" button in the top left
6. Navigate to the directory where you cloned the repository and select it
7. The extension should now appear in your extensions list and be ready to use

### Option 2: Installing from ZIP
1. Download the ZIP file from the repository
2. Extract the ZIP file to a location on your computer
3. Open Chrome and navigate to `chrome://extensions/`
4. Enable "Developer mode" by clicking the toggle switch in the top right corner
5. Click "Load unpacked" button in the top left
6. Navigate to the extracted folder and select it
7. The extension should now appear in your extensions list and be ready to use

## Usage

1. Select any text on a webpage
2. Right-click to open the context menu
3. Choose your preferred search platform:
   - "Search ChatGPT for '[selected text]'"
   - "Search Google for '[selected text]'"
   - "Search Brave for '[selected text]'"
   - "Search Grok for '[selected text]'"
4. A new tab will open with your search results

## Development

The extension consists of:
- `manifest.json`: Extension configuration
- `background.js`: Handles context menu creation and click events
- Icon files in different sizes (16px, 48px, 128px)

## Contributing

Feel free to submit issues and enhancement requests! 