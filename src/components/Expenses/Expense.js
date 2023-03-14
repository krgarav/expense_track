import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expense.css";
import expenses from "./Expenses";

const Expenses = () => {
  return (
    <div className="expenses">
      {expenses.map((expense) => {
        return <ExpenseItems {...expense} />;
      })}
    </div>
  );
};
export default Expenses;
