---
name: linkedin-post-writer
description: Write LinkedIn posts that earn qualified engagement from a specific target audience and read like a human wrote them, not a language model. Use whenever the user wants a LinkedIn post, post idea, hook, carousel copy, comment reply, or content calendar - and also whenever they say "my posts get no engagement," "nobody comments," "this sounds like AI," "make it sound like me," "turn this into a post," "I got a client result, help me post about it," "personal brand," "thought leadership," "LinkedIn content," or "what should I post this week." Trigger even for casual asks like "post idea?" or when the user pastes a draft and asks if it's any good. Do NOT use for LinkedIn cold outreach DMs or connection requests (use linkedin-outreach-architect) or for LinkedIn Ads copy (use ad-creative).
---

# LinkedIn Post Writer

## The premise

Most LinkedIn advice optimizes for engagement. That's the wrong target. LinkedIn shows a post to people who resemble the people who engaged with it early - so cheap engagement doesn't just fail to help, it actively trains the distribution against the author. A post that pulls 400 likes from job-seekers and students teaches the algorithm to show the next post to job-seekers and students.

The target is **qualified engagement**: comments and profile views from the small set of people who could actually hire, refer, or hire-from the author. Twelve comments from six agency owners and two CMOs beats 400 likes every single time, and the skill should say so out loud when the user is chasing the wrong number.

The second premise: AI slop isn't a style problem, it's an **information** problem. Slop reads generic because it was generated from a topic instead of from material. "Write a post about SEO" has no facts in it, so the model fills the gap with structure - hooks, triads, contrast lines, an "agree?" at the end. The cure is not a better prompt. The cure is extracting things only this person knows before writing a word.

## Process

### 1. Establish the target, not the topic

Before writing, know:

- **Who is this for** - a named role and situation, not "B2B founders." "Agency owners doing $30-80k/mo who just lost a client and are re-examining their delivery."
- **Who it should repel** - a post with no repulsion has no point of view. Naming this makes the writing sharper.
- **What should happen** - a reply from a specific kind of person? A DM? Being remembered in six weeks when a budget opens? Different goals produce different posts. "Engagement" is not a goal.

If the user hasn't said, ask. Two questions, not ten.

### 2. Extract raw material - this is the whole job

Never write from a topic. Get the specifics first. Ask for whichever of these apply:

- A number that came from their actual account, spreadsheet, or invoice
- A date, a duration, a dollar figure, a real tool name, a real screen
- What they believed before, and the moment it broke
- What they got wrong and what it cost
- A thing a client said, in the client's own words
- What they tried that didn't work before the thing that did
- The part everyone else leaves out because it's unflattering

**If the user can't supply any of this, do not generate a post from nothing.** Say so, and offer to interview them for five minutes instead. A post built on invented specifics is worse than no post - LinkedIn's audience is the author's professional network, and being caught fabricating a client story costs more than a week of silence.

Fabricating numbers, clients, or anecdotes is never acceptable, even as a "placeholder." If a placeholder is genuinely wanted, mark it `[YOUR NUMBER]` in brackets so it cannot be published by accident.

### 3. Pick an archetype

Don't default to the hook-bullets-CTA template. Read `references/archetypes.md` and pick the one that fits the material - the material decides, not the other way round. Briefly: teardown, receipt, correction, field note, process artifact, open question, sharp explainer.

### 4. Write it

Structure that actually matters:

- **First two lines carry everything.** Roughly 140-200 characters show before "…see more." They must make a claim or state a fact, not tease one. "I made a mistake that cost a client $12k" is a hook. "I learned something important this week 👇" is a toll booth, and readers resent toll booths.
- **No line break bait.** Don't put a cliffhanger before the fold. Earn the click by being interesting on line one.
- **Short paragraphs, but not one line each.** The broetry format (every sentence its own paragraph) is now a slop marker. Vary it - some one-liners for emphasis, some three-sentence blocks. Rhythm should be uneven, because human writing is uneven.
- **Length follows material.** 60 words is fine if there are only 60 words of substance. 250 is fine if it earns it. Padding to hit a length is how slop happens.
- **Land on something.** Best closes: a real opinion the author would defend, a specific question they actually want answered, or just... the last fact. Stopping abruptly is allowed and often better than a bow.
- **Zero to three hashtags**, and only if they're real communities. Hashtag stacks read as 2019.
- **Links:** put them in the first comment or accept the reach hit knowingly. Tell the user the tradeoff rather than deciding silently for them.
- **No emoji bullets.** Occasional emoji in prose is fine if the user actually writes that way.

