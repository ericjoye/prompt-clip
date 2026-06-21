# Prompt Clip — Chrome Extension MVP

A Chrome extension that turns selected text into ready-to-paste AI prompts with one click. Wraps snippets in contextual markdown templates for ChatGPT, Claude, and Gemini.

## Features

- **Context menu integration** — Select text, right-click, "Send to AI" submenu with 5 templates
- **5 built-in prompt templates** — Summarize, Explain, Translate, Find Action Items, Code Review
- **Auto-context framing** — Each prompt includes: page title, source URL, date, and selected text
- **Keyboard shortcut** — Ctrl+Shift+P (or Cmd+Shift+P) triggers last-used template
- **Copy to clipboard** — One-click copy, no accounts, no network calls
- **Options page** — Toggle templates on/off, choose default template
- **Zero dependencies** — Pure vanilla JS, no build step needed
- **Privacy-first** — No data collection, no accounts, no tracking

## How to Load in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right corner)
3. Click "Load unpacked"
4. Select the `prompt-clip/` folder
5. The extension icon will appear in your toolbar

## Usage

1. Select any text on a web page
2. Right-click → hover over "Send to AI" → choose a template
3. The formatted prompt is copied to your clipboard
4. Paste into ChatGPT, Claude, or Gemini

**Keyboard shortcut:** Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) with text selected to trigger the last-used template.

## File Layout

```
prompt-clip/
├── manifest.json        # Extension manifest (Manifest V3)
├── background.js        # Service worker — context menu, keyboard, clipboard
├── options.html         # Options page UI
├── options.js           # Options page logic
├── privacy.html         # Privacy policy
├── icons/
│   ├── icon16.png       # Toolbar icon (16x16)
│   ├── icon48.png       # Toolbar icon (48x48)
│   └── icon128.png      # Chrome Web Store icon (128x128)
├── generate_icons.py    # Icon generation script (can be deleted)
├── BRIEF.md             # Original product brief
├── BUILD-REPORT.md      # Build report
└── README.md            # This file
```

## Tech Stack

- Manifest V3 Chrome extension
- chrome.contextMenus API
- chrome.scripting API
- chrome.storage.local
- Clipboard API (via content script injection)
- Zero external dependencies

## Known Gaps

- Icons are simple geometric shapes (not polished design assets)
- No custom template creation (free tier only — Pro feature)
- No export history (Pro feature)
- No template sharing (Pro feature)
- Clipboard write requires `scripting` permission injection (standard MV3 limitation)
