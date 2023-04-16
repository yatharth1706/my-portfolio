import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { inject } from "@vercel/analytics";
import { Helmet } from "react-helmet";

inject();
ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta property="og:title" content="My Portfolio" />
      <meta
        property="og:description"
        content="Checkout my portfolio. Built using ReactJS and Tailwind CSS"
      />
      <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/32243289/232308492-450a80af-b9b8-4636-87d9-f1c4847ed721.jpg"
      />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
