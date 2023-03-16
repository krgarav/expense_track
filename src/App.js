import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New_Expenses/NewExpenses";


const App = () => {

  const [newItem, setNewItem] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setNewItem((prevInput)=>{
      return [expense,...prevInput]
    });
   console.log(expense)
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense item={newItem} />
    </div>
  );
};

export default App;
