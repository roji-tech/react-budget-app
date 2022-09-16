import React from "react";
import Budgets from "./components/Budgets";
import Header from "./components/Header";
// import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Budgets />
    </div>
  );
};

export default App;
