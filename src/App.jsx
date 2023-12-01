import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cards from "./pages/Cards";
import Charts from "./pages/Charts";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/about" element={<Cards />}></Route>
          <Route path="/settings" element={<Charts />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
