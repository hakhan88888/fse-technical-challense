# Interviewer Rubric — Notes App Challenge

Do not share this file with the candidate. Use it during/after the session
to score consistently across candidates.

## How to use this

Score each row 0–3 (0 = not demonstrated, 1 = weak, 2 = solid, 3 = strong).
Leave notes — the notes matter more than the number when comparing candidates later.

| Area | 0-3 | Notes |
|---|---|---|
| **Backend correctness** — routes work as specified, validation added, correct status codes | | |
| **Frontend correctness** — add/delete work, list updates, errors surface visibly | | |
| **Code organization** — logic isn't crammed in one place, reasonable naming, no obvious dead code | | |
| **Async handling** — proper use of async/await or promises, no unhandled rejections, no race conditions introduced | | |
| **Error handling / edge cases** — empty input, failed requests, missing IDs handled without being told | | |
| **React fundamentals** — correct hook usage, no unnecessary re-renders or state bugs, keys used correctly in lists | | |
| **Debugging exercise (Debug.jsx)** — found the stale-closure bug, explained *why* it happens, fixed it correctly | | |
| **Communication** — talks through reasoning, asks clarifying questions, explains tradeoffs | | |
| **Use of remaining time** — prioritized sensibly if they ran out of time (base requirements before extensions) | | |

## The Debug.jsx bug, explained

`setInterval`'s callback captures `count` from the render it was created in
(closure), so it always logs and increments from the *original* `count`
value (0), not the current one. The state updates but the closure is stale,
so the interval effectively resets to 1 every second instead of counting up
correctly in the logic (though React state itself does update via the
setter, the *logged* value and any derived calculation off `count` inside
the closure will be wrong).

**Good fixes:**
- Use the functional updater form: `setCount(c => c + 1)` and log inside a
  separate effect that runs on `count` changes, or log via a ref.
- Or add `count` to the dependency array (less ideal — recreates the
  interval every tick, but shows they understand the tradeoff if they say so).

**What to listen for:** do they just paste a fix, or can they explain *why*
the original code was wrong? The explanation is the real signal here.

## Quick calibration guide

- **Strong hire signal:** finishes base requirements cleanly with time to
  spare, picks reasonable Part 2 extensions, catches the Debug.jsx bug
  quickly and explains it correctly, handles errors without prompting.
- **Borderline:** finishes base requirements but with some rough edges
  (missed validation, no error UI), needs a hint on the debugging exercise
  but gets there.
- **Weak signal:** struggles with base CRUD wiring, doesn't handle errors
  at all even when asked "what happens if this fails?", can't explain the
  bug even after being shown the fix.

## Suggested wrap-up questions (ask regardless of how far they got)

- "What would you change if this needed to scale to 10,000 notes?"
- "Where would you add tests first, and why?"
- "What's a tradeoff you made because of the time limit?"
- "Walk me through what happens, step by step, if the DELETE request fails
  partway through — what does the user see?"
