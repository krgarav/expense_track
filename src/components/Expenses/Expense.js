import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear)
  };
  const filteredExpenses = props.item.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expenseData) => {
        return (
          <ExpenseItems
            key={expenseData.id}
            title={expenseData.title}
            amount={expenseData.amount}
            date={expenseData.date}
          />
        );
      })}
    </div>
  );
};
export default Expenses;
