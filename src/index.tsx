import React from "react";
import ReactDOM from "react-dom/client";
import "./core/index.css";
import App from "./core";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
