# Sequence Blueprints - LinkedIn Automation

Concrete sequence structures to drop into HeyReach / Expandi / Dripify. Pick by list warmth, then set the touch count by account state (3 fresh, 4 warmed).

## Blueprint A - Cold list (2nd/3rd degree)

Most outbound. You can't message a non-connection, so it opens with a connection request.

```
Sequence start
→ Send connection request  (blank, or a short non-pitch note)
   ├─ Accepted:
   │   → wait ~1 day → Msg 1 (hook)                     [reply = exit to inbox]
   │   → wait 3 days → View Profile   (optional warming; keep, low risk)
   │   → wait 3 hours → Msg 2 (payoff)                  [reply = exit]
   │   → (4-touch only) wait 3 days → Msg 3 (bump)      [reply = exit]
   │   → wait 3 days → Msg 4 (breakup)                  [reply = exit]
   │   → end
   └─ Not accepted:
       → wait 10 days → (soft re-touch or just) end
       (you can't DM a non-connection; this branch only waits/closes)
```

3-touch = drop Msg 3. Fresh/reconnected accounts run 3-touch.

## Blueprint B - Already-connected list (1st degree)

No connection request. Start messaging. Remove any "thanks for connecting."

```
Sequence start
→ Msg 1 (hook, no "thanks for connecting")   [reply = exit]
→ wait 3 days → Msg 2 (payoff)               [reply = exit]
→ (4-touch only) wait 3 days → Msg 3 (bump)  [reply = exit]
→ wait 3 days → Msg 4 (breakup)              [reply = exit]
→ end
```

## Blueprint C - Mixed list ("If connected" split)

The best templates open with a connectivity check so each lead takes the right path. Keep this - it stops already-connected leads from failing on a pointless connection request.

```
Sequence start
→ If connected?
   ├─ Connected      → run Blueprint B
   └─ Not connected  → run Blueprint A
```

## Delays - the rules that keep it human

- **First message ~1 day after accept**, never minutes. A DM seconds after acceptance is the clearest automation tell.
- Then **2 - 4 day gaps** between messages.
- Respect the tool minimum (**HeyReach = 3h between any two actions**).
- Total arc ~8 - 12 days for 3 - 4 touches.

## Warming steps

- **Profile view** (once, near the connect): low-risk, mildly warming - keep.
- **Auto-like a post**: fails when the lead has no recent post, and stacks bot-like patterns. **Cut on fresh accounts**; use sparingly at most, with "skip if no post" enabled.
- **Endorse skills / follow**: noise. Skip.

## Reply handling

Any reply on any step must **exit the lead from automation** into the unified inbox for a manual takeover. Never let automation fire the next step after a human replied - it's the fastest way to look robotic and lose a warm lead. Move fast on positive replies; speed wins.

## Tool mechanics (cloud LinkedIn automation)

- **Connection-first for cold** - message steps to non-connections fail; always lead with the connection request on cold lists.
- **URL/list import** - HeyReach/Expandi import a Sales Navigator search or saved-list URL directly; keep the search under the ~2,500 cap and slice if larger.
- **Blank vs noted connection request** - platform data shows blank requests often *accept higher* (esp. with a strong profile); a sharp note can pre-qualify. Test both; default blank when the profile is strong.
- **Sender rotation / limits** - the tool enforces per-account daily caps; set them conservatively (see account-safety).
- **Exclusions** - enable "exclude leads already contacted in other campaigns" to avoid double-touch.
- **Cloud tools > browser extensions** - cloud (HeyReach, Expandi, Dripify) is safer and runs 24/7; extensions (e.g. Waalaxy running in-browser) are riskier and tie automation to your session.

## Multichannel (optional)

LinkedIn warms, email closes. A common flow: connect + soft DM on LinkedIn, then (once accepted or after the arc) send email via Smartlead/Instantly, with the LinkedIn touch making the email feel familiar. Enrich emails via Clay/Wiza. Build the email side with `cold-email-outreach`.
