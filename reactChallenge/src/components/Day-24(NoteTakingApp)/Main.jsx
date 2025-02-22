import "react-quill/dist/quill.snow.css";
import { NoteContextFile } from "./context/NoteContextFile";
import CreatingNote from "./CreatingNote";

function Main() {
  return (
    <NoteContextFile>
      <CreatingNote />
    </NoteContextFile>
  );
}

export default Main;
