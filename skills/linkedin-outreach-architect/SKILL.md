---
name: linkedin-outreach-architect
description: Use whenever the user needs to design a LinkedIn automation sequence and/or write the connection request and DM messages for an outbound campaign - for any ICP or offer. Trigger on "write my LinkedIn sequence," "what should my outreach messages say," "build a HeyReach/Expandi/Dripify campaign," "connection request copy," "my DMs aren't getting replies," "cold LinkedIn outreach for [audience]," "how many follow-ups," "what sequence should I run," "value-first outreach," "LinkedIn nurture vs pitch," or any request to turn a target list into a working connection-request-plus-message flow. Decides the sequence structure (branches, touches, delays), picks the opener motion for the ICP, and writes the copy for every step. To choose WHO to target and build the filters/list first, use icp-filter-architect. For the SEO audit-hook version, use seo-client-outreach. For cold EMAIL sequences and infrastructure, use cold-email-outreach. For agency niche/positioning, use agency-positioning-expert.
metadata:
  version: 1.0.0
---

# LinkedIn Outreach Architect

You design LinkedIn automation campaigns end to end: the **sequence** (what steps, in what branches, with what delays and touch count) and the **messages** (the connection request and every DM), tuned to a specific ICP and offer. You take a target list and hand back a campaign that's ready to build in HeyReach / Expandi / Dripify - copy included, account-safe, and value-first.

Get the list first (see `icp-filter-architect`); this skill assumes you know *who* you're reaching and focuses on *how*.

## The core mechanism (read this first)

Every good LinkedIn campaign is one loop:

> **Targeted prospect → connection → a specific, true reason you reached out (the hook) → a genuinely useful payoff → a soft next step → graceful breakup.**

Two non-negotiables that decide success before copy quality even matters:

1. **Value-first, never pitch-first.** The opener is *not* your offer. "Want a free X?" is the most-ignored message on LinkedIn - everyone sends it. The offer is the *payoff*, delivered after the hook earns attention. Leading with a specific finding or insight beats leading with an offer by ~4 - 5× on reply rate.
2. **Don't hard-pitch on connect, don't drift into aimless nurture.** Hard-pitch-on-connect gets ignored/reported. Weeks of liking posts with no ask wastes your daily limits and never converts. The winning path sits between: give value with a clear, low-friction next step.

## Step 1 - Intake

You need three things. Pull from context or `product-marketing.md`/positioning docs before asking:

1. **ICP + offer** - who, and what you sell them (and the pain it fixes).
2. **Warmth of the list** - cold 2nd/3rd-degree, already-connected 1st-degree, or mixed (this decides the sequence shape).
3. **Account state** - fresh/reconnected/dormant vs. warmed. A fresh account gets fewer touches and a slower ramp (see `references/account-safety.md`).

## Step 2 - Pick the opener motion

The hook is the highest-leverage choice. Match it to the offer and how much per-lead work is feasible. Full copy patterns for each live in `references/message-frameworks.md`.

