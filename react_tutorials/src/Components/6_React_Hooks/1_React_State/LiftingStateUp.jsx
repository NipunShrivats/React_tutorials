import React, { useState } from "react";

// parent Component
export default function LiftingStateUp() {
  const [inputValue, SetInputValue] = useState("");
  return (
    <>
      {/* passed state variables as props to be used by children */}
      <InputComponent inputValue={inputValue} SetInputValue={SetInputValue} />
      <br />
      <br />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
}

// Child component - 1
const InputComponent = (props) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your Name"
        value={props.inputValue}
        onChange={(e) => props.SetInputValue(e.target.value)}
      />
    </>
  );
};
// Child component - 2
const DisplayComponent = (props) => {
  return (
    <>
      <p>The Current value of input is: {props.inputValue}</p>
    </>
  );
};
