import React from "react";
import useBudgetStore from "../context/BudgetContext";
import BudgetContainer from "../styles/BudgetStyle";
import BudgetCard from "./BudgetCard";
import TotalBudgetCard from "./TotalBudgetCard";
import UncatBudgetCard from "./UncatBudgetCard";

const Budgets = () => {
  const { budgets, getBudgetExpenses } = useBudgetStore();
  return (
    <BudgetContainer>
      {budgets.map((budget) => {
        const amount = getBudgetExpenses(budget.id).reduce(
          (total, expense) => total + expense.amount,
          0
        );
        return (
          <BudgetCard
            key={budget.id}
            id={budget.id}
            name={budget.name}
            amount={amount}
            max={budget.max}
          />
        );
      })}
      <UncatBudgetCard />
      <TotalBudgetCard />
    </BudgetContainer>
  );
};

export default Budgets;
