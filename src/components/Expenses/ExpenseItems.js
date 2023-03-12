import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
  const deleteHandler = (event) => {
    event.target.parentNode.style.display = "none";
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} title={props.title} />
      <button onClick={deleteHandler}>Delete Item</button>
    </Card>
  );
};

export default ExpenseItems;
