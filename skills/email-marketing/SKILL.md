---
name: email-marketing
description: Expert email marketing program skill: lifecycle/CRM strategy, list growth and hygiene, segmentation, deliverability and compliance, broadcast campaigns, flows, ESP strategy, and measurement in the post-Apple-MPP era. Use whenever the user mentions email marketing, email program, ESP, Klaviyo, Mailchimp, Brevo, HubSpot email, Customer.io, MailerLite, deliverability, inbox placement, SPF/DKIM/DMARC, one-click unsubscribe, sender reputation, spam rate, bounce rate, list growth, list cleaning, sunset policy, segmentation, welcome flow, abandoned cart, post-purchase, win-back, re-engagement, newsletter, email cadence, subject lines, send-time optimization, email benchmarks, open rate, or click rate. Do NOT use for cold outbound prospecting (see cold-email) or writing one multi-email sequence end to end (see emails). Owns the strategy, deliverability, and measurement layer of an owned-audience email program.
---

# Email Marketing

## When to Use This Skill
- Designing or auditing an owned-audience email program (not cold outbound)
- Fixing deliverability - emails landing in spam, low inbox placement, rejections
- Setting up authentication and 2026 compliance (SPF/DKIM/DMARC, one-click unsubscribe)
- Growing and cleaning a list (opt-in strategy, sunsetting, re-engagement)
- Building the segmentation model and the core lifecycle flows
- Planning the campaign calendar and cadence
- Choosing/operating an ESP and deciding what to automate
- Reporting email performance honestly in the post-MPP era

Boundary: cold prospecting → `cold-email`; a single named sequence's full copy → `emails`. This skill is the program, deliverability, and measurement layer.

## The Program Model: Flows Beat Campaigns
The single most important structural truth in email today: **automated flows generate the majority of email revenue from a tiny fraction of sends** (roughly 40% of email revenue from ~5% of volume). Build the flows first, campaigns second.

**Core lifecycle flows, in priority order:**
1. **Welcome / onboarding** - fires on signup; sets expectations, delivers the opt-in promise, drives first action
2. **Abandoned cart / browse / form abandon** - highest-intent, highest-ROI trigger
3. **Post-purchase** - confirmation, education, cross-sell, review request, replenishment
4. **Win-back / re-engagement** - before suppressing inactives, always run a 2 - 3 email recovery sequence
5. **Replenishment / renewal** - time-based for consumables and subscriptions

Campaigns (broadcasts) layer on top for launches, promos, and the newsletter - but never carry the program alone.

## Deliverability & Compliance (Non-Negotiable in 2026)
Inbox placement is now a hard gate with regulatory-style enforcement. If mail does not arrive, nothing else matters.

**Authentication stack (required for any real sender, mandatory at 5,000+/day to Gmail/Yahoo):**
- **SPF** - authorize your sending IPs/servers
- **DKIM** - cryptographically sign every message (1024-bit minimum)
- **DMARC** - publish a policy (start `p=none`, move toward `quarantine`/`reject`); the From domain must align with SPF or DKIM
- Valid forward + reverse DNS (PTR), TLS, RFC 5322 formatting, no Gmail From: spoofing

**One-click unsubscribe** - RFC 8058 List-Unsubscribe header on all marketing mail; honor within 2 days; keep a visible unsubscribe link in the body.

**Reputation thresholds (treat as compliance, not vanity):**
- Spam complaint rate: keep **below 0.1%**, never reach **0.3%** (enforcement trigger on Gmail and Yahoo)
- Bounce rate: keep **below ~1 - 2%** - Gmail (permanent 5xx rejections since Nov 2025) and Microsoft (550 5.7.515 since May 2025) now block, not just filter
- Warm new domains/IPs gradually; segregate marketing, transactional, and cold sending across different subdomains/IPs

**Deliverability monitoring:** Google Postmaster Tools + Yahoo Complaint Feedback Loop; verify lists pre-send; watch for blocklist hits and sudden open-rate drops (the one remaining good use of open rate).

## List Growth & Hygiene
- **Quality over volume.** A smaller engaged list beats a large stale one on every metric and protects the sender reputation that gates the whole program.
- **Double opt-in (confirmed opt-in)** for high-risk acquisition sources - it kills bots, typos, and spam-trap signups and improves every downstream metric.
- **Sunset policy** - define active vs inactive by recency of last *click*, not last *open* (see metrics). Run re-engagement, then suppress non-responders.
- **Never buy or scrape lists** - guaranteed spam complaints, traps, and reputation damage.

