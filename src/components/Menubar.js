import React from "react";
import "./Menubar.css";
import { Link } from "react-router-dom";
//! 상단 메뉴바
const Menubar = () => {
  return (
    //<Link to="/">홈</Link>
    <div className="Menubar">
      <Link to="/">
        <div className="tab">Todo</div>
      </Link>
      <Link to="/worksout">
        <div className="tab">운동</div>
      </Link>
      <Link to="/reading">
        <div className="tab">독서</div>
      </Link>
      <Link to="/meditation">
        <div className="tab">명상</div>
      </Link>
    </div>
  );
};

export default Menubar;
