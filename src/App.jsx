import { useContext, useEffect, useState } from "react";
import "./assets/css/App.css";
import { Navbar } from "./components/Navbar";
import { NoteCard } from "./components/NoteCard";
import { NoteDetails } from "./components/NoteDetails";
import { UpsertNote } from "./components/UpsertNote";
import { PaletteContext } from "./context/PaletteContext";
import { HighlightGlossaryTerms } from "./utils/highlightGlossary"; // Custom utility for highlighting


const palettes = [
  { id: 1, color: "#6495ED", name: "blue-palette" },
  { id: 2, color: "#eb6b00", name: "autumm-palette" },
  { id: 3, color: "#A64EE0", name: "purple-palette" },
  { id: 4, color: "#333", name: "black-palette" },
];


export default function App() {
  const { state, dispatch } = useContext(PaletteContext);
  const [onCreateNote, setOnCreateNote] = useState(false);
  const [onViewNote, setOnViewNote] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPalette, setCurrentPalette] = useState(
    state?.palette ? palettes.find((p) => p.id === state.palette.id) : palettes[0]
  );

  useEffect(() => {
    const tempNotes = JSON.parse(localStorage.getItem("notes"));
    if (tempNotes) setNotes(tempNotes);
  }, []);

  const saveNotes = (items) => {
    localStorage.setItem("notes", JSON.stringify(items));
  };

  const handleCreateNote = (note) => {
    if (note) {
      const tempNotes = [...notes, note];
      setNotes(tempNotes);
      saveNotes(tempNotes);
    }
  };

  const handleOnUpdate = (note) => {
    setCurrentNote(note);
    setOnCreateNote(true);
  };

  const handleUpdateNote = (note) => {
    if (note) {
      const tempNotes = notes.map((n) => (n.id === note.id ? note : n));
      setNotes(tempNotes);
      setCurrentNote(null);
      saveNotes(tempNotes);
    }
  };

  const handleDeleteNote = (noteId) => {
    const tempNotes = notes.filter((n) => n.id !== noteId);
    setNotes(tempNotes);
    saveNotes(tempNotes);
  };

  const handleOnPreview = (note) => {
    setCurrentNote(note);
    setOnViewNote(true);
  };

  const handlePinToggle = (note) => {
    const updatedNote = { ...note, isPinned: !note.isPinned };
    const updatedNotes = notes.map((n) => (n.id === note.id ? updatedNote : n));
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const filteredNotes = search
    ? notes.filter(
        (n) =>
          n.title.toLowerCase().includes(search.toLowerCase()) ||
          n.desc.toLowerCase().includes(search.toLowerCase())
      )
    : notes;

  const sortedNotes = filteredNotes.sort((a, b) => b.isPinned - a.isPinned);

  return (
    <div className={`app ${state?.palette ? state?.palette?.name : currentPalette?.name}`}>
      <Navbar
        setOpen={setOnCreateNote}
        state={state}
        dispatch={dispatch}
        setCurrentPalette={setCurrentPalette}
        palettes={palettes}
        currentPalette={currentPalette}
      />
      <div className="wrapper container">
        <div className="search-wrapper">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="search-input"
            placeholder="Search"
          />
          <button className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="notes-wrapper">
          {sortedNotes.map((note) => (
            <NoteCard
              key={note?.id}
              note={note}
              onDelete={handleDeleteNote}
              onUpdate={handleOnUpdate}
              onPreview={handleOnPreview}
              onPinToggle={handlePinToggle}
            />
          ))}
        </div>
        {onCreateNote && (
          <UpsertNote
            note={currentNote}
            createNote={handleCreateNote}
            updateNote={handleUpdateNote}
            setOpen={setOnCreateNote}
          />
        )}
        {onViewNote && (
          <NoteDetails note={currentNote} setView={setOnViewNote} />
        )}
      </div>
    </div>
  );
}
