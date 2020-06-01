import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DrinkProvider } from "./context/drink-provider";

ReactDOM.render(
  <React.StrictMode>
    <DrinkProvider>
      <App />
    </DrinkProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
