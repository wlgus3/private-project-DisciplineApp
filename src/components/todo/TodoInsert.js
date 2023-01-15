import "./TodoInsert.css";
import { IoIosAddCircle } from "react-icons/io";
import { React, useState } from "react";

function TodoInsert({ openIsertToggle, insertTodo }) {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    insertTodo(value);
    setValue("");
    openIsertToggle();
    console.log(value);
  };

  return (
    <div>
      <div className="background" onClick={openIsertToggle}></div>
      <div className="toggle">
        <form onSubmit={onSubmit}>
          <div className="todoinsertname"> 할 일 추가</div>
          <input type="text" placeholder="새로운 할 일을 적어주세요" value={value} onChange={onChange}></input>
          <button type="submit">저장</button>
        </form>
      </div>
    </div>
  );
}

export default TodoInsert;
