---
name: clay-enrichment-architect
description: Designs Clay tables that turn a raw prospect list into personalized outreach at volume, column architecture, waterfall enrichment, AI/Claygent columns, scraping a prospect's site for signals, conditional run rules, credit control, and the export into HeyReach/Instantly/Smartlead. Use whenever an outreach plan depends on a per-lead fact that no prospecting filter returns (a client name, tech stack, portfolio detail, recent post, pricing page, job posting), or when the user says "Clay table", "enrich this list", "Claygent", "waterfall enrichment", "scrape their site", "personalize at scale", "find their clients", "my personalization doesn't scale", "how do I get [attribute] for 500 leads". Also use to audit an existing Clay table that is burning credits or returning junk. For choosing WHO to target and the search filters, use icp-filter-architect. For the sequence and message copy, use linkedin-outreach-architect or cold-email-outreach.
metadata:
  version: 1.0.0
---

# Clay Enrichment Architect

Clay is not a data source. It is an orchestration layer that takes a seed list
and adds columns other tools cannot filter on. Its whole value is closing the
gap between **the ICP attribute you want** and **the attribute a prospecting
tool can return**.

## The rule this skill exists to enforce

**Never write outreach copy containing a merge variable until the column that
populates it exists and has been tested on 20 real rows.**

The most common failure in outbound is a sequence built around a personalized
finding with no pipeline behind it. The copy reads beautifully and cannot be
sent. If a message template contains `{{clientName}}`, `{{techStack}}`,
`{{recentPost}}` or similar, the enrichment table is a **prerequisite**, not a
later optimization. Say so before writing the copy.

Corollary: every enrichment column needs a **fallback path** for rows where it
comes back empty. Coverage is never 100%. Design for the miss rate up front
(see [COVERAGE.md](COVERAGE.md)).

## Workflow

**1. Name the target variable.** What single fact does the opener need? One
per campaign. "Their biggest client's name and main ranking keyword" is one
variable set. "Client name, tech stack, funding, and recent post" is four
campaigns pretending to be one.

**2. Trace the source.** Where does that fact physically live? A portfolio
page, a case-study URL, an og:description, a job post, a pricing page, their
LinkedIn featured section. If it lives nowhere public, the variable is dead , 
change the opener instead of building a table. See
[SOURCES.md](SOURCES.md) for where common attributes actually live.

**3. Design the column chain.** Cheap and deterministic first, expensive and
probabilistic last. Every column after the first should be gated on the
previous one succeeding. See [COLUMNS.md](COLUMNS.md) for the standard chains.

**4. Set run conditions on every paid column.** This is the single biggest
credit lever. A column with no run condition fires on every row including the
900 that will never qualify.

**5. Test on 20 rows before running 2,000.** Read the actual output, not the
success rate. A Claygent column that returns a plausible wrong client name is
worse than one that returns nothing, because the wrong name ships to the
prospect.

**6. Score and filter.** Add a qualification column that decides Tier A
(full personalization) vs Tier B (category-level fallback) vs drop. Export
tiers as separate lists into separate sequences.

**7. Export.** Map fields deliberately. See [EXPORT.md](EXPORT.md).

## Column chain: the default shape

```
Seed rows            (Sales Nav / Apollo import, name, title, company, LI URL)
  → Find company domain          [cheap, deterministic]
  → HTTP request: homepage       [free-ish, gate: domain exists]
  → Find portfolio/clients URL   [AI, gate: homepage fetched]
  → Scrape that page             [gate: URL found]
  → Claygent: extract the fact   [expensive, gate: page scraped]
  → Validate / normalize         [formula, catches hallucination]
  → Tier score                   [formula: A / B / drop]
  → Write opener line            [AI, gate: tier = A]
```

Two properties matter more than the specific tools: **each step is gated on
the last succeeding**, and **the expensive AI step runs on the smallest
possible subset**.

## Claygent prompting

Claygent is an LLM with a browser. It fails the same ways any LLM fails, so
prompt it accordingly:

- Ask for **one fact**, not a paragraph.
- Demand a **strict output format** and a literal `NOT_FOUND` when absent.
- Forbid inference explicitly: "Only return a name that appears verbatim on
  the page. Do not guess from the industry."
- Give a **negative example** of what a wrong answer looks like.
- Return the **source URL** alongside the fact so it can be spot-checked.

An LLM asked to find a client name will invent a plausible one rather than
return nothing. The `NOT_FOUND` instruction and the source-URL column are what
stop a hallucinated client name reaching a prospect's inbox. Full prompt
patterns in [CLAYGENT.md](CLAYGENT.md).

## Credit control

Costs run away through unconditioned columns and re-runs on edited tables.

- Gate every paid column with a run condition.
- Put the cheapest disqualifier as early as possible so bad rows exit before
  the expensive columns.
- Use waterfalls for contact data (provider 1 → only if empty, provider 2),
  never parallel providers on every row.
- Turn **off** auto-update while building. Auto-update plus a column edit
  re-runs the whole table.
- Budget check: `rows × paid columns × credits` before pressing run.

## Anti-patterns

- Writing the sequence copy before the enrichment table exists.
- No `NOT_FOUND` path in a Claygent prompt.
- No fallback opener for rows where enrichment came back empty.
- Running the AI column on 100% of rows instead of the qualified subset.
- Treating Clay as a data source rather than an orchestration layer.
- Trusting a first-run output without reading 20 rows by hand.
- One table serving several campaigns with different target variables.
- Personalizing a fact the prospect does not care about (correct but useless).

## References

- [SOURCES.md](SOURCES.md), where each common attribute actually lives, and
  realistic coverage rates
- [COLUMNS.md](COLUMNS.md), standard column chains for the common campaign
  shapes, with run conditions
- [CLAYGENT.md](CLAYGENT.md), prompt patterns, output contracts,
  anti-hallucination guards
- [COVERAGE.md](COVERAGE.md), tiering, fallback openers, what to do with the
  40% that enrich empty
- [EXPORT.md](EXPORT.md), field mapping into HeyReach, Instantly, Smartlead,
  and the webhook/HTTP alternative
