---
name: looker-studio-expert
description: Expert skill for building client-ready marketing dashboards in Looker Studio (formerly Google Data Studio). Use whenever the user mentions Looker Studio, Data Studio, marketing dashboards, client reporting, blended data sources, GA4 reporting, multi-currency reporting, cross-platform marketing reports, or "build a dashboard for [client]." Also trigger for "connect [data source] to Looker Studio," "calculated fields in Data Studio," "Supermetrics alternative," or reporting template design. Do NOT use for Tableau, Power BI, or custom-coded dashboards. Covers data source connections, blending, calculated fields, filter design, multi-currency handling, dashboard UX patterns, and client-ready report templates.
---

# Looker Studio Expert

## When to Use This Skill
- Building a new client dashboard from scratch
- Blending data across ad platforms, analytics, and CRM
- Creating multi-currency reports (AUD, USD, GBP, PKR, AED)
- Designing reusable templates across clients
- Troubleshooting data discrepancies between platforms and dashboards
- Reducing manual reporting time with automation

## Data Source Fundamentals

### Native Connectors (Free, Built-in)
- Google Ads
- Google Analytics 4
- Google Sheets
- BigQuery
- YouTube Analytics
- Search Console

### Partner Connectors (Usually Paid)
- **Supermetrics**: Widest connector coverage, monthly per destination
- **Windsor.ai**: Good pricing, destination-first model
- **Funnel.io**: Enterprise-grade, strong for ecommerce
- **Dataslayer**: Budget alternative
- **Catchr**: Newer, growing connector library

### Most-Used Non-Native Connectors for Agencies
- Meta Ads (Facebook/Instagram)
- TikTok Ads
- LinkedIn Ads
- Shopify
- HubSpot / GHL (via Sheets usually)
- Bing Ads (Microsoft Advertising)

