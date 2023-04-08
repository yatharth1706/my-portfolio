import React from "react";

function Intro() {
  return (
    <div className="w-full flex md:w-3/6 flex-col font-rubik px-6 sm:px-20 md:pr-0 mt-10 md:mt-20  mb-10 mx-auto text-center md:text-left">
      <span className="text-md mb-1 opacity-80">Welcome! I am</span>
      <span style={{ fontWeight: "400" }} className="text-3xl mb-2">
        <span className="relative whitespace-nowrap" style={{ color: "#0177FB", fontSize: "40px" }}>
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-8 left-0 h-[0.58em] w-full fill-blue-200"
            preserveAspectRatio="none"
          >
            <path
              fill="#3f72de87"
              d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
            ></path>
          </svg>
          <span className="relative">Yatharth Verma</span>
        </span>
        <span></span>
      </span>
      <span
        style={{ fontSize: "15px", fontWeight: "200", marginTop: "8px" }}
        className="opacity-90"
      >
        I love web designing and I elevate user experiences using my telekenesis power
      </span>
      <a
        href="https://drive.google.com/file/d/1T4Cpkb6D1D9_Ni9TzM6dS5eavPM5aGtL/view?usp=sharing"
        target="_blank"
      >
        <button
          className="text-white mt-4 w-60  mx-auto md:mx-0"
          style={{ color: "white", background: "#0177FB", borderRadius: "10px", padding: "12px" }}
        >
          Download Resume
        </button>
      </a>

      <div className="flex space-x-8 mt-6 mb-8 mx-auto md:mx-0">
        <a href="http://github.com/yatharth1706" target="_blank">
          <i
            className="fab fa-github opacity-80"
            style={{ fontSize: "24px", color: "#0177FB" }}
          ></i>
        </a>
        <a href="https://www.linkedin.com/in/yatharth-verma-938924169/" target="_blank">
          <i
            className="fab fa-linkedin-in opacity-80"
            style={{ fontSize: "24px", color: "#0177FB" }}
          ></i>
        </a>
        <a href="https://twitter.com/yatharth170699" target="_blank">
          <i
            className="fab fa-twitter opacity-80"
            style={{ fontSize: "24px", color: "#0177FB" }}
          ></i>
        </a>
        <a href="https://www.instagram.com/yatharth_illustrator/?hl=en" target="_blank">
          <i
            className="fab fa-instagram opacity-80"
            style={{ fontSize: "24px", color: "#0177FB" }}
          ></i>
        </a>
      </div>
    </div>
  );
}

export default Intro;
