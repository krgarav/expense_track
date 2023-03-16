import React, { useState } from "react";
import ExpenseList from "./ExpensesList";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear)
  };
  const filteredExpenses = props.item.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  

  return (<div>
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList item={filteredExpenses}/>
    </Card>
    </div>
  );
};
export default Expenses;
