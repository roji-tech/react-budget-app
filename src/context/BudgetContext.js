import { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from uuid;

const BudgetContext = createContext({});

export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([])
  const [expenses, setExpenses] = useState([])

  const getBudgetExpenses = (budgetId) => (
    expenses.filter(
      expense => expense.budgetId === budgetId
    ))

  const addExpenses = ({ description, amount, budgetId }) => (
    setExpenses(
      (prevExpenses) => {
        return [
          ...prevExpenses,
          {
            id: uuidv4(), description, amount, budgetId
          }
        ]
      }
    )
  )

  const addBudget = ({ name, max }) => (
    setBudgets(
      (prevBudgets) => {
        if (prevBudgets.find(budget => budget.name === name)) {
          return prevBudgets
        }
        return [...prevBudgets, { id: uuidv4(), name, max }]
      }
    )
  )

  const deleteExpenses = ({ id }) => (
    setBudgets(
      (prevExpenses) =>
        prevExpenses.filter(expense => expense.id !== id)
    )
  )
  const deleteBudget = ({ id }) => (
    setBudgets(
      (prevBudgets) =>
        prevBudgets.filter(budget => budget.id !== id)
    )
  )
  const contextData = {
    budgets,
    expenses,
    getBudgetExpenses,
    addExpenses,
    addBudget,
    deleteExpenses,
    deleteBudget
  }

  return (
    <BudgetContext.Provider value={contextData}>
      {children}
    </BudgetContext.Provider>
  );
};

const BudgetStore = () => {
  return useContext(BudgetContext);
};

export default BudgetStore;