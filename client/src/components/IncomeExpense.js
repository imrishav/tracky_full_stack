import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const expense = amounts
    .filter(amount => amount < 0)
    .reduce((acc, curr) => acc + curr, 0);

  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${Math.abs(income)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${Math.abs(expense)}
        </p>
      </div>
    </div>
  );
};
