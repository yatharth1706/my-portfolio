import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// eslint-disable-next-line import/no-unresolved
import { Analytics } from "@vercel/analytics/dist/react";
// import { Analytics } from "@vercel/analytics/dist/react";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Analytics mode="production" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
