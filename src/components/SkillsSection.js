import React from "react";
import SkillsDiv from "../images/SkillsDiv.png";

function SkillsSection() {
  return (
    <div className="flex w-full h-auto relative">
      <img src={SkillsDiv} alt="SkillsDivSVG" className="w-full h-full object-cover" />
      <div className="absolute pt-10 px-20 flex flex-col w-full">
        <span className="text-white" style={{ fontSize: "35px" }}>
          My <span style={{ fontWeight: "700" }}>Skills</span>
        </span>

        <div className="w-full h-auto mt-10 grid grid-cols-2 gap-8">
          <div
            className="flex flex-col bg-white shadow-lg rounded p-14"
            style={{ width: "100%", height: "200px" }}
          >
            <h2 className="mx-auto">Frontend</h2>
            <div className="flex w-full h-auto space-x-4 mt-4 justify-center">
              <i className="fab fa-html5 text-custom-dark-blue" style={{ fontSize: "40px" }}></i>
              <i className="fab fa-css3-alt text-custom-dark-blue" style={{ fontSize: "40px" }}></i>
              <i
                className="fab fa-js-square text-custom-dark-blue"
                style={{ fontSize: "40px" }}
              ></i>
              <i className="fab fa-react text-custom-dark-blue" style={{ fontSize: "40px" }}></i>
            </div>
          </div>
          <div
            className="flex flex-col bg-white shadow-lg rounded p-10"
            style={{ width: "100%", height: "200px" }}
          >
            <h2 className="mx-auto">Backend</h2>
          </div>
          <div
            className="flex flex-col bg-white shadow-lg rounded p-10"
            style={{ width: "100%", height: "200px" }}
          >
            <h2 className="mx-auto">Databases</h2>
          </div>
          <div
            className="flex flex-col bg-white shadow-lg rounded p-10"
            style={{ width: "100%", height: "200px" }}
          >
            <h2 className="mx-auto">Tools</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
