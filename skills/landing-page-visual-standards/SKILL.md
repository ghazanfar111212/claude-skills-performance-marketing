---
name: landing-page-visual-standards
description: A strict visual quality bar and design systems for building landing pages that don't look AI-generated. Use whenever building, designing, or redesigning any landing page, funnel page, or lead-gen page - always load this TOGETHER WITH landing-page-designer (conversion structure) and frontend-design (visual craft). This skill supplies the banned-defaults list, approved design systems, the signature-element rule, conversion non-negotiables, and GHL build constraints. Trigger on "landing page", "lead gen page", "funnel page", "make it convert", "looks like AI made this", or any page built for paid ads or outbound campaigns.
---

# Landing Page Visual Standards

Personal quality bar for landing pages. `landing-page-designer` decides WHAT goes on the page (sections, offer, form). This skill decides HOW it looks - and what it must never look like.

## Process (mandatory order)

1. **Declare the signature element before writing any code.** Every page gets ONE memorable, subject-specific visual device that dramatizes the visitor's problem or the offer (e.g., the "NOT CITED" stamp on an AEO page, a before/after slider for hardscaping, a live cost counter for ads-waste offers). State it in one sentence. If you can't name one, don't start building - think longer.
2. **Pick a design system** from [DESIGN-SYSTEMS.md](DESIGN-SYSTEMS.md) or derive a new one FROM THE SUBJECT's world (its materials, tools, vernacular). Never default to a system because it's easy.
3. **Check every choice against the banned list below.** If any banned pattern survives, the page fails regardless of how it converts on paper.
4. **Build**, then self-critique against [CHECKLIST.md](CHECKLIST.md) before presenting.
5. Study `examples/aeo-evidence-file.html` - this is the approved standard for tone, density, and craft.

## Banned defaults (instant fail)

- Inter, Roboto, Open Sans, Lato, or system-stack-only typography
- Generic blue (#2563EB-family) or purple CTAs; purple-to-blue gradients anywhere
- Three rounded-corner cards with icons in a centered grid
- Everything center-aligned; symmetric hero with text-left/image-right stock layout
- Gradient blobs, glassmorphism, floating 3D shapes, mesh gradients
- Stock photos: smiling headset people, laptop-at-café, generic "team" shots
- Emoji in headlines or section titles
- Soft drop-shadows on white cards as the only depth device
- "Welcome to", "We are a leading", "Unlock/Supercharge/Elevate your" copy
- The three flagged AI-default looks: cream `#F4F1EA` + serif + terracotta `#D97757`; near-black + acid green; broadsheet hairline-grid with zero radius everywhere
- Fake proof: invented client logos, made-up stats, fabricated testimonials. Claims must be defensible or absent.

## Conversion non-negotiables

- ONE saturated CTA color on the entire page; it appears nowhere except CTAs. Contrast isolation beats color psychology.
- Same single offer repeated 3x (hero, mid-page offer block, final form) + sticky mobile CTA bar.
- Form: ≤4 fields; one qualifying dropdown (industry/budget) that doubles as niche-signal data.
- Cold-traffic friction removal: "no call required / no card / no obligation" framing near every CTA.
- Headline = outcome + specificity, message-matched ≥70% to the ad it receives traffic from.
- Mobile-first: single column, ≥16px body, 44px tap targets, CTA visible without scroll.
- Motion: max 2 living details (typing effect, ticker, reveal), all respecting `prefers-reduced-motion`.

## GHL deployment constraints

- Deliver as ONE self-contained HTML file: inline CSS, one Google Fonts link tag, vanilla JS only.
- Mark the form with a comment `<!-- GHL FORM EMBED SLOT -->` so the native form/pipeline embed can replace it.
- Structure top-level blocks so each maps to a GHL section; note in the handoff that typography-heavy designs go in custom-code sections, not the drag-drop builder.
- Thank-you step fires pixels (GA4 + Meta), never the page load.

## Deeper references

- Approved palettes & font pairings: [DESIGN-SYSTEMS.md](DESIGN-SYSTEMS.md)
- Pre-delivery self-critique: [CHECKLIST.md](CHECKLIST.md)
- Gold-standard example: [examples/aeo-evidence-file.html](examples/aeo-evidence-file.html)
