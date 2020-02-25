import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = ({ transactions }) => {
  const { deleteAction } = useContext(GlobalContext);
  //   console.log(props);
  //   const { id, text, amount } = props;
  return (
    <div>
      <li
        key={transactions.id}
        className={Math.sign(transactions.amount) === -1 ? "minus" : "plus"}
      >
        {transactions.text}
        <span>
          {Math.sign(transactions.amount) === -1
            ? `- $${Math.abs(transactions.amount)}`
            : `$${Math.abs(transactions.amount)}`}
        </span>
        <button
          onClick={() => deleteAction(transactions.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
};
