import React from "react";
import "./ExpenseItems.css";

const ExpenseDetails=(props)=>{
  const title = props.title;
  const amount = props.amount;

  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">Rs {props.amount}/-</div>
    </div>
  );
}

export default ExpenseDetails;
