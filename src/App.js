import { React, useState } from "react";
import Menubar from "./components/Menubar";
import { BrowserRouter, Routes, Route, Link, Switch, Router } from "react-router-dom";

import TodoPage from "./pages/TodoPage";
import WorksoutPage from "./pages/WorksoutPage";
import ReadingPage from "./pages/ReadingPage";
import MeditationPage from "./pages/MeditationPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Menubar />
        <Routes>
          {/* <Switch> */}
          <Route path="/" element={<TodoPage />} exact></Route>
          <Route path="/worksout" element={<WorksoutPage />}></Route>
          <Route path="/reading" element={<ReadingPage />}></Route>
          <Route path="/meditation" element={<MeditationPage />}></Route>
          {/* </Switch> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
