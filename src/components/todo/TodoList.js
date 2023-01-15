import React from "react";
import Todo from "./Todo.js";
import "./TodoList.css";

const TodoList = ({ todos, onCheckToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} onCheckToggle={onCheckToggle} />;
      })}
    </div>
  );
};

export default TodoList;
