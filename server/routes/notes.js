import { Router } from "express";
import { randomUUID } from "crypto";

const router = Router();

// In-memory store — fine for this exercise, no DB needed.
let notes = [
  { id: randomUUID(), text: "This is a sample note", createdAt: Date.now() },
];

// GET /api/notes — list all notes
router.get("/", (req, res) => {
  res.json(notes);
});

// POST /api/notes — create a note
// TODO: validate that `text` is present and not just whitespace.
//       Respond with 400 and a helpful error message if invalid.
router.post("/", (req, res) => {
  const { text } = req.body;

  const note = {
    id: randomUUID(),
    text,
    createdAt: Date.now(),
  };

  notes.push(note);
  res.status(201).json(note);
});

// DELETE /api/notes/:id — delete a note by id
// TODO: implement this route. Return 404 if the note doesn't exist.
router.delete("/:id", (req, res) => {
  res.status(501).json({ error: "Not implemented yet" });
});

export default router;
