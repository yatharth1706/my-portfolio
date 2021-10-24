import React from "react";
import SkillsDiv from "../images/SkillsDiv.png";
import MongodbIcon from "../images/MongoDBIcon.png";
import MySQLIcon from "../images/MySQLIcon.png";
import PremiereProIcon from "../images/PremiereProIcon.png";
import IllustratorIcon from "../images/IllustratorIcon.png";
import PhotoshopIcon from "../images/PhotoshopIcon.png";
import AdobeXDIcon from "../images/AdobeXDIcon.png";
import { Element } from "react-scroll";

function SkillsSection() {
  return (
    <Element name="skills">
      <div id="skills" className="flex w-full h-auto" style={{ background: "#3F72DE" }}>
        <div className="py-10 px-10 md:px-20 flex flex-col w-full">
          <span className="text-white" style={{ fontSize: "35px" }}>
            My <span style={{ fontWeight: "700" }}>Skills</span>
          </span>

          <div className="w-full h-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="flex flex-col bg-white shadow-lg rounded p-14"
              style={{ width: "100%", height: "200px" }}
            >
              <h2 className="mx-auto text-xl">Frontend</h2>
              <div className="flex w-full h-auto space-x-4 mt-4 justify-center">
                <i className="fab fa-html5 text-custom-dark-blue" style={{ fontSize: "40px" }}></i>
                <i
                  className="fab fa-css3-alt text-custom-dark-blue"
                  style={{ fontSize: "40px" }}
                ></i>
                <i
                  className="fab fa-js-square text-custom-dark-blue"
                  style={{ fontSize: "40px" }}
                ></i>
                <i className="fab fa-react text-custom-dark-blue" style={{ fontSize: "40px" }}></i>
              </div>
            </div>
            <div
              className="flex flex-col bg-white shadow-lg rounded p-14"
              style={{ width: "100%", height: "200px" }}
            >
              <h2 className="mx-auto text-xl">Backend</h2>
              <div className="flex w-full h-auto space-x-4 mt-4 justify-center">
                <i className="fab fa-aws text-custom-dark-blue" style={{ fontSize: "40px" }}></i>
                <i className="fab fa-python text-custom-dark-blue" style={{ fontSize: "40px" }}></i>
                <i className="fab fa-node text-custom-dark-blue" style={{ fontSize: "40px" }}></i>
              </div>
            </div>
            <div
              className="flex flex-col bg-white shadow-lg rounded p-14"
              style={{ width: "100%", height: "200px" }}
            >
              <h2 className="mx-auto text-xl">Databases</h2>
              <div className="flex w-full h-auto space-x-4 mt-4 justify-center">
                <img src={MongodbIcon} alt="Mongodb" style={{ height: "40px", width: "20px" }} />
                <img src={MySQLIcon} alt="MySQL" style={{ height: "40px", width: "60px" }} />
              </div>
            </div>
            <div
              className="flex flex-col bg-white shadow-lg rounded p-14"
              style={{ width: "100%", height: "200px" }}
            >
              <h2 className="mx-auto text-xl">Tools</h2>
              <div className="flex w-full h-auto space-x-4 mt-4 justify-center">
                <i className="fab fa-github text-custom-dark-blue" style={{ fontSize: "38px" }}></i>
                <img src={AdobeXDIcon} alt="MySQL" style={{ height: "38px", width: "40px" }} />

                <img src={IllustratorIcon} alt="MySQL" style={{ height: "38px", width: "38px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default SkillsSection;
