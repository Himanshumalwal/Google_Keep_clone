import React from "react";
import { useState } from "react";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    // const value=event.target.value;
    // const name=event.target.name;

    const { name, value } = event.target;

    setNote((prevdata) => {
      return {
        ...prevdata,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt=()=>{
    setExpand(true);
  }

  const backtonormal=()=>{
    setExpand(false);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
  }
  return (
    <>
      <div className="main_note"             onDoubleClick={backtonormal}  >
        <form on onSubmit={handleSubmit}>
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <textarea
            cols=""
            rows=""
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="Write your note..."
            onClick={expandIt}
          ></textarea>
         { 
          
          expand?
        <button onClick={addEvent}> Submit</button>
         :null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
