import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/New_Expenses/NewExpenses";
import expenses from "./components/Expenses/Expenses";

const App = (props) => {
  const [newItem, setNewItem] = useState("");

  const addExpenseHandler = (expense) => {
    setNewItem(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense item={newItem} />
    </div>
  );
};

export default App;
