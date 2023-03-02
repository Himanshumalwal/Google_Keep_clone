import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("i am alert");
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem(() => {
      return addItem.filter((currdata, indx) => {
        // return indx !== id;
        if(indx!==id)
        {
          return true;
        }
        else{
          return false;
        }
      });
    });
  };

  return (
    <>
      <Header />
      <Footer />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={() => {
              onDelete(index);
            }}
          />
        );
      })}
      <CreateNote passNote={addNote} />
      {/* <Note /> */}
    </>
  );
};

export default App;
