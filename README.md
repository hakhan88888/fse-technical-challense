# Coding Challenge: Notes App

Time budget: **90 minutes**. You will not be expected to finish everything —
we'd rather see clean, working code on the base requirements than a rushed
attempt at everything. Talk through your thinking as you go; if this is
async/unmonitored, leave brief comments explaining decisions instead.

## What's here

A skeleton with a Node/Express backend (`/server`) and a React + Vite
frontend (`/client`). Both currently run but are incomplete — you'll see
`// TODO` markers where work is needed.

### Running it

```bash
# Terminal 1
cd server
npm install
npm run dev      # starts on http://localhost:4000

# Terminal 2
cd client
npm install
npm run dev      # starts on http://localhost:5173
```

## Part 1 — Base requirements (aim to finish this)

Build a small notes app:

**Backend** (`server/routes/notes.js`)
- `GET /api/notes` — list all notes
- `POST /api/notes` — create a note (reject empty/whitespace-only text with a 400)
- `DELETE /api/notes/:id` — delete a note by id
- In-memory storage is fine — no database needed

**Frontend** (`client/src/App.jsx`)
- List existing notes
- A form to add a new note
- A way to delete a note
- Show a visible error if an API call fails (e.g. server down, validation error)

## Part 2 — Pick 2 (if time allows)

Pick whichever two are most interesting to you:

- Add search/filter for notes on the frontend
- Add sorting or pagination on the backend + reflect it in the UI
- Add a loading state, and make the delete/add feel responsive (optimistic update)
- Prevent a double-submit if the user clicks "Add" twice quickly
- Write 1–2 tests (backend route test or a frontend component test — your choice of tools)

## Part 3 — Debugging (10–15 min)

There's a bug in `client/src/Debug.jsx`. It's not used anywhere else in the
app — it's just for this exercise. Find it, fix it, and add a one-line
comment explaining what was wrong.

## Notes

- Feel free to install additional npm packages if it helps you work faster.
- Don't worry about styling/CSS — functionality and code quality matter more here.
- If you run out of time, leave TODO comments describing what you'd do next —
  that's useful information for us too.

Good luck!
