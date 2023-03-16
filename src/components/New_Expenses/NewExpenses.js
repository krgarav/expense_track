import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setOnEmpty(button);
  };
  const clickHandler = () => {
    setOnEmpty(expenseForm);
  };

  const button = <button onClick={clickHandler}>Add New Expense</button>;

  const expenseForm = (
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  );
  const [onEmpty, setOnEmpty] = useState(button);

  return <div className="new-expense">{onEmpty}</div>;
};

export default NewExpense;
