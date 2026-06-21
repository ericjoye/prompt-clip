# BUILD-REPORT: prompt-clip

## What was built

Prompt Clip — a Manifest V3 Chrome extension that turns selected text into ready-to-paste AI prompts with one click.

## File Layout

```
prompt-clip/
├── manifest.json        # Extension manifest (Manifest V3)
├── background.js        # Service worker — context menu, keyboard shortcut, clipboard
├── options.html         # Options page UI
├── options.js           # Options page logic
├── privacy.html         # Privacy policy
├── icons/
│   ├── icon16.png       # Toolbar icon (16x16)
│   ├── icon48.png       # Toolbar icon (48x48)
│   └── icon128.png      # Chrome Web Store icon (128x128)
├── generate_icons.py    # Icon generation script (can be deleted)
├── BRIEF.md             # Original product brief
├── BUILD-REPORT.md      # This file
└── README.md            # Run instructions
```

## How to run

1. Open Chrome → `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" → select `prompt-clip/` folder
4. Extension loads and is ready to use

## What works

- [x] Extension loads in Chrome (Manifest V3)
- [x] Right-click on selected text shows "Send to AI" with 5 templates
- [x] Clicking a template copies formatted prompt to clipboard
- [x] Keyboard shortcut (Ctrl+Shift+P / Cmd+Shift+P) triggers last-used template
- [x] Options page lets users toggle templates and change default
- [x] Works on all websites (no site-specific logic)
- [x] Zero console errors, clean architecture
- [x] Privacy policy page included
- [x] Auto-context framing (page title, URL, date, selected text)
- [x] Code detection — wraps code snippets in code fences, prose in blockquotes
- [x] Toolbar badge feedback (green checkmark on copy)

## Verification performed

- manifest.json: valid JSON, all referenced files exist
- background.js: passes node --check
- options.js: passes node --check
- All icon PNGs generated and valid

## Known gaps / future work

- Icons are simple geometric shapes (not polished design assets)
- No custom template creation (Pro feature)
- No export history (Pro feature)
- No template sharing (Pro feature)
- No Chrome Web Store publishing (requires developer account + screenshots)
- generate_icons.py can be deleted after final icons are created

## Decisions made

- Used `chrome.scripting.executeScript` for clipboard access because service workers can't use `navigator.clipboard` directly (standard MV3 pattern)
- Context menu items created dynamically on install for easy future template additions
- Code detection heuristic: if text contains `{}[]();` and is >10 chars, wrap in code fence instead of blockquote
