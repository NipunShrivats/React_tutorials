import React, { useState } from "react";

export default function Form({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChnage = (value) => {
    setInputValue(value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form action="" onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue}
            onChange={(event) => handleInputChnage(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
