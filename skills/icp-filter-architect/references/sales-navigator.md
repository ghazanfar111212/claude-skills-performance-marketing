# LinkedIn Sales Navigator - Filter Reference

Sales Navigator is the sharpest tool for **people-level targeting** and LinkedIn-native intent signals. It's the default when the buyer lives on LinkedIn and you're feeding a URL-based automation tool (HeyReach, Expandi, Dripify). Weaknesses: no verified emails (pair with Wiza/Evaboot), a hard **~2,500-result cap per search** (100 pages × 25), and several filters LinkedIn *guesses* rather than knows.

## The four filter families (know which lane you're in)

Sales Nav has 50+ filters in four groups. Picking the wrong lane is the #1 cause of noisy results.

1. **Lead filters (WHO)** - person level. ~34 filters. This is where you build the buyer persona. Start here if you're selling to people.
2. **Account filters (WHERE)** - company level. ~16 filters. Build the target-company list. Start here for account-based motion, then drill to leads within.
3. **Spotlight filters (WHEN)** - intent/timing signals. The highest-leverage filters for reply rate.
4. **Workflow filters** - saved lists, personas, CRM data (Advanced Plus). For managing an existing pipeline, not net-new discovery.

**Rule:** ICP → Account filters. Buyer persona → Lead filters. Timing → Spotlight.

## High-value Lead filters

- **Keywords** (shared Lead+Account) - searches the whole profile. The most-used filter. Combine with Boolean. Caution: matches anywhere, so "sales" matches "I hate sales." Use with title/function to constrain.
- **Job title** - target a **title cluster with Boolean OR**, never one exact title. Looks at experiences marked "Present" - and many people leave old jobs open, so expect some drift.
- **Seniority level** - LinkedIn *guesses* this from titles and creates one per open experience (a CEO can read as "intern"). Useful as a coarse cut (Owner, Partner, CXO, VP, Director) but back it with title Boolean.
- **Function** - department, also *guessed*. Unreliable; prefer title + keyword. Use only as a loose secondary cut.
- **Years in current position / Years at current company** - pairs with seniority to separate new VPs from 10-year VPs.
- **Geography** - location of the *person*. Supports region/country/city and a **radius around a city** (strong for regional targeting).
- **Industry** - the person's industry (distinct from the company's account industry); noisy - back with keyword.
- **Group membership / School** - proxy for "cares about [topic]" or shared context.

## High-value Account filters

- **Company headcount** - 1 - 10, 11 - 50, 51 - 200, 201 - 500, 501 - 1000, 1001 - 5000, 5001 - 10000, 10000+. Self-declared and often stale, and bands are wide - good for coarse size, not precision.
- **Company headcount growth** - proxy for "scaling." Strong signal.
- **Annual revenue** - where available; a budget proxy.
- **Industry** (account-level) - noisy; always reinforce with a company keyword.
- **Company type** - Public / Privately held / Non-profit / Government / etc. (page-owner declared).
- **HQ location** - continent / region / country / city.
- **Technologies used** - technographic; find companies on a competitor's stack (displacement play).

## Spotlight filters (the reply-rate multipliers)

- **Changed jobs in the last 90 days** - highest-signal filter in the tool. New decision-makers have mandate, budget, and no vendor loyalty. Use constantly.
- **Posted on LinkedIn in the last 30 days** - active users reply far more. If they haven't posted in two years they're probably not reading DMs either.
- **Engaged with your company / viewed your profile / mentioned in news** - warm signals when present.

## Boolean (works in Keywords and Job title fields)

- `AND` (both), `OR` (either), `NOT` (exclude), `( )` group, `" "` exact phrase.
- Example: `("VP Sales" OR "VP Revenue" OR "Head of Sales") AND ("SaaS" OR "software") NOT "recruiter"`.
- Title clusters via OR are the single biggest precision win. One exact title narrows the ICP too early.

## Recommended stacking order (tightest list)

Industry → job title cluster → seniority → geography → company size → headcount growth → changed jobs (90d) → posted in last 30d.

A base demographic search (title + geo) returns 10,000+. Two spotlight signals on top collapse it to a few hundred buyer-ready people - and keeps you under the 2,500 cap.

## Gotchas

- **2,500-result cap.** If a search exceeds it, LinkedIn truncates arbitrarily. Slice by geography, headcount band, or title into sub-searches, each imported as its own list.
- **Guessed fields** (Function, Seniority) are unreliable - reinforce with Boolean title + keyword.
- **Stale self-declared data** (headcount, company type) - treat as coarse.
- **Multiple open "Present" experiences** cause false title matches - QA the sample; tools like Evaboot flag "no-match reasons" on export.
- **Free vs. paid connection notes**: separate from Sales Nav - respect LinkedIn's own send limits when the list feeds automation.

## Worked mapping

ICP: *IT-staffing agency owners, US, 2 - 50 employees.*
- Account: Industry = **Staffing & Recruiting**; Headcount = **11 - 50** (+ 1 - 10 if including micro); HQ = **United States**; Keyword = **"IT staffing"**.
- Lead: Seniority = **Owner, Partner**; Job title Boolean = **("Founder" OR "Owner" OR "Managing Director" OR "President" OR "Principal")**.
- Spotlight: **Posted in last 30 days** (ensures they read DMs).
- Volume check: if >2,500, slice by US region (Northeast / South / Midwest / West) into four lists.
- QA: pull 10, confirm they're actually staffing *owners* (not recruiters at big firms) and the firm is genuinely IT-focused.
