import React, { useState } from "react";

const ToDoList = () => {
  const [note, setNote] = useState("");
  const [list, setList] = useState([]);
  const [getId, setGetId] = useState();

  const [isAdd, setIsAdd] = useState(true);
  console.log(list, "my note");

  const handleAddNote = () => {
    setList((prev) => {
      return [...prev, note];
    });
    setNote("");
  };

  //   function for Edit the note
  const HandleEdit = (name, id) => {
    setNote(name);
    setIsAdd(false);
    setGetId(id);
  };

  // Function for Delete
  const handleDelte = (id) => {
    setList((prev) => {
      return prev.filter((e, index) => {
        return index !== id;
      });
    });
  };

  const handleSaveNote = (index, id) => {
    setIsAdd(true);
    setList((prev) => {
      return prev.map((value, index) => {
        return index == getId ? note : value;
      });
    });
  };

  return (
    <>
      <h1>To Do List </h1>

      <input
        type="text"
        placeholder="write your note here"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></input>
      {isAdd ? (
        <button onClick={() => handleAddNote()}>Add Note</button>
      ) : (
        <button onClick={() => handleSaveNote()}>Save Note</button>
      )}
      <ol>
        {list?.map((item, index) => (
          <div style={{ display: "flex", gap: 20, marginTop: "10px" }}>
            <li key={index}>{item}</li>

            <button
              style={{ background: "blue", color: "white", border: "none" }}
              onClick={() => HandleEdit(item, index)}
            >
              Edit
            </button>
            <button
              style={{ background: "red", color: "white", border: "none" }}
              onClick={() => handleDelte(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </ol>
    </>
  );
};
export default ToDoList;
