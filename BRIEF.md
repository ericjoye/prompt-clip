# Prompt Clip

## One-liner
A Chrome extension that turns selected text into ready-to-paste AI prompts with one click — wraps snippets in contextual markdown templates for ChatGPT, Claude, and Gemini.

## Target user
Developers, researchers, writers, and power users who frequently copy text from web pages into AI chat tools and want to save time formatting context.

## Problem
When you find an interesting paragraph, code snippet, or data table online and want to ask an AI about it, you:
1. Copy the text
2. Switch to ChatGPT/Claude
3. Manually type "Here's some text: [paste] Can you summarize this?"
4. Repeat for every snippet

This is repetitive friction that happens dozens of times a day for knowledge workers. Existing tools like "Copy as Markdown" format the text but don't wrap it in actionable prompts. "Copy as Markdown for AI" converts entire pages (not selected snippets) and has no template system.

## MVP scope (ship in under 1 hour)
1. **Context menu integration** — Select text, right-click, "Send to AI" submenu with templates
2. **5 built-in prompt templates** — Summarize, Explain, Translate, Find Action Items, Code Review
3. **Auto-context framing** — Each prompt includes: page title, source URL, date, and selected text
4. **Keyboard shortcut** — Ctrl+Shift+P (or Cmd+Shift+P) to trigger with last-used template
5. **Copy to clipboard** — One-click copy, no accounts, no network calls
6. **Options page** — Toggle templates on/off, customize keyboard shortcut, choose default template

## Tech approach
- **Manifest V3** Chrome extension (service worker + content script)
- **chrome.contextMenus API** for right-click menu
- **chrome.scripting API** for text selection capture
- **chrome.storage.local** for user preferences (no accounts, no cloud)
- **Clipboard API** for copy-to-clipboard
- **Zero external dependencies** — pure vanilla JS, no build step needed
- **No API keys, no network requests, no tracking**

## Prompt template format
```
[TEMPLATE NAME]

Source: [Page Title]
URL: [Page URL]
Date: [Current Date]

[Selected text wrapped in markdown blockquote or code fence]

[Template-specific instruction, e.g., "Please summarize the above in 3 bullet points."]
```

Example output for "Summarize" template:
```
## Summarize

Source: "Understanding React Server Components"
URL: https://example.com/react-server-components
Date: 2026-06-20

> React Server Components let you render components on the server,
> reducing the amount of JavaScript sent to the client...

Please summarize the above in 3 bullet points.
```

## Monetization
- Free: 5 templates, basic features
- Pro ($4.99 one-time or $1.99/mo): unlimited custom templates, template categories, export history, priority support
- Alternative: Free with "Support this project" donation link

## Risks
1. **Low barrier to entry** — Simple extension, easy to replicate. Mitigate: ship fast, build community, add unique features (template sharing, AI model-specific formatting)
2. **Chrome Web Store review** — Clipboard access and context menus need careful permission justification. Mitigate: minimal permissions, clear privacy policy
3. **User retention** — Users might forget about the extension. Mitigate: keyboard shortcut, subtle toolbar badge showing "ready" state
4. **Competition from "Copy as Markdown for AI"** — They could add template features. Mitigate: focus on the prompt template UX, not just markdown conversion

## Definition of done for the MVP
- [ ] Extension loads in Chrome (Manifest V3)
- [ ] Right-click on selected text shows "Send to AI" with 5 templates
- [ ] Clicking a template copies formatted prompt to clipboard
- [ ] Keyboard shortcut (Ctrl+Shift+P) triggers last-used template
- [ ] Options page lets users toggle templates and change shortcut
- [ ] Works on all websites (no site-specific logic)
- [ ] Zero console errors, clean Chrome extension review
- [ ] Privacy policy page (no data collection)
- [ ] Published to Chrome Web Store (or loadable via chrome://extensions for testing)
