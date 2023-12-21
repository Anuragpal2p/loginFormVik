import React, { useState } from "react";

const Interview = () => {
  const [value, setValue] = useState(1);

//   const [multipliedValue, setMultipliedValue] = useState(1);

let multipliedValue = value *5;

  const multiplyByFive = () => {
    //   setMultipliedValue(value * 5);
      setValue(value+1)
  };


  return (
    <div>
      <h1>Main value:{value}</h1>
      <button onClick={multiplyByFive}>Click to multiply by 5</button>
      <h2>Multiplied Value :{multipliedValue}</h2>
    </div>
  );
};

export default Interview;
