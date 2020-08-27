import React from "react";
import Note from "./components/Note";

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} content={note.content}></Note>
        ))}
      </ul>
    </div>
  );
};

export default App;