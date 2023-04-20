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
      <meta name="title" content="Yatharth Verma Portfolio - Software Engineer" />
      <meta
        name="description"
        content="Yatharth Verma's Personal Portfolio Website. Made with ReactJS and Tailwind CSS."
      />
      <meta name="author" content="Yatharth Verma" />
      <meta
        name="keywords"
        content="yatharth portfolio, yatharth verma, yatharth1706, yatharth's portfolio, yatharth verma"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#E95420" />

      {/* Search Engine  */}
      <meta name="image" content="/preview1.png" />

      {/* Schema.org for Google  */}
      <meta itemProp="name" content="Yatharth Verma Portfolio - Software Engineer" />
      <meta
        itemProp="description"
        content="Yatharth Verma's Portfolio. Made with ReactJS and Tailwind CSS."
      />
      <meta itemProp="image" content="/preview1.png" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Yatharth Verma Portfolio - Software Engineer" />
      <meta
        name="twitter:description"
        content="Yatharth Verma's Portfolio. Made with ReactJS and Tailwind CSS."
      />
      <meta name="twitter:site" content="yatharth170699" />
      <meta name="twitter:creator" content="yatharth170699" />
      <meta name="twitter:image:src" content="/preview1.png" />

      {/* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta name="og:title" content="Yatharth Verma Portfolio - Software Engineer" />
      <meta
        name="og:description"
        content="Yatharth Verma's Portfolio. Made with ReactJS and Tailwind CSS."
      />
      <meta name="og:image" content="/preview1.png" />
      <meta name="og:url" content="https://yatharth-portfolio.vercel.app/" />
      <meta name="og:site_name" content="Yatharth Verma Personal Portfolio" />
      <meta name="og:locale" content="en_IN" />
      <meta name="og:type" content="website" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
