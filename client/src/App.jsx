import { useEffect, useState } from "react";

const API_URL = "http://localhost:4000/api/notes";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error("Failed to load notes", err));
  }, []);

  // TODO: implement adding a note.
  // - Send a POST request to API_URL with { text: newNoteText }
  // - Update local state with the new note on success
  // - Show a visible error if the request fails (e.g. validation error from server)
  function handleAddNote(e) {
    e.preventDefault();
  }

  // TODO: implement deleting a note.
  // - Send a DELETE request to `${API_URL}/${id}`
  // - Remove it from local state on success
  function handleDeleteNote(id) {}

  return (
    <div style={{ maxWidth: 480, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Notes</h1>

      <form onSubmit={handleAddNote} style={{ marginBottom: 20 }}>
        <input
          value={newNoteText}
          onChange={(e) => setNewNoteText(e.target.value)}
          placeholder="Write a note..."
          style={{ width: "70%", padding: 8 }}
        />
        <button type="submit" style={{ padding: 8, marginLeft: 8 }}>
          Add
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {notes.map((note) => (
          <li
            key={note.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <span>{note.text}</span>
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
