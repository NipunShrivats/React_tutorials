import React, { useState } from "react";
import "./Challange.css";

export default function UseState_Challange() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState(0);

  console.log(count);
  console.log(inputVal);
  parseInt(inputVal);
  parseInt(count);

  const OnInc = () => {
    setCount(count + inputVal);
  };
  const OnDec = () => {
    setCount(count - inputVal);
  };
  const OnReset = () => {
    setCount(0);
    setInputVal(0);
  };

  const handleInputValue = (value) => {
    setInputVal(value);
  };
  return (
    <>
      <div className="main-box">
        <div>
          <h1 className="heading">UseState Challenge</h1>
        </div>
        <div className="input-data">
          <h1>Count: {count}</h1>
          <h1>
            Skip:{" "}
            <input
              type="number"
              value={inputVal}
              onChange={(event) => handleInputValue(Number(event.target.value))}
            />
          </h1>
        </div>
        <div className="button-box">
          <button onClick={() => OnInc()} disabled={count >= 100}>
            Inc +
          </button>
          <button onClick={() => OnDec()} disabled={count <= 0}>
            Dec -
          </button>
          <button onClick={() => OnReset()}>Reset ∞</button>
        </div>
      </div>
    </>
  );
}
