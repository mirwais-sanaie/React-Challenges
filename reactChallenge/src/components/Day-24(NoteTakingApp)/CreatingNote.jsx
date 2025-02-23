/* eslint-disable no-unused-vars */
import { useState } from "react";
import ReactQuill from "react-quill";
import { useNoteContext } from "./context/NoteContextFile";

function CreatingNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [newContent, setNewContent] = useState("");
  const { notes, handleNewNote, handleDeleteNote, setNotes } = useNoteContext();

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSetNewContent = (value) => {
    setNewContent(value);
  };
  const handleSendData = () => {
    handleNewNote(title, content);
    setTitle("");
    setContent("");
  };

  const handleOpenEdit = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, isEdit: true } : note
    );
    setNotes(updatedNotes);
  };

  const handleCloseEdit = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, isEdit: false, content: newContent } : note
    );
    setNotes(updatedNotes);
    setNewContent("");
  };

  return (
    <div className="container">
      <h1>Note-Taking App</h1>
      <div className="edit">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Add title here..."
          />
          <ReactQuill
            theme="snow" // Theme for the editor
            value={content}
            onChange={handleChange}
            placeholder="Write something amazing..."
          />
          <button onClick={() => handleSendData()}>Add</button>
        </div>
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div>
        <h2>Your Notes:</h2>
        <ul className="notes">
          {notes.map((note) => (
            <li className="note" key={note.id}>
              <h3>{note.title}</h3>
              {note.isEdit ? (
                <ReactQuill
                  theme="snow" // Theme for the editor
                  value={
                    note.isEdit && newContent !== "" ? newContent : note.content
                  }
                  onChange={handleSetNewContent}
                />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: note.content }} />
              )}
              <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
              <button
                onClick={
                  note.isEdit
                    ? () => handleCloseEdit(note.id)
                    : () => handleOpenEdit(note.id)
                }
              >
                {note.isEdit ? "Save changes" : "Edit"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CreatingNote;
