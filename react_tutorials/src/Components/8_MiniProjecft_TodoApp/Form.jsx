import React, { useState } from "react";

export default function Form({ onAddTodo }) {
  const [inputValue, setInputValue] = useState({});

  const handleInputChnage = (value) => {
    setInputValue({ id: value, content: value, checked: false });
    // now it contains 3 different items in an object
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: "" });
  };

  return (
    <>
      <form action="" onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
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
