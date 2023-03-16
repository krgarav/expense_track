import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const [expense, setExpense] = useState(props.amount);

  // const deleteHandler = (event) => {
  //   event.target.parentNode.style.display = "none";
  // };

  // const titleHandler = () => {
  //   setTitle(props.title);
  // };
  // const expenseHandler = () => {
  //   setExpense("100");
  // };
  return (<li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} />

      {/* <button onClick={deleteHandler}>Delete Item</button>
      <button onClick={titleHandler}>Change Title</button>
      <button onClick={expenseHandler}>Change Expense</button> */}
    </Card>
  </li>
    
  );
};

export default ExpenseItems;
