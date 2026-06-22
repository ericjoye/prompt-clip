# SELLER-REPORT: Prompt Clip — CWS Submission Plan

**Product:** Prompt Clip — AI Prompt Builder v1.0.0
**Slug:** prompt-clip
**Date:** 2026-06-21
**QA Status:** PASS — ready for CWS submission
**CWS Category:** Productivity
**Pricing:** Free (Pro tier with custom templates, aspirational)

---

## Submission Readiness Score: 7/10

### What's Ready
- [x] Store listing copy (name, short + long description, keywords) — `launch/store-listing.md`
- [x] Privacy policy — `PRIVACY.md` (needs email filled in)
- [x] Extension icons (16/48/128px) — `assets/`
- [x] HTML screenshot mockup — `screenshots/screenshot1.html`
- [x] Landing page copy — `launch/landing.md`
- [x] Pricing strategy — `launch/pricing.md`
- [x] Escalation checklist — `~/hermes_ops/escalations/prompt-clip.md`
- [x] Screenshot specs documented (5 screenshots + 1 promo tile)

### What's Missing (Blocking)
- [ ] **Real screenshots** — HTML mockup exists. Need 5 actual PNG screenshots from Chrome.
- [ ] **Promo tile** — 440x280px PNG required. No mockup exists.
- [ ] **Extension ZIP** — Must exclude README, BUILD-REPORT, TEST-REPORT, BRIEF.md, generate_icons.py, launch/
- [ ] **Privacy policy email** — `[YOUR EMAIL ADDRESS]` placeholder
- [ ] **CWS developer account** — $5 one-time fee, human action required
- [ ] **Demo GIF/video** — Screen recording of select text → right-click → template → paste into ChatGPT
- [ ] **Privacy policy hosting** — CWS requires a link to privacy policy. Must host `privacy.html` on GitHub or similar.

### CWS Submission Checklist
1. Register CWS developer account ($5) — HUMAN
2. Fill in `[YOUR EMAIL ADDRESS]` in PRIVACY.md — HUMAN
3. Host privacy policy (convert PRIVACY.md to HTML, push to GitHub) — HUMAN
4. ZIP the extension: `cd ~/businesses/prompt-clip && zip -r /tmp/prompt-clip-v1.0.0.zip manifest.json background.js options.html options.js privacy.html icons/` — HUMAN
5. Load extension in Chrome (Developer mode → Load unpacked) — HUMAN
6. Capture 5 real screenshots as PNG (context menu, ChatGPT output, options page, shortcut feedback, before/after) — HUMAN
7. Create 440x280 promo tile PNG — HUMAN
8. Record demo GIF — HUMAN
9. Upload ZIP to CWS developer console — HUMAN
10. Fill listing from `launch/store-listing.md` — HUMAN
11. Upload screenshots + promo tile + demo GIF — HUMAN
12. Set category: Productivity — HUMAN
13. Set visibility: Public — HUMAN
14. Link privacy policy URL — HUMAN
15. Submit for review — HUMAN

### Estimated Human Time: 2 hours
### Total Cost: $5 (CWS developer account)

---

## Post-Submission Launch Plan
- **Day 1:** Submit to CWS, Reddit posts (r/chrome, r/chromeextensions), Twitter launch
- **Day 2:** Reddit (r/ChatGPT, r/ClaudeAI), schedule Product Hunt
- **Day 3:** Product Hunt launch, Show HN on Hacker News
- **Day 4:** Reddit (r/productivity), deploy landing page
- **Day 5-7:** Review metrics, respond to feedback, gather feature requests for Pro tier

### Key Risks
- **Low** — Simple extension, no external API calls, no payment integration. Should pass review easily.
- **Medium** — AI-related extensions are trending. Good timing for launch but also means more competition.
- **Known issue:** "Disabled templates still show in context menu" — cosmetic bug, fix in v1.1.
- **Pro tier not implemented** — Free tier only at launch. Custom templates are the main Pro feature.
