---
name: cold-email-outreach
description: Expert skill for cold email outreach campaigns at scale. Use whenever the user mentions cold email, outbound email, Instantly, Smartlead, Lemlist, Apollo, ZoomInfo, email warmup, domain warming, SPF/DKIM/DMARC, inbox rotation, sending infrastructure, cold email deliverability, reply rates, personalization at scale, lead list building, email sequences, B2B outbound, or "book more meetings from cold email." Also trigger for "write a cold email," "build an outbound sequence," "my cold emails aren't landing in inbox," or agency client acquisition via email. Do NOT use for transactional email, newsletter marketing, or warm email to existing contacts - use email-marketing-expert for those. Covers infrastructure setup, list building, personalization frameworks, copy frameworks, sequence design, deliverability troubleshooting, and reply handling.
---

# Cold Email Outreach Expert

## When to Use This Skill
- Setting up cold email infrastructure (domains, inboxes, warmup)
- Writing cold email sequences (first-touch, follow-ups, breakup)
- Building lead lists and personalization at scale
- Troubleshooting deliverability (landing in spam, low opens)
- Scaling volume safely without burning domains
- Agency client acquisition or B2B outbound

## Infrastructure Setup (Do This Right or Nothing Works)

### Domain Strategy
- **Never send from primary domain** (yourbrand.com)
- Buy 2-5 lookalike domains: `yourbrand.io`, `tryyourbrand.com`, `getyourbrand.com`, `yourbrand.co`
- Each domain hosts 2-3 inboxes (e.g., firstname@, firstname.lastname@, hello@)
- 3 domains × 3 inboxes = 9 sending inboxes = ~270 emails/day safely

### DNS Records (All Mandatory)
- **SPF**: Authorizes sending IPs
- **DKIM**: Signs emails with domain key
- **DMARC**: Policy for handling SPF/DKIM failures (start with `p=none`, move to `quarantine` later)
- **MX records**: Pointing to Google Workspace or Microsoft 365
- **Custom tracking domain**: Per sender tool (Instantly/Smartlead)

### Inbox Providers
- **Google Workspace**: Best deliverability, $6/mo per inbox, manual setup
- **Microsoft 365**: Cheaper at scale, decent deliverability, easier bulk setup
- **Avoid**: Outlook.com, Yahoo, any free provider

### Warmup Period
- **Minimum 14 days** warmup before any real sending
- Start at 20-30 warmup emails/day, increase 10/day until hitting 50+
- Use Instantly/Smartlead built-in warmup (Mailwarm, Warmup Inbox as alternatives)
- Monitor inbox placement: aim for 90%+ primary inbox before launching

### Daily Send Limits
- New inbox: 20-30/day for first month
- Mature inbox (60+ days): 30-50/day max
- Never exceed 50/inbox/day - hard ceiling
- Spread sends across 8-10 hours, not bursts

## List Building

### Sources (by quality)
1. **LinkedIn Sales Navigator + scraper** (Evaboot, Phantombuster) - highest intent
2. **Apollo / Lead411** - broad coverage, medium quality
3. **Clay + multi-source enrichment** - best for precision + signal-based targeting
4. **Built from intent data** (BuiltWith, Wappalyzer for tech stack signals)

### ICP Definition Before Sourcing
Never skip this - bad list = bad results regardless of copy:
- Industry (SIC/NAICS specific)
- Company size (employee count + revenue range)
- Geography
- Tech stack signals (uses Shopify, HubSpot, etc.)
- Role seniority + function (Owner, VP Marketing, Head of Growth)
- Trigger events (recent funding, new hire, expansion)

### Verification Is Mandatory
Run every list through:
- MillionVerifier, NeverBounce, or ZeroBounce
- Remove catch-all domains from primary sends (or isolate to separate campaign)
- Target bounce rate: <2%

## Copy Frameworks

### The "Specific Observation → Relevant Offer → Light CTA" Framework
This is the core formula for first-touch emails:

1. **Opener**: Specific, personal observation (not "I came across your website")
2. **Relevance**: Connect the observation to a problem your offer solves
3. **Credibility**: One-sentence proof (case study, result, similar client)
4. **CTA**: Low-commitment ask (reply, 15-min call, resource share)

