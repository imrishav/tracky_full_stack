import React, { useContext } from "react";
import { TransactionList } from "./TransactionList";
import { GlobalContext } from "../context/GlobalState";

export const Transactions = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(trans => {
          return <TransactionList key={trans.id} transactions={trans} />;
        })}
      </ul>
    </>
  );
};
