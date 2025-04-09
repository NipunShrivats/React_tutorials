import React from "react";
import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

// import
export default function List({
  data,
  handleDeleteTodo,
  handleCheckedTodo,
  checked,
}) {
  return (
    <li className="todo-item">
      <button className="check-btn" onClick={() => handleCheckedTodo(data)}>
        <FaCheck />
      </button>
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="del-btn" onClick={() => handleDeleteTodo(data)}>
        <MdDelete />
      </button>
    </li>
  );
}
