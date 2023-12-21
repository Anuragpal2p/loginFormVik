import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState();

  // function for start the counter
  const startCounter = () => {
    if (!intervalId  ) {  
      const interval = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
      setIntervalId(interval);

    
  }else{
    clearInterval(intervalId);
  }
  };

  //function for stop the counter
  const stopCounter = () => {
    clearInterval(intervalId);
  };

  //funcction for reset the counter value

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <button onClick={(e) => startCounter()}> start </button>
        <h1>{counter}</h1>

        <button onClick={() => stopCounter()}> stop </button>
      </div>
      <center>
        <button onClick={() => resetCounter()}> Reset</button>
      </center>
    </>
  );
};

export default Counter;
