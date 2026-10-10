---
name: content-market-intelligence
description: Discover content market opportunities - not just keywords, but underserved demand. Researches what people are searching for, discussing on Reddit/Quora/YouTube/X, and complaining about; maps demand vs supply; detects content gaps; scores opportunities 0 - 100; and outputs a prioritized, monetization-aware content plan. Use whenever the user wants to find content opportunities, validate a niche, ask "what should I create content about," research trending topics, find content gaps, analyze demand vs supply for a topic, plan a content calendar around opportunities, evaluate a niche's monetization potential, or asks anything like "is there demand for X," "what's underserved in Y," "find me low-competition topics," or "what content should my agency/SaaS/affiliate site produce." Trigger even for casual phrasings like "what should I write about" or "find me a good niche."
---

# Content Market Intelligence

Find market opportunities, not keywords. The output of this skill is a decision: *what content to create, in what format, for whom, and why it will win.* Everything else - trends, keywords, competitor notes - exists to support that decision.

## Step 0: Calibrate scope and depth (before any research)

Read the user's prompt and classify the request. Do NOT default to a full report for every query - match the effort to the ask.

| Signal in the prompt | Mode | Research effort | Output |
|---|---|---|---|
| Narrow question ("is there demand for X?", "what questions do people ask about Y?") | **Focused module** | 3 - 6 searches | Direct conversational answer covering just the relevant module(s) |
| Topic/niche given, wants opportunities ("find content opportunities in home coffee roasting") | **Standard report** | 8 - 14 searches | Condensed report (the core sections that matter for this niche) |
| Explicit ask for full analysis, business validation, or client deliverable ("full market intelligence report", "content strategy for my agency's client") | **Full report** | 15 - 25 searches | Complete 15-section report as a file (see references/report-template.md) |

Two more calibration dials:

- **Niche complexity.** A single-product niche ("standing desks") needs fewer searches than a broad market ("AI for small business"). For broad markets, spend early searches segmenting into 3 - 5 sub-niches, then go deep on the most promising 1 - 2 rather than shallow on all.
- **User context.** If the user's business model is known (affiliate, SaaS, agency, newsletter), weight monetization analysis and content-format recommendations toward it. If unknown and the request is Standard/Full, ask ONE question about their model before starting - it changes the opportunity scoring materially. For Focused mode, just answer.

State your chosen mode in one line at the start (e.g., "Running a standard opportunity scan on this niche - I'll do ~10 searches across search, Reddit, and YouTube") so the user can redirect before you burn effort.

## Step 1: Research (the evidence layer)

All scores and claims must trace back to something you actually observed. Web search is the instrument; use it to sample these signal sources, prioritized by what the niche needs:

**Demand signals** (what people want):
- `site:reddit.com <topic>` and `<topic> reddit` - real user questions, complaints, language. Reddit is the single highest-signal source for pain points; almost always include it.
- `<topic>` + "vs", "best", "how to", "worth it", "alternatives" - surfaces the question landscape and intent mix.
- Google Trends via search ("<topic> google trends 2026") and recency-filtered news searches - direction and momentum.
- YouTube: search `<topic> youtube` - video titles + view patterns reveal demand that blog SERPs hide.
- Quora, Hacker News, Product Hunt, X - when the niche skews technical, startup, or B2B.

**Supply signals** (what already exists):
- Plain SERP sampling: search the head terms and 3 - 5 long-tails; note who ranks (big brands vs niche sites vs forums vs AI-slop), how fresh the content is, and what formats dominate.
- A SERP full of Reddit threads and 2019-dated posts = weak supply. A SERP of fresh, deep content from strong domains = saturated.

**Research discipline:**
- Run searches in batches of 2 - 4 per angle; stop an angle early when results converge (three searches saying the same thing = signal confirmed, move on).
- Capture verbatim user language (actual Reddit phrasing, actual question wording) - it feeds pain points, content ideas, and keyword intelligence simultaneously.
- Track publication dates. Momentum claims ("growing +200%") require dated evidence or must be softened to qualitative language.

## Step 2: Honesty about data limits (non-negotiable)

You do not have API access to Ahrefs, SEMrush, Google Keyword Planner, or Google Trends. Therefore:

