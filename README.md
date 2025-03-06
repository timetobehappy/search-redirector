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

1. Clone this repository or download the ZIP file
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the directory containing the extension files

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