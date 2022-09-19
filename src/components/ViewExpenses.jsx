import styled from "styled-components";
import React from "react";
import NewBudgetStyle from "../styles/NewBudgetStyle";
import useBudgetStore, { UNCATEGORISED } from "../context/BudgetContext";
import capitalizer from "../utils/capitalizer";
import formatNumber from "../utils/currencyFormatter";

const ViewExpenses = () => {
  const {
    showViewExps,
    handleClose,
    defaultBudgetId,
    deleteExpense,
    deleteBudget,
    getBudgetExpenses,
    getBudget
  } = useBudgetStore();

  const show = showViewExps;

  const expenses = getBudgetExpenses(defaultBudgetId);

  const budget = getBudget(defaultBudgetId);
  const budgetName = budget ? capitalizer(budget.name) : "UNCATEGORISED";

  return (
    <Container show={show}>
      <div>
        <div className="head">
          <h2>
            {budgetName}
            {defaultBudgetId !== UNCATEGORISED && (
              <span onClick={() => deleteBudget(defaultBudgetId)}>DELETE</span>
            )}
          </h2>
          <div className="close" onClick={handleClose}>
            <p>&times;</p>
          </div>
        </div>
        <div className="expenses">
          {expenses.map((expense) => (
            <div key={expense.id} className="single_expense">
              <div>{capitalizer(expense.description)}</div>
              <div className="amt">{formatNumber(expense.amount)}</div>
              <div className="delIcon">
                <p onClick={() => deleteExpense(expense.id)}>&times;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ViewExpenses;

const Container = styled(NewBudgetStyle)`
  .head {
    h2 {
      display: flex;
      align-items: center;

      span {
        font-size: 9px;
        padding: 3px;
        margin-left: 10%;
        border: 2px solid #fe6767;
        border-radius: 10px;
        width: max-content;
        height: max-content;
        background-color: #efc0c0;
        cursor: pointer;
        user-select: none;

        :hover {
          background-color: #fbe5e5;
        }
      }
    }
  }
  .expenses {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 5px 3%;
    gap: 15px;

    .single_expense {
      display: grid;
      grid-template-columns: 5fr 2fr 1fr;
      width: 100%;
      background-color: #bbdbf6;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      margin: 10px;

      .amt {
        padding: 2%;
        padding-left: 10%;
        box-shadow: -1px 1px 10px 0 #009dff;
        color: #050546;
      }

      .delIcon {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          color: white;
          font-weight: 1000;
          font-size: 1.5rem;
          padding: 0.5px 4px;
          background-color: #f00000;
          cursor: pointer;
          border: 2px solid #ff04047f;
          user-select: none;

          :hover {
            color: black;
            background-color: #f1d3d3;
            box-shadow: -1px 1px 5px 0 #800c0c9e;
          }
        }
      }
    }
  }
`;
