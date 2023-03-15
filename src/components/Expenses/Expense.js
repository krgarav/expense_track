import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expense.css";
import expenses from "./Expenses";

const Expenses = (props) => {
  if (props.item != "") {
    expenses.push(props.item);
  }

  return (
    <div className="expenses">
      {expenses.map((expense) => {
        return <ExpenseItems {...expense} />; // rendering all expenses in array
      })}
    </div>
  );
};
export default Expenses;
