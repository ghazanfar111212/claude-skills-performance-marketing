# Clay - Enrichment & Orchestration Reference

**Clay is not a data source - it's an orchestration and enrichment layer.** Do not treat it like Sales Nav or Apollo. You **seed** Clay with a list (from Sales Nav, Apollo, a CSV, HubSpot, or Clay's own "Find People/Companies" integrations) and then **enrich, filter with logic, and score** it using dozens of chained providers. Use Clay when the ICP depends on attributes **no single tool filters on** - the parts your Attribute→Proxy map marked "no direct filter."

## When to reach for Clay

- The ICP needs an attribute that isn't a filter anywhere (e.g., "companies whose website mentions X," "founders who posted about Y in the last month," "agencies with fewer than 3 case studies," "sites missing a booking widget").
- You want a **waterfall**: try provider A for the email, fall back to B, then C - maximizing coverage and minimizing cost.
- You need **conditional logic**: only run the expensive enrichment if a cheap upstream condition is met.
- You want to **score/qualify** each row against the ICP checklist automatically before it hits the outreach tool.
- You need to **scrape a signal** (job posts, tech on site, recent news, LinkedIn activity) and turn it into a column.

## How ICP maps into Clay

1. **Seed** - pull the raw account or contact list from the source that best isolates the firmographic base (usually Sales Nav via an integration, or Apollo). Clay is only as good as the seed's targeting - do the firmographic filtering upstream.
2. **Enrich** - add the columns the ICP needs: verified email (waterfall), headcount, tech stack, funding, LinkedIn activity, website signals, etc.
3. **Filter with formulas** - use Clay's conditional columns / formulas to keep only rows that pass the ICP gates (e.g., `headcount < 50 AND has_competitor_tool = true AND posted_recently = true`). This is where unfilterable attributes finally become filterable.
4. **Score** - build an ICP-fit score column so the outreach tool can prioritize.
5. **Push** - send qualified rows to HeyReach / Smartlead / Instantly / HubSpot via native integration or webhook.

## Signal columns worth building

- **Verified work email** (waterfall across providers) - the most common use.
- **Technographic** - what the site runs (competitor displacement).
- **Hiring / job-post signals** - "hiring for [role]" as a growth/pain proxy.
- **Website content checks** - presence/absence of a feature, keyword, or page (great for "who's missing X").
- **LinkedIn activity** - recent posts/topic mentions → the "cares about [topic]" proxy that no filter gives you.
- **AI-written personalization** - use a Claude/GPT column to draft the personalized finding per row (feeds the outreach opener).

## Gotchas

- **Costs are per-enrichment (credits).** Don't enrich the whole seed blindly - filter upstream and use conditional runs so you only pay for rows worth enriching.
- **Garbage seed in → garbage out.** Clay won't fix bad firmographic targeting; get the account base right in the source tool first.
- **It's a build, not a search.** Budget time to design the table; it's overkill for a simple "title + geo + industry" list that Sales Nav or Apollo handles directly.

## Worked mapping

ICP attribute that no tool filters on: *"Staffing agencies whose website has thin/no location pages"* (a real AEO gap → strong outreach hook).
- Seed: Sales Nav search of staffing owners → import to Clay.
- Enrich: scrape each company domain → column "has_location_pages" (Claude/GPT column reading the sitemap or homepage nav).
- Filter: keep rows where `has_location_pages = false`.
- Enrich: waterfall verified email + a Claude column drafting the personalized finding.
- Score + push qualified rows to the outreach tool.
This turns an unfilterable, high-signal attribute into a clean, personalized, ready-to-send list.
