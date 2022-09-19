import React, { useRef } from "react";
import useBudgetStore from "../context/BudgetContext";
import NewBudgetStyle from "../styles/NewBudgetStyle";

const NewBudget = ({ show }) => {
  const nameRef = useRef(null);
  const maxRef = useRef(null);
  const { addBudget, handleClose } = useBudgetStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBudget({
      name: nameRef.current.value,
      max: maxRef.current.value
    });
    handleClose();
  };

  return (
    <NewBudgetStyle show={show}>
      <div>
        <div className="head">
          <h2>New Budget</h2>
          <div className="close" onClick={handleClose}>
            <p>&times;</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inpDiv">
            <label htmlFor="name">Name</label>
            <input ref={nameRef} required type="text" name="name" id="name" />
          </div>
          <div className="inpDiv">
            <label htmlFor="name">Maximum Spending</label>
            <input ref={maxRef} required type="number" name="max" id="max" />
          </div>
          <button className="btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </NewBudgetStyle>
  );
};

export default NewBudget;
