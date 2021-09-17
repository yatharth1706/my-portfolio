import React from "react";

function Intro() {
  return (
    <div className="flex w-3/6 flex-col font-rubik pl-20 mt-20">
      <span style={{ fontSize: "22px" }}>Hy! I Am</span>
      <span style={{ fontSize: "50px", fontWeight: "500" }}>Yatharth Verma</span>
      <span style={{ fontSize: "18px", fontWeight: "200" }}>
        Full stack web developer and a learner. Believes in hard work
      </span>
      <button
        className="text-white	bg-custom-light-blue p-2 rounded-3xl mt-6 w-60"
        style={{ color: "white" }}
      >
        Download Resume
      </button>

      <div className="flex space-x-8 mt-8">
        <i className="fab fa-github text-custom-light-blue" style={{ fontSize: "32px" }}></i>
        <i className="fab fa-linkedin-in text-custom-light-blue" style={{ fontSize: "32px" }}></i>
        <i className="fab fa-twitter text-custom-light-blue" style={{ fontSize: "32px" }}></i>
        <i className="fab fa-instagram text-custom-light-blue" style={{ fontSize: "32px" }}></i>
      </div>
    </div>
  );
}

export default Intro;
