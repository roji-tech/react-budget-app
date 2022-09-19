import React, { useRef } from "react";
import useBudgetStore, { UNCATEGORISED } from "../context/BudgetContext";
import NewExpenseStyle from "../styles/NewExpenseStyle";

const NewExpense = ({ show }) => {
  const descRef = useRef();
  const amtRef = useRef();
  const budgetIdRef = useRef();
  const {
    addExpense,
    budgets,
    defaultBudgetId,
    handleClose
  } = useBudgetStore();

  const getBudget = () => {
    const defaultBudget = budgets.find(
      (budget) => budget.id === defaultBudgetId
    );
    return defaultBudget;
  };

  const budget = getBudget();

  console.log(budget);

  const handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
    addExpense({
      description: descRef.current.value,
      amount: parseFloat(amtRef.current.value),
      budgetId: defaultBudgetId
    });
    handleClose();
  };

  return (
    <NewExpenseStyle show={show}>
      <div>
        <div className="head">
          <h2>New Expense</h2>
          <div className="close" onClick={handleClose}>
            <p>&times;</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inpDiv">
            <label htmlFor="name">Description</label>
            <input ref={descRef} required type="text" name="desc" id="desc" />
          </div>
          <div className="inpDiv">
            <label htmlFor="name">Amount</label>
            <input
              ref={amtRef}
              required
              type="number"
              name="amount"
              id="amount"
            />
          </div>
          <div className="inpDiv">
            <label htmlFor="name">Budget Id</label>
            <select ref={budgetIdRef} required>
              {budget ? (
                <option value={getBudget().id}>{getBudget().name}</option>
              ) : (
                <>
                  <option value={UNCATEGORISED}>Uncategorised</option>
                  {budgets.map((budget) => (
                    <option key={budget.id} value={budget.id}>
                      {budget.name}
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>
          <button className="btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </NewExpenseStyle>
  );
};

export default NewExpense;
