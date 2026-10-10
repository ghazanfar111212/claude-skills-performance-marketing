---
name: youtube-video-ideation
description: Turn a channel, niche, or rough topic into ready-to-make YouTube video ideas - each one packaged with title options, a thumbnail concept, a hook, format, and a reason it will win. Use whenever the user wants YouTube video ideas, content for a YouTube channel, "what should I make a video about," help brainstorming videos, title/thumbnail/hook ideas, a video series or content pillars, repurposing a topic into videos, or asks anything like "give me 10 video ideas for my [niche] channel," "package this idea," "write me some titles," "ideas for shorts," or "I have no idea what to film." Trigger even for casual asks like "video idea?" or when the user pastes a topic and wants it turned into videos. For finding underserved topics/openings first, pair with youtube-gap-finder. Do NOT use for non-YouTube platforms (see instagram-content-creator) or generic keyword research (see content-market-intelligence).
---

# YouTube Video Ideation

The output of this skill is not a topic list. It's a set of **packaged, ready-to-make ideas** - each one something the user could open a camera and film tomorrow, with the title, thumbnail concept, and hook already decided, plus an honest reason it will earn clicks and watch time.

On YouTube, the idea is only a third of the job. **Packaging (title + thumbnail + first 30 seconds) is what actually gets a video watched.** A great topic with weak packaging dies; an ordinary topic with great packaging can carry a channel. So every idea this skill produces is packaged, never bare.

## Step 0: Calibrate scope (before generating anything)

Match effort to the ask. State your mode in one line so the user can redirect.

| Signal in the prompt | Mode | What you deliver |
|---|---|---|
| "quick idea," "a few titles," one narrow topic | **Quick brainstorm** | 3 - 6 packaged ideas, inline, conversational |
| "ideas for my channel," a niche + goal given | **Ideation set** | 8 - 15 packaged ideas grouped by pillar, inline or short file |
| "content plan," "series," "next quarter," client deliverable | **Full package** | Pillars + 15 - 25 ideas + priority order + series arcs, as a file |

**Before generating, know three things.** If they're not in the prompt, infer from context or ask ONE combined question - don't interrogate:
1. **Niche / channel topic** - what the channel is about.
2. **Audience** - who it's for (beginners vs pros changes everything).
3. **Goal** - views/growth, or leads/sales, or authority. This changes whether you chase browse-y entertainment ideas or search-y evergreen ideas.

If the user gives a channel URL or existing videos, look at what's already worked before ideating (see "Model what's proven").

## Step 1: Research the demand (light but real)

Don't ideate from imagination alone - sample what the audience actually wants. Use web_search to check:
- **YouTube search language**: search `<topic> youtube`, note the recurring title patterns, and mentally run autocomplete (`how to <topic>`, `<topic> for beginners`, `best <topic>`, `<topic> vs`). These reveal the exact phrasing the audience uses.
- **Proven concepts (outliers)**: look for videos where views far exceed the channel's size, or that got unusually high engagement. An outlier is a *validated concept* you can adapt - not copy. Note what made it work (the angle, the promise, the format).
- **Pain and questions**: `site:reddit.com <topic>`, forum threads, and comment sections surface the real questions, frustrations, and "I wish someone made a video on…" moments. These are gold - a stated request is pre-validated demand.
- **Trend momentum**: is interest rising, flat, or fading? Rising topics reward speed; evergreen topics reward depth.

Keep this proportional: 3 - 6 searches for a brainstorm, 8 - 14 for a full package. If the user already pointed you at a gap (e.g. from youtube-gap-finder), skip most of this and ideate straight into the opening.

## Step 2: Generate ideas across the demand types

Great channels mix two engines. Deliberately generate for both:

- **Search / evergreen ideas** - answer a question people actively type. Compounds for years, lower ceiling per video, needs solid titles matching search phrasing. ("How to X," "X for beginners," "X vs Y," "Why X.")
- **Browse / suggested ideas** - entertainment, story, curiosity, timeliness. Higher ceiling, algorithm-driven, lives or dies on packaging and retention. ("I tried X for 30 days," "The truth about X," "X is a lie," challenges, transformations, reactions.)

Pull from these idea engines - don't just list topics, twist each into an angle:

- **Transformation / stakes**: before→after, "I did X for N days," results people want.
- **Contrarian / myth-busting**: "Stop doing X," "X is overrated," "The truth about X."
- **Curiosity gap**: a promise you can't resist ("This changed how I X," "The X nobody tells you about").
- **Listicle / ranking / tier list**: "Top N X," "X ranked worst to best," "N X mistakes."
- **Specific-audience angle**: take a broad topic and aim it ("X for [profession / beginners / people who Y]"). Underserved sub-audiences are the easiest wins.
- **Versus / comparison**: "X vs Y - which should you actually buy."
- **Story / documentary**: a narrative arc around the topic. High retention when done well.
- **Reaction / teardown**: react to a thing, break down why something works.
- **Fresh take on an outlier**: an adapted proven concept, aimed at this channel's audience.

## Step 3: Package every idea

This is the part most brainstorms skip and it's the part that matters. For **each** idea, produce:

- **Working titles (2 - 3 options)** - different angles, not rewordings. Keep the strongest promise up front; front-load the payoff; avoid clickbait you can't deliver on. See `references/packaging-playbook.md` for title patterns.
- **Thumbnail concept** - one sentence describing the visual: the subject, the emotion, the ≤3 - 4 words of text, the contrast/hook. Title and thumbnail must not repeat each other - they should combine into one irresistible promise.
- **Hook (first 15 - 30s)** - one or two lines: restate the promise, raise the stakes, and tell them what they'll have by the end. This is where retention is won or lost.
- **Format + length** - long-form / Short / tutorial / story etc., and a rough runtime.
- **Search or Browse** - label which engine it's built for (affects title phrasing and expectations).
- **Why it works** - one honest line tying it to the demand you saw. If you can't justify it, cut it.

Use the compact template in `references/packaging-playbook.md` unless the user wants prose.

## Step 4: Organize into pillars and a shooting order (Ideation set / Full package)

One-off ideas don't build channels; **clusters** do. Group the ideas into 3 - 5 **content pillars** (recurring themes the channel owns). This makes the channel legible to both the algorithm and the viewer, and makes future ideation easy.

For the full package, add:
- **Series arcs** - ideas that chain (Part 1→N, or a themed run) to pull binge-watching.
- **Priority order** - sequence to film, weighing: packageability, demand strength, effort to produce, and how well it fits the channel's current momentum. Lead with a couple of high-ceiling, low-effort "get a win" videos.
- **Repurposing note** - which long-form ideas cut into Shorts, and which Shorts could expand into long-form.

See `references/formats-and-series.md` for format specs, length guidance, and pillar/series structure.

## Quality bar - before delivering, check each idea

- Could the user actually film this without needing something they don't have? (No fantasy productions.)
- Is the title a promise the video can keep? (No bait.)
- Does the thumbnail add information the title doesn't? (No redundancy.)
- Is it differentiated from what already ranks/gets suggested, or is it just another copy?
- Does it fit the audience and at least one pillar?

Cut anything that fails. Ten strong packaged ideas beat thirty topics.

## Output format

**Quick brainstorm** - conversational, each idea as a tight packaged block (title options / thumbnail / hook / why). No file.

**Ideation set / Full package** - group by pillar; for full packages, save as a markdown file with pillars, packaged ideas, series arcs, and priority order, and present it. Keep prose minimal - creators skim.

Always end by pointing to the natural next move: run these through **youtube-gap-finder** to confirm the openings, or hand a chosen idea to a thumbnail/script step.
