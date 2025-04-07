import React, { useState } from "react";
import "./todo.css";

import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [listData, setListData] = useState([]);

  console.log(listData);

  const handleInputChnage = (value) => {
    setInputValue(value);
  };
  const handleFormSubmit = (event) => {
    // 1. Avoid refresh
    event.preventDefault();
    // 2. In case empty return empty
    if (!inputValue) return;
    // 3. If data is repeated return nothing
    if (listData.includes(inputValue)) return;
    // 4. keep previous value intack while adding new value i.e inputvalue.
    setListData((prev) => [...prev, inputValue]);
    // 5. After value is added empty the input bar
    setInputValue("");
  };
  return (
    <>
      <section className="todo-app">
        <header className="header">
          <h1>Todo List</h1>
        </header>
        <section className="form">
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
        </section>

        <section
          className="myList"
          style={{ padding: listData.length == 0 ? "0rem" : "2rem 4rem" }}
        >
          <ul>
            {listData.map((data, index) => {
              return (
                <li key={index} className="todo-item">
                  <button className="check-btn">
                    <FaCheck />
                  </button>
                  <span>{data}</span>
                  <button className="del-btn">
                    <MdDelete />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </>
  );
}
