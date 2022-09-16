import React from "react";
import HeaderStyle from "../styles/HeaderStyle";

const Header = () => {
  const handleAdd = () => {
    console.log("add");
  };

  const handleView = () => {
    console.log("view");
  };

  return (
    <HeaderStyle>
      <div>
        <h1>Budgets</h1>
      </div>
      <div className="btns">
        <p className="add" onClick={handleAdd}>Add Expense</p>
        <p onClick={handleView}>View Expense</p>
      </div>
    </HeaderStyle>
  );
};

export default Header;
