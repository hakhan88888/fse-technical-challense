import express from "express";
import cors from "cors";
import notesRouter from "./routes/notes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/notes", notesRouter);

app.get("/", (req, res) => {
  res.send("Notes API is running");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
