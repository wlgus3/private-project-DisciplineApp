import React from "react";
import "./Todo.css";
import { IoIosArrowDropdownCircle, IoIosArrowDropdown } from "react-icons/io";
// 개별 todo 항목
const Todo = ({ todo, onCheckToggle }) => {
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
      </div>
    </div>
  );
};

export default Todo;
