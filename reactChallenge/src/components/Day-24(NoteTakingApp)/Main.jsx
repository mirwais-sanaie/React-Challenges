import "react-quill/dist/quill.snow.css";
import { NoteContextFile } from "./context/NoteContextFile";
import CreatingNote from "./CreatingNote";
import "./Style.css";

function Main() {
  return (
    <NoteContextFile>
      <CreatingNote />
    </NoteContextFile>
  );
}

export default Main;
