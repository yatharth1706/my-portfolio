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
      {/* <!-- Primary Meta Tags --> */}
      <title>Yatharth's Portfolio</title>
      <meta name="title" content="Yatharth's Portfolio" />
      <meta name="description" content="Web site created using create-react-app" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yatharth-portfolio.vercel.app/" />
      <meta property="og:title" content="Yatharth's Portfolio" />
      <meta property="og:description" content="Web site created using create-react-app" />
      <meta property="og:image" content="/preview1.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://yatharth-portfolio.vercel.app/" />
      <meta property="twitter:title" content="Yatharth's Portfolio" />
      <meta property="twitter:description" content="Web site created using create-react-app" />
      <meta property="twitter:image" content="/preview1.png" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