## Segmentation
- Segment by **recency of last click**, lifecycle stage, purchase behavior, and explicit preferences - not by open activity, which Apple MPP has made unreliable.
- "Active list" = clicked in the last ~90 days. Everyone else routes to re-engagement before the next broadcast.
- Send relevance, not volume - sending the same message to the whole list is the fastest way to drag down deliverability and engagement.

## Copy, Design & Send
- **Subject line** - under ~50 characters for mobile, one clear idea, real personalization, curiosity/value without clickbait; A/B test on click/revenue, not opens
- **Sender name** - a human "Name from Brand" usually beats the brand name alone; test it
- **Mobile-first** - ~55% of opens are mobile; single column, large tap targets, front-load the message
- **One primary CTA** per email; the more choices, the lower the action
- **Plain-text-feel** emails often outperform heavy graphic templates for relationship and B2B
- Consider interactive/AMP elements where the ESP and audience support them

## Metrics in the Post-MPP Era
Open rate is a **health metric, not a success metric.** Apple MPP pre-loads tracking pixels, so roughly half of reported opens can be machine-generated; dashboards overstate true opens by ~15 - 20 points.

| Metric | Status in 2026 | Use it for |
|--------|----------------|------------|
| Open rate | Inflated/unreliable | Trend/deliverability early-warning only (a sudden drop = a problem) |
| Click rate (CTR) | Reliable (requires a real action) | Primary engagement benchmark |
| Revenue per email / conversion | Most reliable | The metric that ties email to the business |
| CTOR | Muddied by MPP-inflated denominator | Compare your own campaigns, not cross-industry benchmarks |
| Unsubscribe / spam / bounce | Reliable + compliance-critical | List health and deliverability gates |

**Bot filtering matters now:** security scanners (Outlook Safe Links, Gmail link protection) and AI crawler user-agents inflate clicks and can trigger flows or click unsubscribe/confirm links. Filter known bot opens/clicks before reporting and before acting on engagement-based automations.

## ESP Strategy
- Match the ESP to the model: ecommerce/lifecycle (Klaviyo, Omnisend), product/SaaS behavioral (Customer.io, Braze), SMB/newsletter (MailerLite, Brevo, Mailchimp), B2B + CRM (HubSpot).
- Audit before you migrate - most teams under-use the ESP they already have.
- Make sure the ESP handles SPF/DKIM alignment, one-click unsubscribe headers, and MPP-exclusion filters in reporting.

## AI in Email (2026)
- **Generative:** AI-assisted subject lines have shown ~26% open-rate lifts; use AI for variant generation, content drafts, and segmentation hypotheses - keep a human on voice and final judgment.
- **Predictive:** send-time optimization, churn/propensity scoring, and next-best-content drive measurable lift (send-time optimization ~+14% when paired with AI subject lines).
- By late 2026 a majority of larger programs use AI for at least one campaign element - but ROI comes from clean data and tight segmentation, not the model alone.

## Anti-Patterns
- Don't report open rate as a success metric or A/B test on opens - MPP has broken it
- Don't blast the whole list every send - relevance protects deliverability
- Don't skip authentication - unauthenticated mail now gets rejected, not just filtered
- Don't suppress inactives without a re-engagement attempt first
- Don't buy/scrape lists or send without confirmed opt-in on risky sources
- Don't run marketing, transactional, and cold mail off the same domain/IP
- Don't act on engagement automations without bot-filtering clicks
- Don't treat email as a campaign channel only - flows are where the revenue is

## Current Standards (as of mid-2026 - refresh annually)
- **ROI:** email remains the highest-return digital channel at roughly **$36 - 42 per $1** spent, far ahead of paid search/social.
- **Benchmarks (MPP-excluded, Brevo 2026):** average open ~20.7%, CTR ~2.3%; automation/triggered emails far outperform at ~30.6% open / ~7.4% CTR. Top-decile senders roughly double these. (MPP-inclusive open rates report ~33 - 44%+ - do not benchmark on those.)
- **Apple Mail** is ~58% of opens (Litmus), which is why open rate is unreliable.
- **Flows** drive ~41% of email revenue from ~5% of sends (Klaviyo 2026).
- **Enforcement:** Gmail moved to permanent rejections for non-compliant mail in Nov 2025; Microsoft enforces 550 5.7.515 since May 2025; authentication is now table stakes globally ("Yahooglesoft").
- **Segment on last click, not last open** - the defining measurement shift of the era.
