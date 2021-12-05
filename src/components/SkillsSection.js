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
        <div className="py-10 px-6 md:px-20 flex flex-col w-full text-center">
          <span className="text-white" style={{ fontSize: "35px" }}>
            My <span style={{ fontWeight: "700" }}>Skills</span>
          </span>

          <div className="w-5/6 mx-auto pb-10 h-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <ul className="border w-full p-4">
                <li className="text-white text-xl mb-4">Frontend</li>
                <li className="space-x-3">
                  <i className="fab fa-html5 text-white" style={{ fontSize: "40px" }}></i>
                  <i className="fab fa-css3-alt text-white" style={{ fontSize: "40px" }}></i>
                  <i className="fab fa-js-square text-white" style={{ fontSize: "40px" }}></i>
                  <i className="fab fa-react text-white" style={{ fontSize: "40px" }}></i>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <ul className="border w-full p-4">
                <li className="text-white text-xl mb-4">Backend</li>

                <li className="space-x-3">
                  <i className="fab fa-aws text-white" style={{ fontSize: "40px" }}></i>
                  <i className="fab fa-python text-white" style={{ fontSize: "40px" }}></i>
                  <i className="fab fa-node text-white" style={{ fontSize: "40px" }}></i>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <ul className="border w-full p-4">
                <li className="text-white text-xl mb-4">Databases</li>

                <li className="flex justify-center space-x-3">
                  <img src={MongodbIcon} alt="Mongodb" style={{ height: "40px", width: "20px" }} />
                  <img src={MySQLIcon} alt="MySQL" style={{ height: "40px", width: "60px" }} />
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <ul className="border w-full p-4">
                <li className="text-white text-xl mb-4">Tools</li>

                <li className="flex justify-center space-x-3">
                  <i className="fab fa-github text-white" style={{ fontSize: "38px" }}></i>
                  <img src={AdobeXDIcon} alt="MySQL" style={{ height: "38px", width: "40px" }} />

                  <img
                    src={IllustratorIcon}
                    alt="MySQL"
                    style={{ height: "38px", width: "38px" }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default SkillsSection;
