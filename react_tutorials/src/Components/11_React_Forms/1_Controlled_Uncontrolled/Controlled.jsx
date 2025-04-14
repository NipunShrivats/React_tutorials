import React, { useState } from "react";

export default function Controlled() {
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };
  return (
    <>
      <section>
        <h1>Controlled Component</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            Name:
            <input
              type="text"
              id="inputName"
              value={inputValue}
              onChange={handleOnChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
