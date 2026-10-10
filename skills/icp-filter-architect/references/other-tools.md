# Other Tools - Filter Reference

Reach for these when the ICP's crux doesn't fit Sales Nav / Apollo / Clay.

## ZoomInfo - enterprise firmographics, org charts, intent
Best when accuracy at enterprise scale matters and budget allows. Strong filters:
- Firmographics: industry (SIC/NAICS), employees, revenue, location, company hierarchy (parent/subsidiary).
- **Org charts** - map the full buying committee, not just one contact.
- **Intent (Streaming/WebSights)** - companies surging on a topic; the strongest "why-now" layer.
- Technographics, scoops (trigger events: leadership changes, funding, expansion).
Gotchas: expensive; overkill for SMB/local; contact data still needs verification. Use for enterprise ABM, skip for scrappy SMB outbound.

## Wiza / Evaboot - Sales Nav → verified emails
Not targeting tools - **extraction** tools. Build the search in Sales Nav, then:
- **Wiza** - pulls a Sales Nav search/list into a CSV with verified emails + phones.
- **Evaboot** - extracts *and* double-checks each lead against your Sales Nav filters, adding a "no-match reasons" column (catches LinkedIn's guessed-field drift). Use when filter precision matters.
Gotcha: you still owe the targeting upstream in Sales Nav; these only extract/verify.

## BuiltWith / Wappalyzer - technographic
For "companies running [tech/competitor]." BuiltWith lets you build lists by technology (e.g., all sites on a given booking platform, CMS, or analytics tool). Use for displacement plays and integration-partner targeting when Apollo's technographics aren't enough.

## Crunchbase - funding & growth
For "well-funded / recently raised." Filter by funding round, amount, date, investor, and growth stage. Best "why-now = money just landed" signal for high-ticket offers. Pair the funded-company list with a persona search in Sales Nav/Apollo.

## Google Maps - true local SMB (the Sales Nav blind spot)
For shops, clinics, gyms, restaurants, trades, salons - owners who often aren't cleanly on LinkedIn. **Sales Nav is thin here; Maps is the source of truth.**
- "Filter" = category keyword ("dentist," "roofer," "med spa") + location + radius.
- Qualify by: has/lacks a website, review count & rating (activity proxy), claimed vs. unclaimed listing, photos.
- Enrich contact via the site or a scraper; outreach is usually email/phone/DM, not LinkedIn.
When a user's "ICP" is local businesses, redirect from Sales Nav to Maps explicitly - forcing local SMBs into Sales Nav is a common, costly mistake.

## LinkedIn free / basic search - budget-constrained
No Sales Nav seat? Basic search has ~18 filters vs. Sales Nav's 50+ (no spotlight signals, no headcount growth, weaker Boolean). Workable for tiny, manual, tightly-defined lists; graduate to Sales Nav the moment volume or signal-based targeting matters.

## Quick chooser
- Enterprise ABM + committee mapping → **ZoomInfo**
- Sales Nav list → emails → **Wiza** (or **Evaboot** for filter QA)
- "Runs [tech]" → **BuiltWith**
- "Just raised" → **Crunchbase**
- Local owners → **Google Maps**
- No budget, tiny list → **LinkedIn basic**
