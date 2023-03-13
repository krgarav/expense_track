import React from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/New_Expenses/NewExpenses";

const App = () => {
  return (
    <div>
      <NewExpense/>
      <Expense />
    </div>
  );
};

export default App;