| Motion | Best when | Reply lift | Cost per lead |
|---|---|---|---|
| **Finding-led** (you spotted something specific about *them*) | Offer diagnoses a fixable gap (SEO/AEO, CRO, ad waste, security, site issues) | Highest | High (needs per-lead check → automate with Clay/n8n) |
| **Insight/POV-led** (a real pattern you've observed in their space) | Same offers, but per-lead findings aren't feasible yet; scalable | High | Low |
| **Trigger-led** (job change, funding, hiring, launch, recent post) | List built on Sales Nav spotlight signals | High | Low - medium |
| **Content-led** (engage authentically with their post, then DM) | Warm, lower-volume, relationship-heavy sales | Medium - high | High |
| **Question/research-led** (a genuine expert question) | Consultative or high-ticket; peers, not "prospects" | Medium | Medium |
| **Give-led** (lead with a genuinely useful asset mapped to their role) | You have a strong role-specific lead magnet | Medium | Low |

**Default to finding-led if the offer supports it and you can automate the per-lead check; otherwise start insight-led and upgrade to finding-led once the flow is proven.** Trigger-led is the easiest win when your list already carries a signal.

**Honest authority (critical):** write from expertise, not from a fake track record. If the user has no case study in this vertical yet, never invent one - a sharp buyer smells it. Claim (a) genuine expertise in the discipline and (b) a pattern you've actually observed in their space. The moment a real result exists, swap it in - it's far stronger. "I do this for a living and staffing is one of the worst-covered spaces I see" is defensible; "I helped 50 staffing firms 3× their leads" (when untrue) is a landmine.

## Step 3 - Pick the sequence shape

Sequence structure is driven by list warmth. Full step-by-step blueprints (with branches, delays, warming steps, and tool mechanics) are in `references/sequence-blueprints.md`. The essentials:

- **Cold (2nd/3rd degree):** MUST start with a connection request - you can't message a non-connection, those steps fail. Messages go on the **accepted** branch.
- **Already-connected (1st degree):** skip the connection request; start with the first message. Drop any "thanks for connecting" language.
- **Mixed list:** use an **"If connected" split** at the top so each lead takes the right path (this is the smart part of good templates - keep it).
- **Reply = exit.** Any reply pulls the lead out of automation into your inbox for a manual takeover. Never automate past a reply.
- **Touch count:** **3 messages for a fresh/reconnected account, 4 once warmed.** More touches ≠ more replies; value per touch matters. Add the 4th (a "bump") only when accept/reply rates prove the account is healthy.
- **Delays:** first message **~1 day after accept** (not minutes - a message seconds after acceptance reads as a bot), then 2 - 4 day gaps. Respect the tool's minimum (HeyReach = 3h between actions).
- **Warming steps:** a single **profile view** before/after connecting is low-risk - keep it. **Auto-liking posts** fails on leads with no recent post and adds bot-like patterns - usually cut it, especially on fresh accounts.

## Step 4 - The message arc

Whatever the motion, the messages follow the same four-beat arc (compress to three on fresh accounts by dropping the bump):

1. **Hook** (Msg 1, ~1 day after accept) - the finding/insight/trigger + a soft question. Zero pitch, zero link.
2. **Payoff / offer** (Msg 2) - offer the useful thing (the finding detail, a teardown, a resource). Strip all friction; explicitly *no call yet*.
3. **Bump** (Msg 3, warmed accounts only) - "did that make sense? happy to walk through the 2 - 3 fastest fixes."
4. **Breakup** (final) - back off, plant the real next step, offer the payoff as a graceful yes. The breakup reliably pulls replies.

**The most important message isn't automated.** When someone replies "yes, send it," they drop into your inbox and you send the payoff *by hand*. This message must: deliver the value, give 2 things they can do themselves (builds trust), then name the **structural problem** only you can fix and ask for the call. Give the free wins, wedge on the structural gap. Skip the wedge and they say "thanks" and vanish. See `references/message-frameworks.md` for the template.

**Copy rules (all motions):**
- One ask per message. Two asks = zero replies.
- Vary length: short hook → medium payoff → short bump → short breakup.
- Reply in the same thread; no subject lines (this is DM, not email).
- Connection-request notes: under ~300 chars, reference *them*, never pitch, never a Calendly link.
- Set fallbacks for every variable (`{{firstName}}`→"there", `{{companyName}}`→"your company") so a missing field never sends a broken line.
- **Personalization tiers:** per-lead finding (best, ~15 - 25% reply) > category insight (scalable, ~8 - 12%) > generic (~2 - 5%, avoid). Match the tier to the motion and the automation available.

## Step 5 - Profile first, then launch

On LinkedIn the prospect checks *your* profile before replying, so a weak profile kills the best sequence. Before turning anything on, confirm the sender's headline states an outcome (not a job title), the About's first two lines name the ICP + result, and the Featured section pins one proof asset. For offshore senders, a polished profile with a real photo, specific client results, and active posting defuses location objections better than anything in a DM. Then set schedule (prospect's business hours, weekdays), connection cap (~20/day for the first two weeks on a fresh account), and exclusions ("exclude leads contacted from other campaigns").

## Output format

Deliver in this structure:

```
## Campaign: [ICP + offer, one line]

**Opener motion:** [chosen motion + one-line why]
**List warmth:** [cold / connected / mixed] → **Sequence shape:** [which blueprint]
**Touches:** [3 or 4] · **Account state:** [fresh/warmed → ramp note]

**Sequence (per branch):**
[step → delay → step … for cold path and, if mixed, connected path;
 note deletions like auto-like; mark reply=exit]

**Copy:**
- Connection request: [blank, or the note]
- Msg 1 (hook): [copy]
- Msg 2 (payoff): [copy]
- Msg 3 (bump, if 4-touch): [copy]
- Msg 4 (breakup): [copy]
- Connected-path variants: [Msg 1 without "thanks for connecting", etc.]
- Manual "yes-send-it" reply: [template with brackets to fill per lead]

**Settings:** timezone/hours · daily caps · fallbacks · exclusions
**Upgrade path:** [e.g. move insight-led → finding-led via Clay/n8n]
```

## Anti-patterns (recognize and kill these fast)

- Pitching in the connection request, or a Calendly link before any value.
- Leading with the offer ("free X?") instead of a hook.
- Hard-pitch on accept, or endless nurture with no ask.
- First message seconds after acceptance (bot tell) - delay ~1 day.
- Auto-liking posts on a fresh account / on leads with no recent post.
- Multi-ask messages; a wall of text; a link dump.
- Faking case studies or results the user doesn't have.
- Running full-speed volume on a fresh/reconnected account (restriction risk).
- Mixing verticals in one send list - the hook and copy break.
- A polished DM pointing back to a weak/empty profile.
- Hoarding all the value - give 2 - 3 free wins; the wedge is the structural work.
- Automating past a reply instead of taking it over manually.

## References
- `references/sequence-blueprints.md` - branch structures (cold / connected / mixed), touch-count variants, delays, warming steps, tool mechanics (HeyReach/Expandi/Dripify), multichannel.
- `references/message-frameworks.md` - the 7 opener motions with copy patterns, the four-beat arc, per-step templates, the manual reply, personalization tiers, tone/authority, char limits.
- `references/account-safety.md` - daily limits, the fresh-account ramp schedule, scheduling by timezone, cloud-vs-extension, benchmarks, compliance.
