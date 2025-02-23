import { createContext, useContext, useState } from "react";

const NoteContext = createContext();

const defaultNotes = [
  {
    id: 1,
    title: "First Note",
    content:
      "This is the content of the first note. You can use **Markdown** here!",
  },
  {
    id: 2,
    title: "Second Note",
    content:
      "This is the second note. *Italic text* and `inline code` are supported.",
  },
  {
    id: 3,
    title: "Third Note",
    content:
      "Here's the third note. You can also add lists:\n- Item 1\n- Item 2\n- Item 3",
  },
];

function NoteContextFile({ children }) {
  const [notes, setNotes] = useState(defaultNotes);

  function handleNewNote(title, content) {
    const id = crypto.randomUUID();
    const newNotes = [...notes, { title, content, id }];
    setNotes(newNotes);
    console.log(newNotes);
  }
  function handleDeleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider
      value={{ notes, handleNewNote, handleDeleteNote, setNotes }}
    >
      {children}
    </NoteContext.Provider>
  );
}

function useNoteContext() {
  if (NoteContext === undefined) throw new Error("Note context is undefined");
  return useContext(NoteContext);
}

export { NoteContextFile, useNoteContext };
