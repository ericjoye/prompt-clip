# Privacy Policy — Prompt Clip

**Last updated:** June 20, 2026

## Overview

Prompt Clip ("we", "our", "the extension") is a Chrome extension that turns selected text into ready-to-paste AI prompts with one click. It wraps snippets in contextual markdown templates for ChatGPT, Claude, and Gemini.

## Data Collection

**Prompt Clip does NOT collect, store, or transmit any personal data.**

All processing happens locally in your browser. When you use Prompt Clip:

- **No data is sent to external servers.** Selected text is formatted into prompt templates entirely within your browser. Nothing is uploaded anywhere.
- **No tracking or analytics.** We do not use Google Analytics, Mixpanel, or any other tracking service.
- **No cookies.** Prompt Clip does not set or read any cookies.
- **No account required.** There is no signup, login, or user account system.
- **No network calls.** The extension operates entirely offline. It does not make any network requests.

## Local Storage

The only data stored by Prompt Clip is kept locally in your browser using Chrome's `chrome.storage.local` API:

- **Template preferences** — Which templates are enabled/disabled and your default template selection.
- **Last-used template** — Remembered for keyboard shortcut convenience.

This data never leaves your device.

## Permissions

Prompt Clip requests the following Chrome permissions:

- **contextMenus** — To add "Send to AI" options to the right-click context menu.
- **scripting** — To inject content scripts that read selected text from web pages.
- **storage** — To store your template preferences locally in your browser.
- **clipboardWrite** — To copy the formatted prompt to your clipboard.

## How It Works

When you select text and choose a template (via context menu or keyboard shortcut), the extension:

1. Reads the selected text from the page.
2. Wraps it in the chosen template with page title, URL, and date.
3. Copies the result to your clipboard.

No data is stored, logged, or transmitted at any point.

## Third-Party Services

Prompt Clip does not integrate with any third-party services. The formatted prompt is copied to your clipboard for you to paste into your AI tool of choice.

## Changes to This Policy

We may update this privacy policy from time to time. Any changes will be reflected in the extension's listing on the Chrome Web Store and in the extension's source code.

## Contact

If you have questions about this privacy policy, contact us at: [YOUR EMAIL ADDRESS]
