import ExpenseItems from "./components/ExpenseItems";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      location: "Dmart",
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49,location: "Ezone", date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      location: "Bajaj",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      location: "Ikea",
      date: new Date(2021, 5, 12),
    },
  ];
  const list = [];
  for (let i = 0; i < 4; i++) {
    list.push(
      <ExpenseItems
        title={expenses[i].title}
        amount={expenses[i].amount}
        location={expenses[i].location}
        date={expenses[i].date}
      ></ExpenseItems>
    );
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      {list}
    </div>
  );
}

export default App;
