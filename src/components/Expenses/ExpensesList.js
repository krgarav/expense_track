import React from "react";
import ExpenseItem from "./ExpenseItems";
import "./ExpensesList.css";

const ExpenseList = (props) => {
    if (props.item.length == 0) {
      return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
    }

    if (props.item.length == 1) {
      return (<>
        <h2 className="expenses-list__fallback">
          Only single Expense here. Please add more...
        </h2>
         <ul className="expenses-list">
         {props.item.map((expenseData) => {
          return <ExpenseItem
             key={expenseData.id}
             title={expenseData.title}
             amount={expenseData.amount}
             date={expenseData.date}
           />;
         })}
       </ul>
       </>
      );
    }
  console.log(props.item);
  return (
    <ul className="expenses-list">
      {props.item.map((expenseData) => {
       return <ExpenseItem
          key={expenseData.id}
          title={expenseData.title}
          amount={expenseData.amount}
          date={expenseData.date}
        />
    })}
   </ul>
  );
};

export default ExpenseList;
