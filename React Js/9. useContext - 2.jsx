// Here we're using useContext as a component and we'll wrap the components inside it to access the context value.
import { createContext, useState } from "react";

export const TransactionsContext = createContext(); // Create more for using multiple context - Like below comments
// export const ResultContext = createContext();

export const ContextProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  // const [result, setResult] = useState([false]);

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
        {/* <ResultContext.Provider value={{ result, setResult }}> */}
        {children}
        {/* </ResultContext.Provider> */}
    </TransactionsContext.Provider>
  );
};