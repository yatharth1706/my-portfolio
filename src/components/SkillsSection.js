import React from "react";
import { ReactComponent as MongodbIcon } from "../images/mongodbIcon.svg";
import { ReactComponent as MySqlIcon } from "../images/mysql1.svg";
import { ReactComponent as AdobeXDIcon } from "../images/adobexdIcon.svg";
import { ReactComponent as FigmaIcon } from "../images/figmaIcon.svg";
import { Element } from "react-scroll";

function SkillsSection() {
  return (
    <Element name="skills">
      <div id="skills" className="flex w-full h-auto">
        <div className="py-10  flex flex-col w-full text-center">
          <span className="text-white text-2xl font-semibold">
            My <span style={{ fontWeight: "700" }}>Skills</span>
          </span>

          <div className="w-full pb-10 h-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
            <div className="flex justify-center bg-blue-500 rounded-xl text-white">
              <ul className="border w-full p-4 rounded-xl border-blue-500">
                <li className="text-white text-md mb-5">Frontend</li>
                <li className="flex justify-center items-center flex-wrap gap-3 md:gap-5 ">
                  <i className="fab fa-html5 text-white" style={{ fontSize: "26px" }}></i>
                  <i className="fab fa-css3-alt text-white" style={{ fontSize: "26px" }}></i>
                  <i className="fab fa-js-square text-white" style={{ fontSize: "26px" }}></i>
                  <i className="fab fa-react text-white" style={{ fontSize: "26px" }}></i>
                </li>
              </ul>
            </div>
            <div className="flex justify-center bg-blue-500 rounded-xl">
              <ul className="border w-full p-4 rounded-lg border-blue-500">
                <li className="text-white text-md mb-5">Backend</li>

                <li className="gap-3 md:gap-5  flex justify-center items-center flex-wrap">
                  <i className="fab fa-aws text-white" style={{ fontSize: "26px" }}></i>
                  <i className="fab fa-python text-white" style={{ fontSize: "26px" }}></i>
                  <i className="fab fa-node text-white" style={{ fontSize: "26px" }}></i>
                </li>
              </ul>
            </div>
            <div className="flex justify-center bg-blue-500 rounded-xl">
              <ul className="border w-full p-4 rounded-xl border-blue-500">
                <li className="text-white text-md mb-5">Databases</li>

                <li className="flex justify-center gap-3 md:gap-5  items-center flex-wrap">
                  <MySqlIcon className="" style={{ width: "26px" }} />
                  <MongodbIcon className="" style={{ width: "26px" }} />
                </li>
              </ul>
            </div>

            <div className="flex justify-center bg-blue-500 rounded-xl">
              <ul className="border w-full p-4 rounded-xl border-blue-500">
                <li className="text-white text-md mb-3">Tools</li>

                <li className="gap-3 md:gap-5  flex justify-center items-center flex-wrap">
                  <i className="fab fa-github text-white" style={{ fontSize: "22px" }}></i>
                  <AdobeXDIcon className="fill-current text-white" style={{ width: "22px" }} />
                  <FigmaIcon className="text-white" style={{ width: "22px" }} />
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
