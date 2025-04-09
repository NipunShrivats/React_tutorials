import React, { useState } from "react";
import "./todo.css";
import Time from "./Time";
import Form from "./Form";
import List from "./List";

export default function Todo() {
  const [listData, setListData] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    // In case empty return empty // if (!inputValue) return;
    if (!content) return;

    // If data is repeated return nothing // if (listData.includes(inputValue)) return;
    const ifTodoContentMatched = listData.find(
      (currTask) => currTask.content === content
    );
    if (ifTodoContentMatched) return;

    // keep previous value intack while adding new value i.e inputvalue.
    // setListData((prev) => [...prev, content]);
    setListData((prev) => [...prev, { id, content, checked }]);
  };

  // deletion
  const handleDeleteTodo = (value) => {
    let arr = listData.filter((ele) => ele.content !== value); // filter method will filter out which do not match
    setListData(arr);
  };
  //
  const handleCheckedTodo = (task) => {
    const updateTask = listData.map((curTask) => {
      if (curTask.content === task) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setListData(updateTask);
  };

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
            {listData.map((data) => {
              return (
                <List
                  key={data.id}
                  data={data.content}
                  checked={data.checked}
                  handleDeleteTodo={handleDeleteTodo}
                  handleCheckedTodo={handleCheckedTodo}
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
