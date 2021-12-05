import React from "react";

function Intro() {
  return (
    <div className="w-full flex md:w-3/6 flex-col font-rubik px-6 sm:px-20 md:pr-0 mt-10 md:mt-20  mb-10 mx-auto text-center md:text-left">
      <span className="text-md mb-1 opacity-80">Welcome! I am</span>
      <span style={{ fontWeight: "400" }} className="text-3xl mb-2">
        Yatharth Verma
      </span>
      <span style={{ fontSize: "15px", fontWeight: "200" }} className="opacity-90">
        I love web designing and I elevate user experiences using my telekenesis power
      </span>
      <a
        href="https://firebasestorage.googleapis.com/v0/b/devblogs-b8b03.appspot.com/o/YatharthUpdatedResume%20(2).pdf?alt=media&token=d8dadca3-8066-4abc-b71a-eb3db28b5e9a"
        target="_blank"
      >
        <button
          className="text-white	bg-custom-light-blue p-2 rounded mt-4 w-60  mx-auto md:mx-0"
          style={{ color: "white" }}
        >
          Download Resume
        </button>
      </a>

      <div className="flex space-x-8 mt-8 mb-8 mx-auto md:mx-0">
        <a href="http://github.com/yatharth1706" target="_blank">
          <i className="fab fa-github text-custom-light-blue" style={{ fontSize: "32px" }}></i>
        </a>
        <a href="https://www.linkedin.com/in/yatharth-verma-938924169/" target="_blank">
          <i className="fab fa-linkedin-in text-custom-light-blue" style={{ fontSize: "32px" }}></i>
        </a>
        <a href="https://twitter.com/yatharth170699" target="_blank">
          <i className="fab fa-twitter text-custom-light-blue" style={{ fontSize: "32px" }}></i>
        </a>
        <a href="https://www.instagram.com/yatharth_illustrator/?hl=en" target="_blank">
          <i className="fab fa-instagram text-custom-light-blue" style={{ fontSize: "32px" }}></i>
        </a>
      </div>
    </div>
  );
}

export default Intro;
