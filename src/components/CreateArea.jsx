import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function HandleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function SubmitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          onChange={HandleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={HandleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={SubmitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
