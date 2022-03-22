import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const expensesList = props.filteredExpenses.map((expense) => {
    return (
      <div>
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </div>
    );
  });

  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found!</h2>;
  }

  return <ul className="expenses-list">{expensesList}</ul>;
};

export default ExpensesList;
