import React from "react";
import MongodbIcon from "../images/MongoDBIcon.png";
import MySQLIcon from "../images/MySQLIcon.png";
import IllustratorIcon from "../images/IllustratorIcon.png";
import AdobeXDIcon from "../images/AdobeXDIcon.png";
import { Element } from "react-scroll";

function SkillsSection() {
  return (
    <Element name="skills">
      <div id="skills" className="flex w-full h-auto">
        <div className="py-10 px-6 md:px-20 flex flex-col w-full text-center">
          <span className="text-gray-800" style={{ fontSize: "35px" }}>
            My <span style={{ fontWeight: "700" }}>Skills</span>
          </span>

          <div className="w-full mx-auto pb-10 h-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex justify-center">
              <ul className="border w-full p-4 rounded-xl">
                <li className="text-gray-800 text-xl mb-4">Frontend</li>
                <li className="space-x-3">
                  <i className="fab fa-html5 text-gray-600" style={{ fontSize: "40px" }}></i>
                  <i className="fab fa-css3-alt text-gray-600" style={{ fontSize: "40px" }}></i>
                  <i className="fab fa-js-square text-gray-600" style={{ fontSize: "40px" }}></i>
                  <i className="fab fa-react text-gray-600" style={{ fontSize: "40px" }}></i>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <ul className="border w-full p-4">
                <li className="text-gray text-xl mb-4">Backend</li>

                <li className="space-x-3">
                  <i className="fab fa-aws text-gray-600" style={{ fontSize: "40px" }}></i>
                  <i className="fab fa-python text-gray-600" style={{ fontSize: "40px" }}></i>
                  <i className="fab fa-node text-gray-600" style={{ fontSize: "40px" }}></i>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <ul className="border w-full p-4">
                <li className="text-gray text-xl mb-4">Databases</li>

                <li className="flex justify-center space-x-3">
                  <span className="text-gray-600 font-normal">MySQL, MongoDB</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <ul className="border w-full p-4">
                <li className="text-gray text-xl mb-4">Tools</li>

                <li className="flex justify-center space-x-3 items-center">
                  <i className="fab fa-github text-gray-600" style={{ fontSize: "38px" }}></i>
                  <span className="text-gray-600 font-normal">Figma, AdobeXD</span>
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
