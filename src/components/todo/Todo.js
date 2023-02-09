import React from "react";
import "./Todo.css";
import { IoIosArrowDropdownCircle, IoIosArrowDropdown } from "react-icons/io";
import TodoInsert from "./TodoInsert";
// 개별 todo 항목
const Todo = ({ onchangeSelectedTodo, openIsertToggle, todo, onCheckToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="Todo">
      {/* <div className="checkbox">
        <input type="checkbox" />
      </div> */}
      <div
        className={`content ${checked ? "checked" : ""}`}
        onClick={() => {
          onCheckToggle(id);
        }}
      >
        {checked ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropdown />}
        <div className="text">{text}</div>
        <button
          onClick={() => {
            openIsertToggle();
            onchangeSelectedTodo(todo);
          }}
        >
          변경
        </button>
      </div>
    </div>
  );
};

export default Todo;
