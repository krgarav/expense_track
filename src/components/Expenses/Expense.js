import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

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
      {filteredExpenses.length==1&&<p style={{color:'white', textAlign:'center'}}>Only single Expense here. Please add more...</p>}
      {filteredExpenses.length==0?<p style={{color:'white', textAlign:'center'}}>There is no item</p>:
      filteredExpenses.map((expenseData) => {
        return (
          <ExpenseItems
            key={expenseData.id}
            title={expenseData.title}
            amount={expenseData.amount}
            date={expenseData.date}
          />
        );
      })
      }
    </div>
  );
};
export default Expenses;