### The Sheets Fallback Pattern
When no connector exists (or you don't want to pay):
1. Use platform's native export or API
2. Push to Google Sheets via Zapier/n8n/Make
3. Connect Sheets → Looker Studio
4. Schedule refresh

This pattern is especially useful for: CRM data, offline conversions, custom KPIs, aggregated data.

## Blending Data

### When to Blend vs. Separate Sources
- **Blend**: When reporting on the same entity across sources (campaign → revenue)
- **Separate**: When each source answers a different question

### Blend Mechanics
- Specify join keys (date is most common)
- Choose join type: Left, Right, Inner, Full Outer, Cross
- Left join is safest default (primary source drives rows)

### Common Blend Recipes
- **Paid performance + revenue**: Google Ads + GA4 (by date + campaign)
- **Multi-platform spend + leads**: Meta Ads + Google Ads + CRM (by date + source)
- **Cost + conversions**: Ad platform + offline sales data (by date + UTM)

### Blend Gotchas
- Blended fields can't be used in some chart types
- Can't create calculated fields on blended sources directly (do in source first)
- Date dimension must match granularity across sources (daily vs weekly)

## Calculated Fields

### Syntax Essentials
```
CASE
  WHEN REGEXP_MATCH(Source, "^google") THEN "Google"
  WHEN REGEXP_MATCH(Source, "^facebook") THEN "Meta"
  ELSE "Other"
END
```

### Commonly Used Calculated Fields

**CPA (Cost Per Acquisition)**
```
Cost / Conversions
```

**ROAS (Return on Ad Spend)**
```
Revenue / Cost
```

**CTR (Click-Through Rate)**
```
Clicks / Impressions
```

**Conversion Rate**
```
Conversions / Clicks
```

**Multi-Currency Normalization to USD**
```
CASE
  WHEN Currency = "AUD" THEN Spend * 0.65
  WHEN Currency = "GBP" THEN Spend * 1.26
  WHEN Currency = "PKR" THEN Spend * 0.0036
  WHEN Currency = "AED" THEN Spend * 0.27
  ELSE Spend
END
```
(Rates are illustrative - pull live rates via Sheets formula and reference)

**Clean Campaign Names (Extract Prefix)**
```
REGEXP_EXTRACT(Campaign, "^([A-Z]+)-")
```

**Date Grouping (Week of Year)**
```
WEEK(Date)
```

**Conditional Formatting Field**
```
CASE
  WHEN ROAS >= 4 THEN "🟢 On Target"
  WHEN ROAS >= 2 THEN "🟡 Needs Attention"
  ELSE "🔴 Below Target"
END
```

## Multi-Currency Handling (Your Context)

### Strategy Options

**Option 1: Single Reporting Currency**
- Pick one currency (usually USD for global, AUD for AU-focused)
- Convert everything at data source level or in calculated fields
- Pros: Clean, comparable numbers
- Cons: FX fluctuations affect historical trends

**Option 2: Multi-Currency Toggle**
- User selects view currency via filter
- Calculated field responds to parameter
- Pros: Flexibility for stakeholders
- Cons: More complex to maintain

**Option 3: Separate Tabs per Currency**
- One tab per market currency
- Consolidated tab in single reporting currency
- Pros: Locals see their numbers, exec sees unified
- Cons: More pages to maintain

### FX Rate Management
- Store rates in a Google Sheet (updated weekly or monthly)
- Reference sheet as data source
- Join to main data by currency code
- Use VLOOKUP-style calculated fields

## Dashboard UX Patterns

### The 3-Page Agency Dashboard Structure

**Page 1: Executive Summary**
- Big number cards: Spend, Revenue, ROAS, Leads, CPA
- Trend charts: Spend vs Revenue over time
- Top-line observations (text callouts)
- Month-over-month % change on key metrics

**Page 2: Channel Performance**
- Breakdown by channel (Google, Meta, etc.)
- Cost + performance table
- Best/worst performing campaigns
- Channel trend comparison

**Page 3: Deep Dive / Insights**
- Campaign-level detail
- Ad-level performance
- Keyword/audience breakdown
- Geographic performance

### Visual Hierarchy Rules
- Biggest chart = most important insight
- Scorecards at top (glanceable KPIs)
- Left-to-right reading flow (Western audiences)
- Group related metrics visually
- Use color consistently (brand or semantic)

### Color Palette
- **Brand colors** for primary series (agency or client brand)
- **Semantic colors**: Green (good), Red (alert), Yellow (warning), Gray (neutral)
- **Sequential palettes** for heatmaps
- Avoid default rainbow colors - looks amateur

### Typography
- Headings: 18-24pt, bold, consistent font
- Body: 10-12pt
- Metrics/numbers: Larger than surrounding text
- Limit to 2 fonts max across entire report

## Date Range Patterns

### Default Date Range
- Last 30 days is the safe default for agency reporting
- Include comparison: "vs. previous period" or "vs. previous year"

### Custom Date Ranges for Specific Views
- MTD (Month to Date) for in-month pacing
- QTD (Quarter to Date) for executive reviews
- YTD (Year to Date) for annual planning
- Custom fiscal year for Australian clients (July-June)

### Date Range Control
- Always include a date range control at the top
- Enable "Apply to all pages" when it makes sense

## Filters & Controls

### Control Types
- **Date range**: Default for every dashboard
- **Drop-down**: For campaign, source, account selection
- **Input box**: For search-style filtering
- **Checkbox**: For multi-select categories
- **Slider**: For metric ranges (e.g., CPA thresholds)

### Filter Strategy
- Page-level filters (apply to one page)
- Report-level filters (apply to all pages) - use sparingly
- Chart-level filters (hidden from user) - for hardcoded scope

## Performance Optimization

### Why Dashboards Get Slow
- Too many data sources on one page
- Complex blends recalculating on every load
- Unfiltered scans of large datasets

### Speed Improvements
- Pre-aggregate in BigQuery or Sheets before connecting
- Cache data (use data freshness settings appropriately)
- Reduce date range defaults
- Limit number of charts per page to 8-12
- Use extract mode where available

## Client-Ready Template Checklist

Before sharing with a client:
- [ ] Client logo in header
- [ ] Clear title and reporting period
- [ ] No placeholder text or test data
- [ ] All filters working and defaulted sensibly
- [ ] Mobile view checked (many execs view on phone)
- [ ] Links to methodology/definitions if complex KPIs
- [ ] Refresh schedule documented
- [ ] Permissions set correctly (view-only for client)
- [ ] PDF export tested (for email reports)
- [ ] Date formats localized (DD/MM/YYYY for AU/UK, MM/DD/YYYY for US)
- [ ] Currency symbols and decimal places consistent

## Automation & Delivery

### Scheduled Emails
- Looker Studio supports scheduled PDF email delivery
- Weekly or monthly cadence typical
- Send to client + internal CC

### Alternative: Slack/Email Automations
- Use n8n or Make to pull key metrics → send summary
- Better for daily pulse checks (not full dashboard)

### Permissions Management
- View access: Clients (they don't need edit)
- Edit access: Internal team
- Owner: Account manager or team lead (not a single freelancer)

## Common Mistakes
- Using one massive page with 30 charts (overwhelming)
- Not handling currency conversions (mixing $5 AUD with $5 USD)
- Inconsistent date ranges across charts on same page
- Auto-colors that don't match client brand
- Showing raw platform numbers that don't match GA4 (without explanation)
- No labels on pie chart slices
- Using 3D charts or excessive animation
- Ignoring mobile preview
- Hardcoding campaign names that break when clients rename them
- Not explaining what each metric means (client won't ask, just mistrust)

## Troubleshooting Data Discrepancies

### Why Numbers Don't Match Across Sources
- **Attribution windows**: Meta 7-day-click vs GA4 last-click
- **Conversion definitions**: What counts as a conversion in each platform
- **Timezone differences**: Platform UTC vs. account local time
- **Currency**: Platform reports in local currency, dashboard in reporting currency
- **Sampling**: GA4 samples high-volume accounts
- **Bot filtering**: Different rules per platform
- **Tracking issues**: Missing tags, broken UTMs

### Reconciliation Approach
- Document expected variance ranges per metric
- Flag when variance exceeds threshold
- Have "source of truth" designated per KPI (e.g., Shopify for revenue, not platform pixels)
