import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addingExpense, addingExpenseFunction] = useState(false);

  const handleDataOfExpenseForm = (expenseObject) => {
    const expenseData = {
      ...expenseObject,
      id: Math.random().toString(),
    };
    props.sendDataOnApp(expenseData);
  };

  const handleCancelButton = () => {
    addingExpenseFunction(false);
  };
  const handleAddExpenseButton = () => {
    addingExpenseFunction(true);
  };

  return (
    <div className="new-expense">
      {addingExpense ? (
        <ExpenseForm
          handleData={handleDataOfExpenseForm}
          cancelClicked={handleCancelButton}
        ></ExpenseForm>
      ) : (
        <button type="button" onClick={handleAddExpenseButton}>
          Add Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;

{
  /* here using this onSaveExpenseData(this name can be anything) we are gonna pass function from parrent to children component so that we can bring the expenses object from children to parents compoenent */
}

// here in return what we have done is first checked whether the addingExpense is true or false to display the UI respectively using condittional rendering.
