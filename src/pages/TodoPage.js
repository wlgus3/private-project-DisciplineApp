// import logo from "./logo.svg";
import "./TodoPage.css";
import Template from "../components/todo/Template";
import TodoList from "../components/todo/TodoList";
import { React, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import TodoInsert from "../components/todo/TodoInsert";

// const initialId = 3;
const TodoPage = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "명상 5분", checked: true },
    { id: 2, text: "독서 15분", checked: true },
    { id: 3, text: "운동", checked: false },
  ]);

  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);

  const openIsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    return setInsertToggle(!insertToggle);
  };

  const onchangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };
  const insertTodo = (value) => {
    // 새로운 할일 적어서 setTodos로 할일목록에 합치기
    if (value === "") {
      return alert("할 일을 입력한 후 저장이 가능합니다.");
    } else {
      const todo = {
        id: Math.random().toString(36).slice(2),
        text: value,
        checked: false,
      };
      setTodos([...todos, todo]);
      console.log(todos);
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
    console.log(id);
  };

  const onRemove = (id) => {
    openIsertToggle();
    setTodos(todos.filter((el) => el.id !== id));
  };

  const onUpdate = (id, text) => {
    openIsertToggle();

    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  return (
    <div>
      <Template todos={todos}>
        <TodoList todos={todos} onCheckToggle={onCheckToggle} openIsertToggle={openIsertToggle} onchangeSelectedTodo={onchangeSelectedTodo} />
        <div className="addTodoButton" onClick={openIsertToggle}>
          <IoIosAddCircle />
        </div>
      </Template>
      {
        //새 할일 입력하는 토글-> 버튼 눌렸을 때만 등장하도록
        insertToggle && (
          <TodoInsert onUpdate={onUpdate} onRemove={onRemove} selectedTodo={selectedTodo} openIsertToggle={openIsertToggle} insertTodo={insertTodo} />
        ) //! 인서트 토글이 true일 때만 나오도록
      }
    </div>
  );
};

export default TodoPage;
