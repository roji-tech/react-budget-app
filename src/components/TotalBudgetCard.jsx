import React from "react";
import useBudgetStore from "../context/BudgetContext";
import BudgetCard from "./BudgetCard";

const TotalBudgetCard = () => {
  const { expenses, budgets } = useBudgetStore();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);

  const max = budgets.reduce((total, budget) => total + parseFloat(budget.max), 0);

  // if (max === 0) return null;

  return <BudgetCard name="TOTAL" amount={amount} max={max} hideButtons />;
};

export default TotalBudgetCard;
