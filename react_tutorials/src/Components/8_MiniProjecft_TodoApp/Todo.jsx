import React from "react";
import "./todo.css";

export default function Todo() {
  return (
    <>
      <section className="todo-app">
        <header className="header">
          <h1>Todo List</h1>
        </header>
        <section className="form">
          <form action="">
            <div>
              <input type="text" className="todo-input" autoComplete="off" />
            </div>
            <div>
              <button type="submit" className="todo-btn">
                Add
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}