### Good Opener Examples
- "Saw your team just launched the [specific product] - the positioning around [specific angle] stood out."
- "Noticed you're hiring a [specific role] - usually signals [specific need]."
- "Your post about [topic] made me think about [related challenge our client faced]."

### Bad Opener Examples (Never Use)
- "I hope this email finds you well"
- "I came across your website"
- "My name is X and I'm the CEO of Y"
- "I'll keep this brief" (then writes 300 words)

### Subject Line Rules
- 3-5 words maximum
- Lowercase often outperforms title case
- No spam triggers: FREE, GUARANTEED, !!, $$$, ALL CAPS
- Best performers: curiosity gaps, reference to recipient's company, casual tone
- Examples: "quick question", "{{company}} + [your angle]", "saw your {{post_topic}}"

### Personalization Levels
- **Level 1 (bad)**: {{firstName}} + {{company}} - barely personalization
- **Level 2 (okay)**: Industry-specific line based on vertical
- **Level 3 (good)**: Role-based pain point + industry context
- **Level 4 (great)**: Manual 1-liner based on LinkedIn/website research
- **Level 5 (AI-assisted)**: Clay + GPT/Claude generating Level 4 at scale

## Sequence Design

### Standard 4-Email Sequence
- **Day 1**: Main pitch (your best shot)
- **Day 3**: Short bump - "any thoughts?" or new angle
- **Day 7**: Value-add - share a resource, case study, or insight
- **Day 12**: Breakup - "closing the loop, let me know if timing's bad"

### Sequence Principles
- Each email should be independently valuable
- Don't chase - the breakup email often gets the best reply rate
- Vary length: long pitch → short bump → medium value → short breakup
- Keep follow-ups in the same thread (reply to your own email)

### Advanced: Multi-Channel Sequences
Layer in:
- LinkedIn connection request (Day 0, before email)
- LinkedIn message (Day 5)
- Voice note via LinkedIn (Day 9)
- Phone call (if data available, Day 10)

## Deliverability Troubleshooting

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| <20% open rate | Landing in spam | Check spam placement tests, pause and re-warm |
| Good opens, <1% replies | Copy or targeting issue | A/B test subject + first line, re-check ICP |
| Sudden drop in opens | Domain reputation tanked | Pause campaign, warm up, check blocklists |
| Bounces >3% | Bad list hygiene | Re-verify list, remove catch-alls |
| Google marking as spam | DKIM/DMARC misconfig or content triggers | Audit DNS, remove spammy words, add plaintext version |

### Blocklist Checks
Tools: MXToolbox, Spamhaus, Barracuda
If listed, pause sending immediately and request delisting.

## Reply Handling

### Response Categories
- **Positive**: Book call immediately, don't delay
- **Not now / timing**: Ask when to re-engage, set reminder
- **Wrong person**: Ask for correct contact by name
- **Unsubscribe**: Remove immediately (and from all future campaigns)
- **Angry**: Apologize briefly, remove, don't argue

### Speed Matters
- Reply to positive responses within 2 hours during business hours
- Have pre-written response templates for each category

## Volume Scaling Playbook
- Week 1-2: 1 domain, 2 inboxes, 50 emails/day total
- Week 3-4: Add 1 domain, 4 inboxes, 100 emails/day
- Month 2: 3 domains, 9 inboxes, 250-300 emails/day
- Month 3+: Add domains as needed for growth, never push existing infrastructure past safe limits

## Anti-Patterns
- Don't attach files to cold emails (triggers spam filters)
- Don't include too many links (1 max in first-touch)
- Don't use images in cold emails (lowers deliverability)
- Don't buy lists from sketchy providers
- Don't send from yourbrand.com directly
- Don't write walls of text - 50-90 words max
- Don't include calendly link in first email (too pushy, reduces replies)
- Don't mass-send on Monday 9am (peak spam filtering)

## Compliance Notes
- **CAN-SPAM (US)**: Include physical address + unsubscribe. B2B cold email is legal.
- **GDPR (EU)**: Legitimate interest basis applies for B2B role emails, but risky. Require opt-out mechanism.
- **CASL (Canada)**: Requires explicit or implicit consent. Cold email is riskier; use LinkedIn first.
- **Pakistan/UAE/MENA**: Generally permissive for B2B outreach. Follow recipient country rules.
