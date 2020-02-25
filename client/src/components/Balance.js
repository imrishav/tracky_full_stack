import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map(tranaction => tranaction.amount);

  const totalAmount = amount
    .reduce((acc, curr) => {
      return (acc += curr);
    }, 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${totalAmount}</h1>
    </>
  );
};
