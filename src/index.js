import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import { BudgetProvider } from "./context/BudgetContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BudgetProvider>
      <App />
    </BudgetProvider>
  </React.StrictMode>
);
