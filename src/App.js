import React from "react";
import { Route, Routes } from "react-router";
import Home from "pages/Home.jsx";
import Create from "pages/Create.jsx";

function App() {
  return (
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path={"/"} element={<Home />} />
      <Route path={"/create"} element={<Create />} />
    </Routes>
  );
}

export default App;
