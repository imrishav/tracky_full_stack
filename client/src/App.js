import React from "react";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import {
  Header,
  Balance,
  IncomeExpense,
  Transactions,
  AddTransactions
} from "./components";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <Transactions />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
