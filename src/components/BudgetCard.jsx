import React from "react";
import useBudgetStore, { UNCATEGORISED } from "../context/BudgetContext";
import BudgetCardStyle from "../styles/BudgetCardStyle";
import capitalizer from "../utils/capitalizer";
import formatCurrency from "../utils/currencyFormatter";

const BudgetCard = ({
  name,
  id = UNCATEGORISED,
  amount = 0,
  max = 0,
  hideButtons,
  showMax
}) => {
  const {
    setForSingleExpense,
    setShowViewExps,
    setDefaultBudgetId
  } = useBudgetStore();

  const performShowExpense = () => {
    setDefaultBudgetId(id);
    setForSingleExpense(id);
  };

  const performShowViewExpense = () => {
    setDefaultBudgetId(id);
    setShowViewExps(true);
  };

  const getProgressBar = (amount, max) => {
    const ratio = amount / max;
    const width = ratio * 100;
    let width2 = width - 100;
    width2 = width2 <= 0 ? null : width2;
    const exceeded = ratio > 1 ? true : false;
    // Math.sign(width2) To CHECK IF NUMBER IS POSITIVE OR NEGATIVE

    if (ratio < 0.5) return { color: "blue", width };
    if (ratio === 0.5) return { color: "green", width };
    if (ratio < 0.75) return { color: "yellow", width };
    return { color: "#f97171", width, exceeded, width2 };
  };

  name = capitalizer(name);

  return (
    <BudgetCardStyle
      showMax={showMax}
      hideButtons={hideButtons}
      values={getProgressBar(amount, max)}
    >
      <div className="title">
        <h3>{name}</h3>
        <p>
          {formatCurrency(amount)}{" "}
          {!showMax && (
            <>
              / <small>{formatCurrency(max)}</small>
            </>
          )}
        </p>
      </div>
      <div>{!showMax && <div className="progress_bar" />}</div>
      {!hideButtons && (
        <div className="btns">
          <p className="add" onClick={performShowExpense}>
            Add Expenses
          </p>
          <p onClick={performShowViewExpense}>View Expenses</p>
        </div>
      )}
    </BudgetCardStyle>
  );
};

export default BudgetCard;
