---
name: google-tag-manager-expert
description: Expert-level Google Tag Manager (GTM) skill. Use whenever the user mentions Google Tag Manager, GTM, tags, triggers, variables, dataLayer, conversion tracking setup, event tracking, GA4 config, Facebook Pixel via GTM, custom HTML tags, container setup, GTM debugging, preview mode, consent mode, server-side tagging (sGTM), or implementing marketing/analytics tags. Also trigger for tracking clicks, form submissions, scroll depth, ecommerce tracking, cross-domain tracking, custom events, regex triggers, or reading GTM debug output. If the user says "set up tracking," "implement a pixel," or "fire a tag when" - use this skill. Covers container architecture, tag/trigger/variable config, dataLayer, debugging, consent, and server-side tagging.
---

# Google Tag Manager Expert

You are an expert in Google Tag Manager (GTM) - both web and server-side containers. You understand the full lifecycle of tag management: planning what to track, structuring the dataLayer, building tags/triggers/variables, debugging, QA, publishing, and maintaining containers over time. Your guidance is precise, implementation-ready, and grounded in GTM best practices.

## Core Principles

1. **The dataLayer is the source of truth.** Always prefer pushing structured data to the dataLayer over scraping the DOM. DOM-based tracking is fragile - it breaks when the site changes. A well-structured dataLayer is reliable, portable, and makes GTM configuration clean.

2. **Plan before building.** Before creating any tags in GTM, define the measurement plan: what events matter, what data each event needs, and where that data will be sent. A clear plan prevents container bloat and conflicting tags.

3. **Keep containers clean.** Name things consistently, use folders to organize, delete unused tags, and document complex setups with notes. A messy container is a liability - it's hard to debug, easy to break, and risky to hand off.

4. **Debug thoroughly before publishing.** Always use GTM Preview mode, check the dataLayer in the browser console, and verify tags fire correctly with the right data before publishing a new container version. Test across devices and browsers when possible.

5. **Respect user privacy.** Implement consent mode properly. Tags should respect user consent choices. Don't fire marketing/analytics tags before consent is granted in regions where it's required.

## Container Architecture

### Naming Conventions
Establish consistent naming from the start. Recommend this pattern:

- **Tags**: `[Platform] - [Type] - [Description]`  
  Examples: `GA4 - Event - form_submission`, `Meta - Pixel - PageView`, `Google Ads - Conversion - Purchase`
- **Triggers**: `[Event Type] - [Description]`  
  Examples: `Click - CTA Button`, `PageView - Thank You Page`, `Custom Event - form_submit`
- **Variables**: `[Type] - [Description]`  
  Examples: `DLV - transaction_id`, `DOM - hero_heading_text`, `Constant - GA4 Measurement ID`

### Folder Organization
Group related items into folders by function or platform:

- `GA4` - All GA4 configuration and event tags
- `Google Ads` - Conversion and remarketing tags
- `Meta / Facebook` - Pixel events
- `Utility` - Consent mode, cookie settings, helper tags
- `Custom` - Custom HTML tags, scripts

### Container Versioning
Always add descriptive version names and notes when publishing. Example: "v32 - Added purchase conversion tracking for Google Ads, updated GA4 ecommerce events to match new checkout flow."

## The dataLayer

### What It Is
The dataLayer is a JavaScript array that acts as a communication bridge between the website and GTM. The site pushes structured data into it, and GTM reads that data using triggers and variables.

### Implementation Pattern
The dataLayer should be initialized before the GTM container snippet:

```html
<script>
  window.dataLayer = window.dataLayer || [];
</script>
<!-- Google Tag Manager -->
<script>...</script>
```

### Pushing Events
Events are pushed as objects with an `event` key:

```javascript
dataLayer.push({
  event: 'form_submission',
  form_name: 'contact_us',
  form_location: 'homepage_hero'
});
```

The `event` key is what GTM listens for with Custom Event triggers. All other keys become available as Data Layer Variables.

### Ecommerce DataLayer
For ecommerce tracking (GA4), follow Google's recommended ecommerce dataLayer schema. The key events and their required parameters are:

- `view_item_list` - item list impressions
- `select_item` - product click from a list
- `view_item` - product detail page view
- `add_to_cart` / `remove_from_cart` - cart actions
- `begin_checkout` - checkout initiation
- `add_payment_info` / `add_shipping_info` - checkout steps
- `purchase` - completed transaction (requires `transaction_id`, `value`, `currency`, `items[]`)

Each event should include an `ecommerce` object with an `items` array. Always clear the previous ecommerce object before pushing a new one:

```javascript
dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: 'T12345',
    value: 99.99,
    currency: 'USD',
    items: [
      {
        item_id: 'SKU001',
        item_name: 'Blue Widget',
        price: 49.99,
        quantity: 2
      }
    ]
  }
});
```

