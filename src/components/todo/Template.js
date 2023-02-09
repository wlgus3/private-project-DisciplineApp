import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io"; //react-icons 사용시험
import "./Template.css";

//! todo 페이지 탬플릿
const Template = ({ todos, children }) => {
  let clonetodos = JSON.parse(JSON.stringify(todos));
  return (
    <div className="Template">
      <div className="title">
        <IoIosArrowDropdownCircle /> 오늘의 Must Todo 3{" "}
      </div>
      <div className="subtitle"> 23년 01월 xx일 (하루단위로 새로고침 됩니다.)</div>
      <div>{children} </div>
      <div className="title"> 달성률 (%): {Math.round((clonetodos.filter((el) => el.checked === true).length / todos.length) * 100)}</div>
    </div>
  );
};

export default Template;
