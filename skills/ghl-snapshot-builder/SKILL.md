---
name: ghl-snapshot-builder
description: Expert skill for designing and building GoHighLevel (GHL) snapshots for specific industries and verticals. Use whenever the user mentions creating a GHL snapshot, building a template account, packaging GHL for resale, industry-specific GHL builds, dental snapshots, contractor snapshots, real estate snapshots, hardscaping snapshots, medspa snapshots, home services snapshots, chiropractor snapshots, or "productize my GHL setup." Also trigger for "build a reusable GHL template," "GHL for [vertical]," or "export my sub-account as a snapshot." Covers snapshot architecture, pipeline design, workflow templates, funnel templates, email/SMS sequences, calendar setup, review request flows, and how to package for agency SaaS mode resale. Do NOT use for generic GHL setup questions - use go-high-level-expert for those.
---

# GHL Snapshot Builder

## When to Use This Skill
- Building a vertical-specific GHL snapshot (dental, contractors, real estate, etc.)
- Packaging GHL for agency resale or SaaS mode
- Designing reusable pipelines, workflows, and funnels for a niche
- Auditing an existing snapshot for gaps or improvements
- Planning what goes into a snapshot vs. what stays custom per client

## Snapshot Components Checklist

Every well-built snapshot includes these 11 components:

1. **Pipelines** (sales + fulfillment)
2. **Custom Fields** (contact + opportunity level)
3. **Custom Values** (business name, booking link, phone, etc.)
4. **Tags** (lead source, status, segmentation)
5. **Workflows** (automations)
6. **Triggers** (legacy but still useful for some)
7. **Funnels & Websites** (landing pages, booking pages)
8. **Forms & Surveys**
9. **Calendars** (with rules + confirmations)
10. **Email/SMS Templates** (reusable snippets)
11. **Conversation AI / AI Employee prompts** (if industry fits)

## Vertical Playbooks

### Dental Practice Snapshot

**Pipelines:**
- New Patient Pipeline: Lead → Contacted → Consult Booked → Consult Completed → Treatment Planned → Closed Won/Lost
- Emergency Dental Pipeline: Inbound → Triaged → Scheduled → Completed
- Implant/High-Ticket Pipeline: Lead → Consult → Imaging/Quote → Financing Discussion → Scheduled → Completed

**Core Workflows:**
- Missed Call Text-Back (all inbound numbers)
- New Lead → SMS in 60s + Email in 5min + Call task for front desk
- Appointment Reminders (48hr + 2hr before)
- No-Show Recovery (immediate SMS + 24hr follow-up)
- Post-Appointment Review Request (GBP + Yelp split)
- Dormant Patient Reactivation (6-month + 12-month)

**Funnels:**
- Dental Implants landing page (hero → social proof → offer → book)
- Emergency Dental (mobile-first, click-to-call above fold)
- New Patient Special landing page
- Thank You + confirmation page

**Calendars:**
- Consultation (30 min, double-booking off, 24hr min notice)
- Emergency (same-day availability window)
- Treatment (variable duration by service type)

### Hardscaping / Contractor Snapshot

**Pipelines:**
- Lead → Qualified → Estimate Scheduled → Estimate Sent → Negotiation → Closed Won → Project Scheduled → Completed → Review Requested

**Core Workflows:**
- Lead Speed-to-Lead (SMS + Email in 60s)
- Estimate Follow-Up Sequence (Day 1, 3, 7, 14 if no response)
- Project Milestone Updates (start, mid, completion)
- Review Request after project completion
- Referral Request 30 days post-completion
- Seasonal Re-engagement (spring, fall)

**Custom Fields:**
- Property type, project type, square footage, budget range, timeline, financing interest
- Photo uploads (from form or SMS reply)

**Funnels:**
- Service-specific landing pages (paver patio, retaining walls, outdoor kitchens)
- Financing info page
- Portfolio gallery

### Real Estate Agent Snapshot

**Pipelines:**
- Buyer Pipeline: Lead → Discovery → Pre-Approval → Active Showing → Offer → Under Contract → Closed
- Seller Pipeline: Lead → Listing Appt Booked → Listing Signed → Active → Under Contract → Closed
- Investor Pipeline (optional)

**Core Workflows:**
- Long-term nurture (property alerts, market updates - monthly)
- Open House follow-up
- Past Client 12-month anniversary check-in
- Birthday + home-iversary campaigns
- Review request post-close

### Medspa / Aesthetics Snapshot

**Pipelines:**
- Consult → Booked → Completed → Treatment Plan → Purchased → Returning Client

**Core Workflows:**
- Consult booking → reminder → confirmation sequence
- Post-treatment care SMS (24hr, 72hr, 1 week)
- Re-booking reminders based on treatment type (Botox ~90 days, filler ~6 months)
- VIP/loyalty tier automations

## Snapshot Design Principles

### What Belongs in a Snapshot vs. Custom Per Client
**In snapshot:** Frameworks, structure, templates, placeholder copy
**Custom per client:** Brand voice in copy, specific offers, phone numbers, logos, calendar availability, pricing

### Custom Values - Always Use These
Never hardcode these in workflows or templates:
- `{{business.name}}`
- `{{business.phone}}`
- `{{business.email}}`
- `{{business.address}}`
- `{{custom_value.booking_link}}`
- `{{custom_value.review_link_google}}`
- `{{custom_value.owner_first_name}}`

### Naming Conventions
Prefix everything so it's obvious in a cluttered sub-account:
- Workflows: `[Vertical] - [Function]` e.g., `DENTAL - New Lead Nurture`
- Funnels: `[Vertical] - [Funnel Purpose]`
- Pipelines: `[Vertical] - [Pipeline Name]`

## Snapshot Delivery Workflow

1. Build in a master sub-account you control
2. Test every workflow end-to-end with a dummy contact
3. Document every custom value that needs client-specific input
4. Create an onboarding checklist: "Fill in these 15 custom values"
5. Take snapshot from agency settings → Snapshots
6. Load into new sub-account and run through checklist

## Common Snapshot Mistakes
- Hardcoded phone numbers, emails, or business names in templates
- Workflows that send at 2am because timezone wasn't set at sub-account level
- Triggers that reference deleted pipelines/stages
- Email templates without the footer unsubscribe/address (CAN-SPAM violation)
- Missing opt-out keywords in SMS workflows (STOP handling)
- Calendars without confirmation/reminder email templates attached

## SaaS Mode Considerations
If selling the snapshot as part of a SaaS offering:
- Build in usage tiers (basic workflows vs. advanced)
- Include a "first login" onboarding funnel for the client
- Lock critical workflows so clients can't break them
- Include admin-only notifications if key events fail
- Pre-configure integrations requiring setup (Stripe, Twilio, Mailgun)

## Snapshot Testing Checklist
Before shipping a snapshot, verify:
- [ ] Every workflow fires end-to-end with test contact
- [ ] SMS sends correctly (Twilio/LC Phone connected)
- [ ] Email sends from business address, not "via ghlmail"
- [ ] Calendar confirmations + reminders trigger
- [ ] Pipeline stages match workflow triggers
- [ ] Custom fields populate from forms
- [ ] Review request workflow sends Google link correctly
- [ ] No broken links in emails/SMS
- [ ] Unsubscribe + STOP keywords work
- [ ] All funnels render on mobile properly
