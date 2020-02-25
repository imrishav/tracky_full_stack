import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransactions = () => {
  const [task, setTask] = useState("");
  const [amount, setAmount] = useState(0);
  const { addAction } = useContext(GlobalContext);

  const onsubmit = e => {
    console.log("called");
    e.preventDefault();

    const newTrans = {
      id: Math.floor(Math.random() * 100000),
      text: task,
      amount: amount * 1
    };

    addAction(newTrans);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            onChange={e => setTask(e.target.value)}
            value={task}
            type="text"
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            onChange={e => setAmount(e.target.value)}
            value={amount}
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
