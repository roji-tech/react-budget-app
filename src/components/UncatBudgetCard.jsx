import React from "react";
import useBudgetStore, { UNCATEGORISED } from "../context/BudgetContext";
import BudgetCard from "./BudgetCard";

const UncatBudgetCard = () => {
  const { getBudgetExpenses } = useBudgetStore();

  const amount = getBudgetExpenses(UNCATEGORISED).reduce(
    (total, expense) => total + expense.amount,
    0
  );

  // if (amount === 0) return null;

  return <BudgetCard name={"UNCATEGORISED"} showMax amount={amount} />;
};

export default UncatBudgetCard;