- **Never invent precise metrics.** No "12,400 monthly searches," no "CPC $4.20," no "+210% growth" unless a source you found actually states it (then cite it).
- **Use calibrated tiers instead**: demand = Very High / High / Moderate / Low / Niche; competition = Saturated / Strong / Moderate / Weak / Open. Define tiers by observable evidence ("dozens of active Reddit threads in the past month, multiple 100k+ view YouTube videos" = High demand).
- **Label every estimate as an estimate** and say what it's based on. A report that admits "directional estimate from SERP + Reddit sampling" is more valuable - and more trustworthy to a client - than fabricated precision.
- Recommend the user verify top opportunities in a real keyword tool before major investment, and say which numbers to check.

This matters because the user may put real money behind these recommendations. Fabricated numbers that look authoritative are the worst possible failure mode of this skill.

## Step 3: Analyze

Work through the analytical modules the mode requires. Full definitions, worked examples, and the scoring rubric live in **references/scoring-methodology.md** - read it before scoring anything in Standard or Full mode.

The modules, in dependency order:

1. **Trend & momentum** - what's rising, what's fading, seasonal vs evergreen, estimated lifespan.
2. **Search intent map** - for each key topic: informational / commercial / transactional / comparison / problem-solving mix, plus the top real questions people ask (verbatim where possible).
3. **Demand vs supply grid** - the core. Place topics on a 2×2 (demand tier × supply tier). High-demand/low-supply cells are the opportunity zone; call them out explicitly.
4. **Content gap detection** - questions answered nowhere well, missing comparisons/tutorials/calculators/templates/case studies. Test gaps by actually searching for them: a gap is only real if you searched and found nothing good.
5. **Audience pain points** - extracted from Reddit/Quora/comments, ranked by how often they repeat, in the audience's own words.
6. **Keyword intelligence** - primary / secondary / long-tail / question / comparison / purchase-intent / emerging / low-competition clusters. Group semantically; each cluster maps to one content asset.
7. **Competitor snapshot** - who dominates, their weaknesses (thin content, stale dates, poor UX, no tools/calculators), and the specific angle to outflank them.
8. **Opportunity scoring** - 0 - 100 per opportunity using the rubric in scoring-methodology.md. Always show the component scores and one-line reasoning, never a bare number.
9. **Monetization mapping** - rank paths (affiliate, ads, lead gen, digital product, SaaS, newsletter, community, consulting) per opportunity, matched to the user's model.
10. **Format & platform fit** - best format (blog / video / tool / calculator / quiz / template / landing page) and platform-level virality read (Google vs YouTube vs TikTok vs LinkedIn vs Reddit vs Pinterest), each with reasoning.
11. **AI saturation read** - how much AI-generated content floods this SERP, and whether differentiated content (original data, tools, real experience, strong POV) can still win.
12. **Demand forecast** - 3/6/12-month directional outlook (growing / stable / declining, with reasoning) - qualitative unless dated evidence supports more.

Focused mode: run only the modules the question needs. Standard mode: modules 1 - 8 always, 9 - 12 as relevant. Full mode: all twelve.

## Step 4: Output

**Focused mode** - answer conversationally in chat. No report scaffolding, no headers-for-headers'-sake. Include evidence and the honest-tiers language.

**Standard mode** - deliver in chat as flowing analysis: opportunity zone first (lead with the answer), then supporting evidence, then a prioritized action list. Use at most one or two small tables (the demand/supply grid and the scored opportunity list earn tables; nothing else does). End with: top opportunities ranked, quick wins vs long-term plays, and "create this first" with reasoning.

**Full mode** - produce a Markdown report file following **references/report-template.md** exactly (15 sections, ends with the Immediate Action Plan). Save to outputs and present the file. In chat, give only a short summary: the top 3 opportunities and the single recommended first move.

**Content calendar** (Standard on request, Full always): 30/60/90-day roadmap sequenced by opportunity score, trend timing, seasonality, and funnel stage - quick-win assets first to build momentum, pillar assets and tools in the 60 - 90 window.

Every content idea, at any depth, carries a one-line "why it will perform": the demand evidence + the supply weakness it exploits. An idea without a why is filler - cut it.

## Quality bar

Before delivering, check:
- Does the top recommendation trace to specific observed evidence (a named Reddit thread pattern, a weak SERP you actually looked at)?
- Would the user know exactly what to create Monday morning?
- Are all numbers either sourced or clearly labeled as tiered estimates?
- Did you find at least one genuinely non-obvious opportunity (something the user wouldn't get from a basic keyword tool)? If everything you found is obvious, dig one level deeper - sub-niches, adjacent audiences, missing formats - before delivering.
