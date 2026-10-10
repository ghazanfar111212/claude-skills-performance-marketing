# Apollo.io - Filter Reference

Apollo combines a **company + contact database with verified emails, technographics, and buying intent** in one place, with fast CSV/API export. Use it when the ICP needs email (for a cold-email arm or multichannel), technographic targeting, or intent data, and when you want firmographic + contact filtering without stitching two tools. Weaknesses: US-biased data, meaningful data decay (verify emails before sending), and title/seniority tagging that - like LinkedIn - is inferred and imperfect.

## People (contact) filters - build the persona here

- **Job titles** - enter a **cluster** (Apollo matches variants). Combine with the seniority filter rather than trying to list every title.
- **Seniority** - Owner, Founder, C-Suite, VP, Director, Manager, Senior, Entry, Intern. Coarse but useful.
- **Departments / job function** - Sales, Marketing, Engineering, Finance, HR, Operations, etc. Cleaner than LinkedIn's guessed Function, but still verify.
- **Keywords** - matches title and profile text. Use to catch niche roles the title filter misses.
- **Contact location** - person's geography (country/state/city).
- **Email status** - **Verified / Unverified / Update-in-progress.** Filter to **Verified** before export for deliverability.
- **Signals** - job changes, recently hired, and other person-level triggers.

## Company (account) filters - build the account ICP here

- **Industry & keywords** - Apollo's industry list plus free-text industry keywords; the keyword layer is essential because the taxonomy is coarse.
- **Employees (headcount)** - precise bands; tighter than Sales Nav.
- **Revenue** - revenue bands (budget proxy).
- **Location** - company HQ country/state/city.
- **Technologies** - technographic filter: target companies running a specific tool/competitor. A core Apollo strength.
- **Funding** - total raised, latest round, latest funding date (growth/budget proxy).
- **Founded year** - company age.
- **Company keywords / SIC/NAICS** - reinforce noisy industry filters.

## Intent (paid tiers)

- **Buying intent topics** - companies actively researching a topic. The strongest "why-now" layer Apollo offers; pair with your persona filters for in-market lists.

## Gotchas

- **Verify before send.** Apollo email accuracy varies; always filter Email status = Verified and, for volume, re-verify through a dedicated verifier. Sending to unverified emails wrecks deliverability.
- **US bias.** Non-US coverage (esp. contact emails) is thinner - for EU/APAC lists, cross-check or prefer Sales Nav + Wiza.
- **Inferred seniority/department** - QA a sample; back title targeting with keywords.
- **Net-new vs. saved** - filter out contacts you've already sequenced to avoid double-touch (mirror this in your outreach tool's exclusions).

## Worked mapping

ICP: *RevOps leaders at US mid-market SaaS, currently on a competitor's stack.*
- Company: Industry keyword = **"software" / "SaaS"**; Employees = **51 - 200 + 201 - 500**; Location = **United States**; Technologies = **[competitor tool]**; optional Funding = **Series A+** (budget).
- People: Seniority = **VP, Director, Head**; Titles = **("RevOps" OR "Revenue Operations" OR "Sales Operations" OR "GTM Operations")**; Email status = **Verified**.
- Intent: Buying-intent topic = **"revenue operations" / "sales automation"** if on a plan that includes it.
- Export → verify → feed to the email tool; mirror the same persona into Sales Nav for a LinkedIn touch (multichannel).
