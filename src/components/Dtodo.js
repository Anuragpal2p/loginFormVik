import { useState } from "react";

export default function App() {
  // suppose this state will take values
  const [data, setData] = useState("");
  // this state will store each and every value od data
  const [store, setStore] = useState([]);
  const [isAdd, setisAdd] = useState(true);
  const [getid, setgetid] = useState("");

  //but we need to first make handleInput function
  const HandleInput = (event) => {
    // now use setData in it
    setData(event);
  };

  // now we are going to console data
  console.log(data, "take value");

  const HandleStore = () => {
    setStore((prev) => {
      return [...prev, data];
    });
  };

  const HandleDelete = (id) => {
    setStore((prev) => {
      return prev.filter((e, index) => {
        return index !== id;
      });
    });
  };

  const HandleEdit = (name, id) => {
    setData(name);
    setisAdd(false);
    setgetid(id);
  };

  const HandleSave = () => {
    setisAdd(true);
    setStore((prev) => {
      return prev.map((value, index) => {
        return index == getid ? data : value;
      });
    });
    setData("");
  };

  console.log(store, "this is our store");
  // but when we click, add button this will store in store in Array

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => HandleInput(e.target.value)}
      />
      {isAdd ? (
        <button onClick={() => HandleStore()}>Add</button>
      ) : (
        <button onClick={() => HandleSave()}>Save</button>
      )}
      <ol>
        {store?.map((e, index) => (
          <div style={{ display: "flex", gap: 4 }}>
            <li key={index}>{e}</li>
            <button onClick={() => HandleDelete(index)}>Delete</button>
            <button onClick={() => HandleEdit(e, index)}>Edit</button>
          </div>
        ))}
      </ol>
    </div>
  );
}