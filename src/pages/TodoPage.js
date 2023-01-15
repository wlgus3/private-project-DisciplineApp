// import logo from "./logo.svg";
import "./TodoPage.css";
import Template from "../components/todo/Template";
import TodoList from "../components/todo/TodoList";
import { React, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import TodoInsert from "../components/todo/TodoInsert";

const TodoPage = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "명상 5분", checked: true },
    { id: 2, text: "독서 15분", checked: true },
    { id: 3, text: "운동", checked: false },
  ]);

  const [insertToggle, setInsertToggle] = useState(false);

  const openIsertToggle = () => {
    return setInsertToggle(!insertToggle);
  };

  const insertTodo = (value) => {
    if (value === "") {
      return alert("할 일을 입력한 후 저장이 가능합니다.");
    } else {
      const todo = {
        id: todos.length + 1,
        text: value,
        checked: false,
      };
      setTodos([...todos, todo]);
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  };

  return (
    <div>
      <Template>
        <TodoList todos={todos} onCheckToggle={onCheckToggle} />
        <div className="addTodoButton" onClick={openIsertToggle}>
          <IoIosAddCircle />
        </div>
      </Template>
      {
        insertToggle && <TodoInsert openIsertToggle={openIsertToggle} insertTodo={insertTodo} /> //! 인서트 토글이 true일 때만 나오도록
      }
    </div>
  );
};

export default TodoPage;
