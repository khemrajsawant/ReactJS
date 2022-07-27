import ReactDom from "react-dom/client";
import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
