import "./TodoInsert.css";
import { IoIosAddCircle } from "react-icons/io";
import { React, useEffect, useState } from "react";

function TodoInsert({ onUpdate, onRemove, selectedTodo, openIsertToggle, insertTodo }) {
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

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  // const onTodoChange = (event) => {
  //   event.preventDefault;
  //   //체인지 투두
  //   setValue("");
  //   openIsertToggle();
  //   console.log(value);
  // };

  return (
    <div>
      <div className="background" onClick={openIsertToggle}></div>
      <div className="toggle">
        <form onSubmit={onSubmit}>
          <div className="todoinsertname"> 할 일 추가</div>
          <input type="text" placeholder="새로운 할 일을 적어주세요" value={value} onChange={onChange}></input>

          {selectedTodo ? (
            <div>
              <button onClick={() => onUpdate(selectedTodo.id, value)}>변경</button>
              <button onClick={() => onRemove(selectedTodo.id)}>삭제</button>
            </div>
          ) : (
            <button type="submit">저장</button>
          )}
        </form>
        {/* {selectedTodo ? s} */}
      </div>
    </div>
  );
}

export default TodoInsert;
