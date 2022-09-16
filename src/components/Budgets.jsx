import React from "react";
import BudgetContainer from "../styles/BudgetContainer";
import BudgetCard from "./BudgetCard";
import TotalBudgetCard from "./TotalBudgetCard";

const Budgets = () => {
  return (
    <BudgetContainer>
      <BudgetCard />
      <BudgetCard />
      <BudgetCard />
      <TotalBudgetCard />
    </BudgetContainer>
  );
};

export default Budgets;
