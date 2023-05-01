import React from "react";
import HTMLIcon from "./../images/htmlIcon.png";
import CSSIcon from "../images/cssIcon.png";
import JsIcon from "../images/jsicon.webp";
import ReactIcon from "../images/reactIcon.png";
import NodejsIcon from "../images/nodejsIcon.webp";
import PythonIcon from "../images/pythonIcon.webp";
import AwsIcon from "../images/awsIcon.png";
import GithubIcon from "../images/githubIcon.png";
import FramerIcon from "../images/framerIcon.png";
import FigmaIcon from "../images/figmaIcon1.png";
import { Element } from "react-scroll";

function SkillsSection() {
  return (
    <Element name="skills">
      <div id="skills" className="flex w-full h-auto mb-6 sm:mb-44">
        <div className="py-20  flex flex-col w-full text-center">
          <span className="text-white text-2xl">
            My{" "}
            <span style={{ fontWeight: "700" }} className="font-semibold">
              Skills
            </span>
          </span>

          <div
            className="w-full flex justify-center items-center flex-wrap gap-6 p-8 mt-10 rounded"
            style={{ background: "linear-gradient(99deg, #171b2c 0%, rgba(18, 19, 24, 0) 100%)" }}
          >
            <img src={HTMLIcon} width="60" alt="Icons" />
            <img src={CSSIcon} width="60" alt="Icons" />
            <img src={JsIcon} width="60" alt="Icons" />
            <img src={ReactIcon} width="60" alt="Icons" />
            <img src={NodejsIcon} width="60" alt="Icons" />
            <img src={PythonIcon} width="60" alt="Icons" />
            <img src={AwsIcon} width="60" alt="Icons" />
            <img src={GithubIcon} width="60" alt="Icons" />
            <img src={FramerIcon} width="50" alt="Icons" />
            <img src={FigmaIcon} width="41" alt="Icons" />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default SkillsSection;
