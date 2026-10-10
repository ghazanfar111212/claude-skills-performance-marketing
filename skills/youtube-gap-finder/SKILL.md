---
name: youtube-gap-finder
description: Find content gaps on YouTube - topics with real demand but weak, missing, stale, or badly-packaged supply that a specific channel can realistically win. Use whenever the user wants to find YouTube content gaps, underserved topics, "what's missing on YouTube in my niche," low-competition video ideas, openings competitors haven't filled, video requests hiding in comments, proven concepts (outliers) to adapt, or asks anything like "what videos should I make that nobody's making," "where's the opening in [niche]," "find gaps for my channel," or "is this topic saturated." Trigger even for casual phrasings like "what's not being covered" or "easy wins on YouTube." Pair the output with youtube-video-ideation to turn each gap into packaged videos. For non-YouTube or general keyword gaps, see content-market-intelligence; for Instagram, see instagram-content-creator.
---

# YouTube Gap Finder

A gap is not "a topic with search volume." A gap is a **specific opening** where demand exists but the supply that meets it is weak, missing, stale, mis-formatted, badly packaged, or aimed at the wrong audience - AND this particular channel can plausibly fill it. The output is a ranked list of openings, each with the evidence behind it and the exact video to make.

Every gap must trace to something you actually observed in search results, view counts, upload dates, or comments. No gaps from imagination.

## Step 0: Calibrate scope

| Signal in the prompt | Mode | Effort | Output |
|---|---|---|---|
| "Is X saturated?", one narrow topic | **Spot check** | 3 - 5 searches | Direct answer: is there a gap, what kind, what to make |
| Niche given, "find gaps for my channel" | **Standard scan** | 8 - 14 searches | 6 - 10 ranked gaps with evidence |
| "Full audit," client work, channel strategy | **Deep audit** | 15 - 25 searches | Ranked gaps by type + competitor gap map + priority, as a file |

Know the **niche**, the **target audience**, and ideally the **channel's size/strengths** before scanning - a gap only counts if *this* channel can win it. A small channel can't out-resource a giant on a head term but can win a fresh angle, a neglected sub-audience, or better packaging. Ask ONE combined question only if these are missing.

## Step 1: Map demand (what people want)

Sample the real demand signals with web_search:

- **YouTube search + autocomplete**: search `<topic> youtube` and run the autocomplete landscape (`how to <topic>`, `<topic> for <audience>`, `best <topic>`, `<topic> not working`, `<topic> 2026`). Autocomplete = aggregated real queries.
- **Comment mining** - the highest-signal gap source. Scan comments on popular videos in the niche for explicit requests: "can you do one for…," "what about…," "please make a video on…," "this didn't work for me because…." A request with lots of likes is pre-validated demand nobody has served.
- **Reddit / forums / Quora**: `site:reddit.com <topic>` - questions asked repeatedly, especially ones where the answers are bad or people say "there's no good video on this."
- **Cross-platform leading indicators**: topics blowing up on TikTok / Shorts / X but not yet covered in long-form YouTube. Demand often hits short platforms first - that lag is a gap.
- **Trend momentum**: rising interest with thin coverage is the best gap; fading interest is a trap.

## Step 2: Map supply (what already exists) and find the gap type

For each promising demand cluster, sample the YouTube results and judge the supply. Look for these gap types (a topic can have several):

1. **Demand - supply gap** - lots of interest, few videos, or only tiny/old ones. The classic opening.
2. **Freshness gap** - top results are outdated (old UI, pre-major-change, "2022" in titles). New/current version wins on recency.
3. **Quality / production gap** - top videos are thin, low-effort, bad audio, or don't actually answer the question. Beatable with a genuinely better video.
4. **Format gap** - the topic is only covered as blog/text, or only in 40-min streams when people want a 5-min answer (or vice versa: only shallow Shorts when demand wants depth).
5. **Angle gap** - everyone covers it the same way; a contrarian take, a specific method, or "the honest version" is open.
6. **Audience gap** - covered generically but not for a specific segment ("for Mac," "for beginners," "for [profession]," "for people who Y"). Segment-targeting is the easiest realistic win.
7. **Packaging gap** - good topic, but every existing video has weak titles/thumbnails. You can out-package and take the clicks even against bigger channels.

State the gap *type* explicitly - it tells the user how to win, not just what to make.

## Step 3: Detect proven concepts (outliers)

Outliers are the strongest gap evidence because demand is already validated. Look for:
- Videos whose **view count far exceeds the channel's subscriber count** (a small channel with a huge hit = a replicable concept the audience clearly wants).
- Videos with **unusually high engagement** relative to peers.
- A single overperforming video in an otherwise thin topic - a signal the audience is hungry and underserved.

For each outlier, capture *why* it worked (angle, promise, format, timing) and whether the user's channel can make an adapted, differentiated version. Adapt the concept, never clone the video.

## Step 4: Score and rank each gap

Score each opening on four factors (rate each low/med/high, or 1 - 5):

- **Demand strength** - how much validated interest (searches, comment requests, outliers, cross-platform heat).
- **Supply weakness** - how beatable the current top videos are (missing / stale / thin / badly packaged).
- **Channel fit** - can *this* channel realistically make it and be credible? Weight this heavily - a great gap you can't win is not your gap.
- **Packageability** - can it be turned into an irresistible title + thumbnail?

Rank by the combination. A mid-demand gap with weak supply, strong fit, and easy packaging often beats a high-demand gap that's saturated or off-brand. Flag anything that looks like a **trap** (high demand but genuinely saturated by strong, fresh, well-packaged incumbents) so the user doesn't waste effort.

## Step 5: For each gap, specify the video

Don't stop at "there's a gap." For each ranked opening, give:

```
GAP: <one line - the opening>
Type: <demand-supply / freshness / quality / format / angle / audience / packaging>
Evidence: <what you actually observed - result counts, dates, view/sub ratios, a quoted comment request>
Make this: <the specific video concept that fills it>
Working title: <one strong title showing how you'd package the win>
Competition: <who you're up against + how beatable, honestly>
Scores: Demand <l/m/h> · Supply-weakness <l/m/h> · Fit <l/m/h> · Packageable <l/m/h>
```

## Quality bar

- Every gap cites real evidence, not a hunch. If you can't point to something you observed, don't call it a gap.
- Be honest about saturation and about channel fit - false openings waste the user's month.
- Prefer specific, winnable openings (angle/audience/freshness/packaging gaps for smaller channels) over giant head terms they can't take.

## Output

**Spot check** - conversational: is there a gap, what type, what to make, how hard.

**Standard scan** - ranked list of gaps using the block above, strongest first, inline or short file.

**Deep audit** - markdown file: gaps grouped by type, a competitor gap map (who owns what, where the holes are), and a priority order. Present the file.

Always end by pointing to **youtube-video-ideation** to turn the top gaps into fully packaged, ready-to-film videos.

See `references/gap-signals.md` for detailed detection tactics and search recipes.
