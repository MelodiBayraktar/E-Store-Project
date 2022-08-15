import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import CartState from "./Context/Cart/CartState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartState>
    <App />
  </CartState>
);