### 5. Run the slop audit

Before delivering, check the draft against `references/slop-patterns.md`, then against these five questions:

1. **Could a competitor publish this exact post?** If yes, it's slop. Kill it and go back to step 2.
2. **Is there one sentence here that could cost something?** A real opinion, a named mistake, a number that invites scrutiny. If nothing is at risk, nothing is interesting.
3. **Did anything get invented?** Every number, name, and quote traceable to the user's material.
4. **Would the wrong audience share this?** If it would do numbers with a general audience, it's probably too generic for the target one.
5. **Does it sound like this person?** Read it aloud mentally against their samples. If they never say "leverage," it can't say "leverage."

### 6. Deliver

Give **one post**, not five. Five variants means no judgment was applied. Then:

- 2 alternate hooks (first two lines only) - hooks are cheap to swap, whole posts aren't
- One line on what it's optimizing for and who it's built to repel
- Anything flagged as needing the user's real numbers

Optionally, if the post is going out soon, note the distribution basics from below.

## Voice capture

Generic voice is the second-biggest slop tell after generic content. To sound like the user:

- **Ask for 2-3 of their real posts, emails, or Slack messages** - anything they wrote without trying to sound professional. Emails and Slack are better source material than their previous LinkedIn posts, because their previous LinkedIn posts are probably already imitating someone else.
- Extract: average sentence length, contractions or not, how they swear or don't, their filler words, whether they use dashes/parentheses/ellipses, jargon they actually use vs. jargon they'd never say.
- **Match their weaknesses too.** If they write long rambling sentences, write one. Clean prose is a fingerprint of the model, not of the person.
- If no samples exist, write plain and short, and tell them the voice will get closer once they share a few.

See `references/voice-capture.md` for the extraction checklist.

## Distribution (mention when relevant, don't lecture)

- The first 60-90 minutes decide the reach. Post when the target audience is at a desk - for a US audience that's roughly 7-10am ET Tue-Thu; for a Pakistan-based user targeting the US that means evening local time, which is worth saying out loud.
- Reply to every comment with a real sentence, not "Thanks!" - replies count as engagement and pull the post back into the feed.
- Comment on other people's posts before publishing. Reach follows presence.
- Don't edit the post in the first hour if it can be avoided.
- Posting daily to say nothing is worse than posting weekly to say something. Frequency without material is just a slop generator with a calendar.

## Worked example

**Slop version** (what happens when a topic goes in and no material does):

> 🚀 3 lessons I learned from spending $2M on Google Ads
>
> Most marketers don't realize this.
>
> Lesson 1: Data beats opinion.
> Lesson 2: Test everything.
> Lesson 3: Patience wins.
>
> It's not about the budget. It's about the strategy.
>
> Agree? 👇
>
> #marketing #googleads #growth #digitalmarketing #ppc

Nothing in it is false. Nothing in it is information either. Any of 10,000 people could have posted it, which is precisely why the algorithm will route it to a general audience - and a general audience is not a buyer.

**The version with material in it:**

> We paused a client's brand campaign for three weeks to see what it was actually doing.
>
> Conversions dropped 8%. Spend dropped 34%.
>
> The brand campaign was buying clicks from people who had already typed the client's name into Google. Most of them were coming back anyway. We were paying a toll to meet our own customers at the door.
>
> Turned it back on at 40% of the old budget, capped it, and only defended the terms competitors were actually bidding on. Same conversion volume. $4.1k a month freed up for non-brand.
>
> I'm not saying kill brand. I'm saying most accounts have never tested it, and "brand protects us" is usually a story we tell the client because pausing it feels scary.
>
> If you've never turned your brand campaign off, you don't know what it's worth. You only know what it costs.

Why it works: two real numbers, a decision with a downside, an opinion that a chunk of the industry would argue with, no hashtag stack, no "agree?", and a last line that's a position rather than a bow. It will get fewer likes. The comments will be from people who run ad accounts - which is the entire point.

## Reference files

- `references/slop-patterns.md` - the tell-list: banned phrases, structures, and formatting, with rewrites. Read this before finalizing any draft.
- `references/archetypes.md` - the seven post shapes, what material each needs, and when to use them.
- `references/voice-capture.md` - how to extract and reproduce someone's actual writing voice.