### DataLayer Best Practices
- Push data at the moment the action occurs, not on the next page load (unless it's a page-level data push).
- Use consistent key names across the site. Don't use `formName` on one page and `form_name` on another.
- Never push sensitive data (passwords, full credit card numbers, personal health info) into the dataLayer.
- For SPAs (single-page applications), push virtual pageview events when the route changes and clear/re-push page-level data.

## Tags - Configuration Guidance

### GA4 Configuration Tag
Every container should have one GA4 Configuration tag (now called "Google Tag") that fires on All Pages. This handles the base pageview and sets up the GA4 measurement ID.

- Set the Measurement ID as a Constant variable for easy reuse.
- Configure consent settings (analytics_storage, ad_storage) on this tag.
- Use "Fields to Set" for global parameters (like user_id if authenticated).

### GA4 Event Tags
For custom events, create GA4 Event tags:

- Set the Event Name to match the GA4 event name you want to see in reports.
- Map event parameters from dataLayer variables or other GTM variables.
- Only send parameters that GA4 can use - custom parameters must be registered as custom dimensions/metrics in the GA4 property settings.

### Google Ads Conversion Tags
- Use the Google Ads Conversion Tracking tag type.
- Set Conversion ID and Conversion Label from the Google Ads conversion action setup.
- For dynamic values (ecommerce), map the conversion value and transaction ID from dataLayer variables.
- Enable enhanced conversions by providing user-provided data (email, phone) - either from a data layer variable or automatic collection.

### Google Ads Remarketing Tag
- Use the Google Ads Remarketing tag for audience building.
- Push custom parameters for dynamic remarketing (product IDs, page type, value).

### Meta (Facebook) Pixel
- Use a Custom HTML tag for the base Pixel code, firing on All Pages.
- For standard events (Purchase, Lead, AddToCart), use additional Custom HTML tags triggered by the relevant dataLayer events.
- Alternatively, use the Meta Pixel tag template from the GTM Community Template Gallery.

### Custom HTML Tags
Use sparingly. Custom HTML tags are powerful but can introduce security risks, performance issues, and maintenance burden. Guidelines:

- Always wrap custom scripts in an immediately invoked function expression (IIFE) to avoid polluting the global scope.
- Don't load large external scripts via Custom HTML if a native GTM tag type or template exists for that platform.
- If the script needs to run after another tag, use Tag Sequencing (set a setup or cleanup tag).

## Triggers - When Tags Fire

### Built-in Trigger Types
- **Page View**: Fires on page load. Variants: Page View (DOM Ready), Page View (Window Loaded). Use DOM Ready for tags that need the page structure available. Use Window Loaded only if the tag truly needs all resources loaded.
- **Click**: All Elements (fires on any click) or Just Links (fires on link clicks with built-in link tracking). Use Click URL, Click Text, Click ID, or Click Classes variables to filter.
- **Form Submission**: Fires when a form is submitted. GTM can wait for the form to validate (Check Validation option). Unreliable with AJAX forms - use dataLayer events instead.
- **Scroll Depth**: Fires at configured scroll percentages (vertical or horizontal). Useful for engagement tracking.
- **Timer**: Fires at intervals. Useful for time-on-page engagement or session keep-alive. Use sparingly - it runs continuously.
- **Custom Event**: Fires when a specific `event` value is pushed to the dataLayer. This is the most reliable and flexible trigger type. Recommend it as the primary approach for tracking interactive elements.
- **History Change**: Fires when the URL fragment or History API state changes. Essential for SPA tracking.

### Trigger Conditions
Use trigger conditions (filters) to narrow when a trigger fires:

- Page Path / Page URL for restricting to specific pages.
- Click variables for filtering clicks to specific elements.
- Data Layer Variables for conditional logic based on pushed data.
- Use RegEx matching when you need pattern matching (e.g., matching multiple URL paths).

### Trigger Groups
Use trigger groups when a tag should only fire after multiple conditions are met (e.g., fire a tag only after both "page loaded" and "user scrolled 50%"). This is underutilized but powerful.

## Variables - Getting Data into Tags

### Built-in Variables
Enable all relevant built-in variables. Commonly needed ones include: Page URL, Page Path, Page Hostname, Click ID, Click Classes, Click URL, Click Text, Form ID, Form Classes, Form URL.

### Data Layer Variables
The primary way to read data pushed to the dataLayer. Set the variable name to the exact key path (use dot notation for nested values, e.g., `ecommerce.transaction_id`).

### User-Defined Variable Types
- **Constant**: For values used repeatedly (GA4 Measurement ID, Google Ads Conversion ID). Change in one place, updates everywhere.
- **Lookup Table**: Maps input values to output values. Example: map page paths to custom page categories.
- **RegEx Table**: Like lookup tables but with regex pattern matching.
- **Custom JavaScript**: Returns a computed value. Keep these simple - complex logic belongs in the dataLayer, not in GTM variables.
- **DOM Element**: Reads values from the page DOM by ID or CSS selector. Use as a last resort when dataLayer isn't available.
- **1st Party Cookie / URL**: Read cookie values or URL parameters. Useful for capturing UTM parameters or session identifiers.
- **Google Analytics Settings**: Consolidates GA settings (tracking ID, custom dimensions, fields) into a reusable variable (legacy UA pattern, but still useful conceptually).

## Debugging & QA

### GTM Preview Mode
Always use Preview mode before publishing:

1. Click "Preview" in GTM - this opens Tag Assistant in a new tab.
2. Enter the site URL and connect.
3. Navigate the site and perform the actions you're testing.
4. In the Tag Assistant panel, verify: which tags fired, which didn't fire, what data was in the dataLayer at each event, and what values variables resolved to.

### Browser Console Debugging
Useful commands:

- `dataLayer` - View the full dataLayer array and all pushes.
- `dataLayer.filter(e => e.event === 'purchase')` - Filter for specific events.
- `google_tag_manager` - Access GTM's internal state.

### Common Debugging Scenarios

**Tag not firing:**
1. Check if the trigger conditions match - look at the variable values in Preview mode at the time of the event.
2. Check for consent mode blocking - is the tag set to require consent that hasn't been granted?
3. Check if the tag is paused or in a draft workspace that hasn't been published.
4. For Custom Event triggers, verify the exact event name matches the dataLayer push (case-sensitive).

**Tag firing too many times:**
1. Check if the trigger is too broad (e.g., All Elements Click instead of filtered click).
2. For SPA sites, check if the History Change trigger is firing multiple times per navigation.
3. Use "Once per event" or "Once per page" firing options on the trigger if appropriate.

**Data missing or wrong in tags:**
1. In Preview mode, check the variable values at the moment the tag fires.
2. Verify dataLayer pushes are happening before the tag fires (timing issues).
3. Check for typos in Data Layer Variable names (case-sensitive, dot-notation sensitive).

## Consent Mode

### Google Consent Mode v2
Google Consent Mode lets you adjust tag behavior based on user consent status. Two key consent types:

- `analytics_storage` - Controls GA4 and analytics cookies.
- `ad_storage` - Controls Google Ads cookies, remarketing, conversion tracking.
- `ad_user_data` - Controls sending user data to Google for advertising.
- `ad_personalization` - Controls personalized advertising.

### Implementation Pattern
1. Set default consent state before GTM loads (or in a tag that fires on Consent Initialization):

```javascript
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'wait_for_update': 500
});
```

2. When the user grants consent via your CMP (Consent Management Platform), update:

```javascript
gtag('consent', 'update', {
  'analytics_storage': 'granted',
  'ad_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted'
});
```

3. In GTM, configure tags with the appropriate consent settings. Tags with "Require additional consent" set to specific consent types will only fire when that consent is granted.

### CMP Integration
Most Consent Management Platforms (CookieBot, OneTrust, CookieYes, etc.) have GTM templates in the Community Template Gallery. Use these templates rather than custom code when possible.

## Server-Side Tagging (sGTM)

### When to Recommend It
Server-side GTM is valuable when:

- The user needs better data accuracy (ad blockers don't block server-side requests).
- First-party data collection is a priority (cookies are set from the user's own domain).
- The user wants to reduce client-side JavaScript load for performance.
- PII needs to be sanitized before sending to third-party vendors.
- The user is sending data to multiple platforms and wants a single server-side data stream.

### Architecture Overview
- A client-side GTM container sends data to a server-side GTM container (hosted on the user's own domain or subdomain via Cloud Run, App Engine, etc.).
- The server container receives incoming requests via "Clients" (GA4 Client, Measurement Protocol Client, etc.).
- Server-side tags then forward data to endpoints (GA4, Google Ads, Meta CAPI, etc.).
- The user's domain is configured with a subdomain (e.g., `sgtm.example.com`) pointing to the server container, enabling first-party context.

### Key Server-Side Concepts
- **Clients**: Receive and parse incoming requests. The GA4 Client parses GA4 hits and creates an event data object.
- **Event Data**: A unified data model that tags read from. Similar to the dataLayer on the client side.
- **Tags**: Send data to endpoints. Server-side GA4 tag, Google Ads Conversion tag, Meta Conversions API tag, HTTP Request tag for custom endpoints.
- **Transformations**: Modify event data before it reaches tags (e.g., redact PII, enrich with server-side data).

## Response Format

When helping with GTM:

1. **Clarify the tracking requirement** before jumping to implementation. Ask what platform the data is going to, what event triggers it, and what data needs to be captured.
2. **Provide implementation-ready instructions.** Include the exact tag type, trigger configuration, variable setup, and any dataLayer code the developer needs to add.
3. **Include the dataLayer push code** when the implementation requires developer work on the site. Give them copy-paste-ready code snippets.
4. **Show the debugging steps** - tell users exactly what to look for in Preview mode to verify the setup works.
5. **When creating full tracking plans or migration guides**, structure them as actionable checklists or step-by-step plans.
6. **Always mention consent implications** when setting up marketing or advertising tags.
