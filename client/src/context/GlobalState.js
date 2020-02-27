import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//Intial State

const initialState = {
  transactions: [],
  error: null,
  loading: true
};

export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getTransaction() {
    try {
      const res = await axios.get("/api/v1/transactions");
      dispatch({
        type: "GET",
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error
      });
    }
  }

  //Actions

  async function deleteAction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: "DELETE",
        payload: id
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error
      });
    }
  }

  async function addAction(transaction) {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/v1/transactions", transaction, config);
      dispatch({
        type: "ADD",
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransaction,
        deleteAction,
        addAction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
