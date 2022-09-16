import React from "react";
import BudgetCardStyle from "../styles/BudgetCardStyle";
import currencyFormatter from "../utils/currencyFormatter";

const BudgetCard = ({ name, amount, max, gray }) => {
  const getProgressBar = (amount, max) => {
    const ratio = amount / max;

    const width = ratio * 100;

    const exceeded = ratio > 1 ? true : false;

    console.log(width);
    if (ratio < 0.5) return { color: "blue", width: width };
    if (ratio === 0.5) return { color: "green", width: width };
    if (ratio < 0.75) return { color: "yellow", width: width };
    return { color: "red", width: width, exceeded };
  };

  return (
    <BudgetCardStyle values={getProgressBar(1300, 1000)}>
      <div className="title">
        <h3>Groceries</h3>
        <p>
          {currencyFormatter.format(100)} /{" "}
          <small>{currencyFormatter.format(200)}</small>
        </p>
      </div>
      <div>
        <div className="progress_bar" />
      </div>
      <div className="btns">
        <p className="add">Add Expenses</p>
        <p>View Expenses</p>
      </div>
    </BudgetCardStyle>
  );
};

export default BudgetCard;
