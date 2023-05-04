import React from "react";
import { Link } from "react-scroll";

function Intro() {
  return (
    <div className="py-5 sm:mb-32 max-w-xl px-2 sm:px-0 flex flex-col justify-center items-center text-gray-300 pt-36 sm:pt-44">
      <h1 className="relative font-semibold text-center md:text-5xl sm:text-3xl text-xl">
        Hi! I am <span style={{ color: "#5A69DE" }}>Yatharth Verma</span>
      </h1>
      <span className="mt-4 font-normal text-center text-sm">
        Creative Full Stack Web Developer with 2+ years of experience who love open source and love
        building cool stuff
      </span>
      <div className="flex space-x-6">
        <a
          href="https://drive.google.com/file/d/13O5FJH3-wlhMHP_23jjtcURofQ-kJA0p/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="text-gray-200 mt-4 flex  mx-auto md:mx-0 transition-transform duration-300 transform hover:scale-105 text-sm w-32 sm:w-40"
            style={{
              background: "linear-gradient(89deg, #9a5cff 0%, hsl(228, 64%, 58%) 100%)",
              borderRadius: "40px",
              padding: "8px",
              justifyContent: "center",
            }}
          >
            View Resume
          </button>
        </a>
        <Link to="contactMe" smooth={true}>
          <button
            className="bg-gray-300 text-gray-900 mt-4 flex  mx-auto md:mx-0 transition-transform duration-300 transform hover:scale-105 w-32 sm:w-40"
            style={{
              borderRadius: "40px",
              padding: "8px",
              justifyContent: "center",
            }}
          >
            Contact Me
          </button>
        </Link>
      </div>

      <div className="flex space-x-8 mt-6 mb-8 mx-auto md:mx-0">
        <a href="http://github.com/yatharth1706" target="_blank" rel="noreferrer">
          <i className="fab fa-github  text-gray-300" style={{ fontSize: "24px" }}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yatharth-verma-938924169/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in text-gray-300" style={{ fontSize: "24px" }}></i>
        </a>
        <a href="https://twitter.com/yatharth170699" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter text-gray-300" style={{ fontSize: "24px" }}></i>
        </a>
      </div>
    </div>
  );
}

export default Intro;
