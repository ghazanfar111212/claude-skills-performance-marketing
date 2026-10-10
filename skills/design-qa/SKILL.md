---
name: design-qa
description: Render-and-critique loop for landing pages - screenshot the built page in headless Chrome at mobile and desktop widths, visually critique the screenshots against the landing-page-visual-standards checklist, fix, and re-render until it passes. Use in Claude Code whenever a landing page or funnel page HTML file has been built or edited, before presenting it to the user. Trigger on "QA this page", "check the design", "does this look right", or automatically as the final step of any landing page build. Requires a local environment that can run Node + Playwright (Claude Code, not claude.ai chat).
---

# Design QA - Render, Look, Fix, Repeat

Code review is not design review. This skill forces the loop a human designer runs by default: **look at the rendered page, not the source.**

## Setup (once per machine)

```bash
npm init -y && npm install playwright
npx playwright install chromium
```

## The loop (minimum 2 passes, typical 3)

1. **Render** the page at both breakpoints:
   ```bash
   node scripts/screenshot.js path/to/page.html
   ```
   Produces `qa/page-390.png` (mobile, full page) and `qa/page-1440.png` (desktop, full page) plus `qa/page-390-fold.png` (mobile above-the-fold only).

2. **Read all three screenshots** and critique them against `landing-page-visual-standards/CHECKLIST.md`, plus these render-only checks that source code can't reveal:
   - Above-the-fold (mobile): is the CTA fully visible? Is the headline uncomfortably wrapped (widows, 1-word lines)?
   - Spacing rhythm: do section gaps look even? Any section cramped against another?
   - Contrast in practice: is body text comfortably readable on its actual background?
   - Overflow: any horizontal scrollbar, clipped text, or element bleeding off-canvas at 390px?
   - The signature element: does it actually read as the hero moment, or does it get lost?
   - Font loading: did the display face render, or is it showing a fallback?
   - Squint test: blur your reading of the desktop shot - does the eye land on the CTA first?

3. **Fix everything found. Re-render. Re-critique.** Do not present the page to the user until a pass produces zero findings, or remaining findings are explicitly listed as accepted trade-offs.

4. **Present** the final screenshots alongside the file so the user sees what you saw.

## Rules

- Never skip the mobile fold screenshot - 70%+ of paid traffic is mobile and the fold decides the bounce.
- Fix in code, never by cropping the screenshot story.
- If Playwright is unavailable, say so and fall back to line-by-line CSS review - but flag that visual QA didn't run.
