import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStore from "../hooks/useLocalStore";

const BudgetContext = createContext({});

export const UNCATEGORISED = "uncategorised";

export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStore("budgets", []);
  const [expenses, setExpenses] = useLocalStore("expenses", []);
  const [defaultBudgetId, setDefaultBudgetId] = useState(UNCATEGORISED);
  const [showExpense, setShowExpense] = useState(false);
  const [showBudget, setShowBudget] = useState(false);
  const [showViewExps, setShowViewExps] = useState(false);

  const getBudgetExpenses = (budgetId) =>
    expenses.filter((expense) => expense.budgetId === budgetId);

  const addExpense = ({ description, amount, budgetId }) =>
    setExpenses((prevExpenses) => {
      return [
        ...prevExpenses,
        {
          id: uuidv4(),
          description,
          amount,
          budgetId
        }
      ];
    });

  const addBudget = ({ name, max }) =>
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidv4(), name, max }];
    });

  const deleteExpense = (id) =>
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );

  const deleteBudget = (id) => {
    setExpenses((prevExpense) => {
      return prevExpense.map((expense) => {
        if (expense.budgetId !== id) return expense;
        return { ...expense, budgetId: UNCATEGORISED };
      });
    });

    setBudgets((prevBudgets) =>
      prevBudgets.filter((budget) => budget.id !== id)
    );
  };

  const setForSingleExpense = (id = UNCATEGORISED) => {
    setDefaultBudgetId(id);
    setShowExpense(true);
  };

  const handleClose = () => {
    setShowBudget(false);
    setShowExpense(false);
    setShowViewExps(false);
  };

  const contextData = {
    showExpense,
    defaultBudgetId,
    budgets,
    expenses,
    showBudget,
    showViewExps,
    setShowViewExps,
    setShowBudget,
    handleClose,
    addExpense,
    addBudget,
    setForSingleExpense,
    setShowExpense,
    setDefaultBudgetId,
    getBudgetExpenses,
    deleteExpense,
    deleteBudget
  };

  return (
    <BudgetContext.Provider value={contextData}>
      {children}
    </BudgetContext.Provider>
  );
};

const useBudgetStore = () => {
  return useContext(BudgetContext);
};

export default useBudgetStore;
