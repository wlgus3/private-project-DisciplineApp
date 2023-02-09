import React from "react";
import Todo from "./Todo.js";
import "./TodoList.css";

const TodoList = ({ onchangeSelectedTodo, openIsertToggle, todos, onCheckToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return <Todo onchangeSelectedTodo={onchangeSelectedTodo} openIsertToggle={openIsertToggle} todo={todo} key={todo.id} onCheckToggle={onCheckToggle} />;
      })}
    </div>
  );
};

export default TodoList;
