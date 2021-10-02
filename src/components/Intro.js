import React from "react";

function Intro() {
  return (
    <div className="w-full flex md:w-3/6 flex-col font-rubik pl-20 pr-20 md:pr-0 md:mt-20 mt-16 mb-10 mx-auto text-center md:text-left">
      <span className="text-xl mb-3">Hy! I Am</span>
      <span style={{ fontWeight: "500" }} className="text-4xl mb-3">
        Yatharth Verma
      </span>
      <span style={{ fontSize: "18px", fontWeight: "200" }}>
        Full stack web developer and a learner. Believes in hard work
      </span>
      <a
        href="https://firebasestorage.googleapis.com/v0/b/devblogs-b8b03.appspot.com/o/YatharthUpdatedResume%20(1).pdf?alt=media&token=6bf1e38e-52e9-4734-b6ef-44bf99f15d72"
        target="_blank"
      >
        <button
          className="text-white	bg-custom-light-blue p-2 rounded-3xl mt-6 w-full sm:w-60 mx-auto md:mx-0"
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
