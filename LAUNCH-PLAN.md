# LAUNCH-PLAN: Prompt Clip v1.0.0

**Product:** Prompt Clip — AI Prompt Builder Chrome Extension
**Date:** 2026-06-20
**Status:** Ready for human publishing actions

---

## Launch Channels (Priority Order)

### 1. Chrome Web Store (Primary)
The main distribution channel. Chrome extensions get organic discovery through CWS search.
- **Action required:** Human must create developer account ($5 one-time fee) and submit extension
- **Timeline:** Submit on Day 1; review takes 1-3 business days
- **Assets needed:** Store listing copy, 5 screenshots, promo tiles, privacy policy link

### 2. Product Hunt (Launch Day)
Great for developer tools. Drives initial traffic and reviews.
- **Action required:** Human must create Product Hunt account and schedule launch
- **Timeline:** Schedule for Day 2-3 (after CWS approval)
- **Assets needed:** Tagline, description, screenshots, maker comment

### 3. Reddit (Organic, Days 1-7)
Target subreddits: r/chrome, r/chromeextensions, r/ChatGPT, r/ClaudeAI, r/productivity
- **Action required:** Human must post (authentic, non-spammy) in relevant subreddits
- **Timeline:** Stagger posts across the first week
- **Note:** Follow each subreddit's self-promotion rules

### 4. Twitter/X (Organic, Days 1-7)
Short demo video or GIF showing the extension in action.
- **Action required:** Human must post and engage with replies
- **Timeline:** Day 1 launch tweet, then engagement throughout the week

### 5. Hacker News (Show HN, Day 3-5)
"Show HN: Prompt Clip — turn selected text into AI prompts"
- **Action required:** Human must post and monitor comments
- **Timeline:** Mid-week, after initial feedback from other channels

### 6. Landing Page (Ongoing)
Simple one-page site with install link, demo GIF, and FAQ.
- **Action required:** Human must deploy landing.md to a hosted page
- **Options:** GitHub Pages (free), Vercel (free), or custom domain

---

## First Week Plan

| Day | Action | Channel | Owner |
|-----|--------|---------|-------|
| 1 | Submit to Chrome Web Store | CWS | HUMAN |
| 1 | Post in r/chrome, r/chromeextensions | Reddit | HUMAN |
| 1 | Tweet launch announcement | Twitter/X | HUMAN |
| 2 | Post in r/ChatGPT, r/ClaudeAI | Reddit | HUMAN |
| 2 | Schedule Product Hunt launch | Product Hunt | HUMAN |
| 3 | Launch on Product Hunt | Product Hunt | HUMAN |
| 3 | Post Show HN on Hacker News | HN | HUMAN |
| 4 | Post in r/productivity | Reddit | HUMAN |
| 5 | Deploy landing page | Web | HUMAN |
| 5 | Share landing page on socials | Twitter/X | HUMAN |
| 7 | Review metrics, respond to feedback | All | HUMAN |

---

## Exact Human Actions Required

See `~/hermes_ops/escalations/prompt-clip.md` for the complete checklist.

### Summary of human-only tasks:

1. **Chrome Web Store Developer Account**
   - Register at https://chrome.google.com/webstore/devconsole ($5 one-time fee)
   - Verify identity

2. **Prepare CWS submission package**
   - Zip the extension directory (exclude README.md, BUILD-REPORT.md, TEST-REPORT.md, generate_icons.py)
   - Create 5 screenshots (see store-listing.md for specs)
   - Create promo tile (440x280)
   - Copy store listing from `launch/store-listing.md`
   - Link to privacy policy (host `privacy.html` or use GitHub)

3. **Submit to Chrome Web Store**
   - Upload zip, fill in listing, submit for review
   - Respond to any review feedback

4. **Create Product Hunt listing**
   - Write tagline and description
   - Upload screenshots
   - Schedule launch

5. **Create social media posts**
   - Twitter/X launch tweet with demo GIF
   - Reddit posts (authentic, follow sub rules)
   - Hacker News Show HN post

6. **Deploy landing page**
   - Host `launch/landing.md` as a web page
   - Options: GitHub Pages, Vercel, or Netlify (all free)
   - Add Chrome Web Store install link

7. **Optional: Create demo GIF/video**
   - Screen recording of the extension in action
   - Show: select text → right-click → template → paste into ChatGPT
   - Use for CWS, Product Hunt, Twitter, landing page

---

## Success Metrics (First 30 Days)

- Chrome Web Store installs: Target 100+
- CWS rating: Target 4.0+ stars
- Product Hunt upvotes: Target 50+
- Reddit engagement: Target 500+ upvotes across posts
- Landing page visitors: Target 1,000+

---

## Post-Launch Priorities

1. Monitor CWS reviews and respond to feedback
2. Fix the "disabled templates still show in context menu" cosmetic issue
3. Gather feature requests for Pro tier (custom templates)
4. Consider adding template sharing/community features
5. Evaluate conversion to Pro tier pricing
