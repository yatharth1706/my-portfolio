import React from "react";

function Intro() {
  return (
    <div className="w-full flex md:w-3/6 flex-col font-rubik pl-20 pr-20 md:pr-0 md:mt-20 mt-16 mb-10 mx-auto text-center md:text-left">
      <span className = "text-xl mb-3">Hy! I Am</span>
      <span style={{ fontWeight: "500" }} className = "text-4xl mb-3">Yatharth Verma</span>
      <span style={{ fontSize: "18px", fontWeight: "200" }}>
        Full stack web developer and a learner. Believes in hard work
      </span>
      <button
        className="text-white	bg-custom-light-blue p-2 rounded-3xl mt-6 w-60 mx-auto md:mx-0"
        style={{ color: "white" }}
      >
        Download Resume
      </button>

      <div className="flex space-x-8 mt-8 mb-8 mx-auto md:mx-0">
        <i className="fab fa-github text-custom-light-blue" style={{ fontSize: "32px" }}></i>
        <i className="fab fa-linkedin-in text-custom-light-blue" style={{ fontSize: "32px" }}></i>
        <i className="fab fa-twitter text-custom-light-blue" style={{ fontSize: "32px" }}></i>
        <i className="fab fa-instagram text-custom-light-blue" style={{ fontSize: "32px" }}></i>
      </div>
    </div>
  );
}

export default Intro;
