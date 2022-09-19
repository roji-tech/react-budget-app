import React from "react";
import HeaderStyle from "../styles/HeaderStyle";

const Header = ({ setShowBudget, setShowExpense }) => {
  const handleAddBudget = () => {
    setShowBudget(true);
  };

  const handleAddExpense = () => {
    setShowExpense(true);
  };

  return (
    <HeaderStyle>
      <div>
        <h1>Budgets</h1>
      </div>
      <div className="btns">
        <p className="add" onClick={handleAddBudget}>
          Add Budget
        </p>
        <p onClick={handleAddExpense}>Add Expense</p>
      </div>
    </HeaderStyle>
  );
};

export default Header;
