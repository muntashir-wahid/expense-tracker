import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditeing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditeing(false);
  };

  const startEditingHandler = function () {
    setIsEditeing(true);
  };

  const stopEditingHandler = function () {
    setIsEditeing(false);
  };

  // let showForm = <button onClick={startEditingHandler}>Add Expense</button>;
  // if (isEditing) {
  //   showForm = ;
  // }

  // return <div className="new-expense">{showForm}</div>;

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
