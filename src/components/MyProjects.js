import React from "react";
import HuluClone from "../images/HuluClone.PNG";
import CPEditor from "../images/CPEditor.PNG";
import { Element } from "react-scroll";

function MyProjects() {
  return (
    <Element name="myProjects">
      <div className="px-10 py-10 md:px-20 mt-12" style={{ background: "#3F72DE" }}>
        <span className="text-white text-3xl">My Projects</span>
        <div className="w-full h-auto flex flex-col mt-8 justify-center">
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-3/6 flex flex-col bg-white p-6 rounded">
              <span className="text-2xl font-semibold">Hulu Clone 2.0</span>
              <p className="mt-3 text-sm">
                The main purpose of this project was to learn and brush up NextJS. In this project,
                I also learnt and used the Tailwind CSS. Its a great utility post css tool that
                helps write easy css utility classes. It was great fun to build this project.
              </p>
              <div className="flex space-x-3 mt-4">
                <button className="px-2 py-1 bg-custom-light-blue text-white rounded-sm">
                  Live Demo
                </button>
                <i className="fab fa-github text-3xl" />
              </div>
            </div>
            <div className="w-full -mt-4 md:mt-0 md:w-4/6 md:-ml-3 z-10 flex flex-col justify-center items-center">
              <div className="w-full h-auto p-3">
                <img src={HuluClone} alt="Hulu Clone" className="rounded" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row mt-16">
            <div className="w-full md:w-3/6 flex flex-col bg-white p-6 rounded">
              <span className="text-2xl font-semibold">CP Editor Web</span>
              <p className="mt-3 text-sm">
                In this project, I did the frontend part. I made first design on Adobe XD. And then
                I built this from scratch using ReactJS, TailwindCSS and needed NPM Modules. It was
                fun to work on this project. This website's main purpose was to allow user to write
                code in any language and test it with different test cases and see the output.
              </p>
              <div className="flex space-x-3 mt-4">
                <button className="px-2 py-1 bg-custom-light-blue text-white rounded-sm">
                  Live Demo
                </button>
                <i className="fab fa-github text-3xl" />
              </div>
            </div>
            <div className="w-full -mt-4 md:mt-0 md:w-4/6 md:-ml-3 z-10 flex flex-col justify-center items-center">
              <div className="w-full h-auto p-3">
                <img src={CPEditor} alt="Hulu Clone" className="rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default MyProjects;
