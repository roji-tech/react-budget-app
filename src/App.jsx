import React from "react";
import Budgets from "./components/Budgets";
import Header from "./components/Header";
import NewBudget from "./components/NewBudget";
import NewExpense from "./components/NewExpense";
import ViewExpenses from "./components/ViewExpenses";
import useBudgetStore from "./context/BudgetContext";

const App = () => {
  const { showBudget, setShowBudget } = useBudgetStore();
  const { showExpense, setShowExpense } = useBudgetStore();

  return (
    <div className="App">
      <div className="content">
        <NewBudget show={showBudget} />
        <NewExpense show={showExpense} />
        <Header setShowBudget={setShowBudget} setShowExpense={setShowExpense} />
        <Budgets setShowExpense={setShowExpense} />
        <ViewExpenses />
      </div>
    </div>
  );
};

export default App;
