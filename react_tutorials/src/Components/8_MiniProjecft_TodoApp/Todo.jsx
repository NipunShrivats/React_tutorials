import React, { useState } from "react";
import "./todo.css";
import Time from "./Time";
import Form from "./Form";
import List from "./List";

export default function Todo() {
  const [listData, setListData] = useState([]);

  const handleFormSubmit = (inputValue) => {
    // In case empty return empty
    if (!inputValue) return;
    // If data is repeated return nothing
    if (listData.includes(inputValue)) return;
    // keep previous value intack while adding new value i.e inputvalue.
    setListData((prev) => [...prev, inputValue]);
  };

  // deletion
  const handleDeleteTodo = (value) => {
    let arr = listData.filter((ele) => ele !== value); // filter method will filter out which do not match
    setListData(arr);
  };

  const handleCheck = (value) => {};
  const handleClearAll = () => {
    setListData([]);
  };
  return (
    <>
      <section className="todo-app">
        <header className="header">
          <h1>Todo List</h1>
        </header>

        <section>
          <Time />
        </section>

        <section className="form">
          <Form onAddTodo={handleFormSubmit} />
        </section>

        <section className="myList">
          <ul style={{ padding: listData.length == 0 ? "0rem" : "2rem 4rem" }}>
            {listData.map((data, index) => {
              return (
                <List
                  key={index}
                  data={data}
                  handleDeleteTodo={handleDeleteTodo}
                  handleCheckEle={handleCheck}
                />
              );
            })}
          </ul>
        </section>

        <section>
          <button className="clearAll" onClick={handleClearAll}>
            Clear All
          </button>
        </section>
      </section>
    </>
  );
}
