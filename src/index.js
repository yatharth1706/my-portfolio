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
      {/* General tags */}
      <title>Yatharth's Portfolio</title>
      <meta name="url" content="https://yatharth-portfolio.vercel.app/" />
      <meta
        name="description"
        content="Checkout my porfolio. Its built using ReactJS and Tailwind CSS"
      />
      <meta name="image" content="/preview1.png" />
      <link rel="canonical" href="https://yatharth-portfolio.vercel.app/" />

      {/* OpenGraph tags */}
      <meta property="og:url" content="https://yatharth-portfolio.vercel.app/" />
      <meta property="og:title" content="Yatharth's Portfolio" />
      <meta
        property="og:description"
        content="Checkout my porfolio. Its built using ReactJS and Tailwind CSS"
      />
      <meta property="og:image" content="/preview1.png" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="yatharth170699" />
      <meta name="twitter:title" content="Yatharth's Portfolio" />
      <meta
        name="twitter:description"
        content="Checkout my porfolio. Its built using ReactJS and Tailwind CSS"
      />

      <meta name="twitter:image" content="/preview1.png" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
