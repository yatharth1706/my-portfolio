import React from "react";
import HuluClone from "../images/HuluClone.PNG";
import CPEditor from "../images/CPEditor.PNG";
import Emojigit from "../images/Emojigit.PNG";

import { Element } from "react-scroll";

function MyProjects() {
  return (
    <Element name="myProjects">
      <div className="px-10 py-10 md:px-20 mt-12" style={{ background: "#3F72DE" }}>
        <span className="text-white text-3xl">My Projects</span>
        <div className="w-full h-auto flex flex-col mt-0 justify-center">
          <div className="w-full flex flex-col md:flex-row mt-12">
            <div className="w-full md:w-3/6 flex flex-col bg-white p-8 rounded">
              <span className="text-2xl font-semibold">Emoji Git CLI Tool</span>
              <div className="mt-2 mb-1">
                <img
                  src="https://img.shields.io/npm/dt/emojigit.svg?style=flat-square)](https://www.npmjs.com/package/emojigit"
                  alt="downloads"
                />
              </div>
              <p className="mt-3 text-sm">
                In this project, I built Interactive CLI Tool for writing emojis in commit messages.
                It gives user some list of emojis in terminal before making commit. From that list
                user can select emojis according to the commit task he has done. After choosing that
                user can right commit message along with that emoji.
              </p>

              <div className="flex space-x-3 mt-4">
                <a
                  className="px-2 py-1 bg-custom-light-blue text-white rounded-sm"
                  href="https://www.npmjs.com/package/emojigit"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a href="https://github.com/yatharth1706/emojigit" target="_blank">
                  <i className="fab fa-github text-3xl" />
                </a>
              </div>
              <div className="mt-4">
                <span className="text font-semibold">Similar Project: IG (Interactive Git)</span>
                <div className="mt-2 mb-1">
                  <img
                    src="https://img.shields.io/npm/dt/igm.svg?style=flat-square)](https://www.npmjs.com/package/igm"
                    alt="downloads"
                  />
                </div>
                <div className="flex space-x-3 mt-4">
                  <a
                    className="px-2 py-1 bg-custom-light-blue text-white rounded-sm"
                    href="https://www.npmjs.com/package/emojigit"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                  <a href="https://github.com/yatharth1706/ig-InteractiveGit" target="_blank">
                    <i className="fab fa-github text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full -mt-4 md:mt-0 md:w-4/6 md:-ml-3 z-10 flex flex-col justify-center items-center">
              <div className="w-full h-auto p-3">
                <img src={Emojigit} alt="Hulu Clone" className="rounded" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row mt-16">
            <div className="w-full md:w-3/6 flex flex-col bg-white p-8 rounded">
              <span className="text-2xl font-semibold">Hulu Clone 2.0</span>
              <p className="mt-3 text-sm">
                The main purpose of this project was to learn and brush up NextJS. In this project,
                I also learnt and used the Tailwind CSS. Its a great utility post css tool that
                helps write easy css utility classes. It was great fun to build this project.
              </p>
              <div className="flex space-x-3 mt-3">
                <a
                  className="px-2 py-1 bg-custom-light-blue text-white rounded-sm"
                  href="https://hulu-clone-iota.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a href="https://github.com/yatharth1706/hulu-clone" target="_blank">
                  <i className="fab fa-github text-3xl" />
                </a>
              </div>
            </div>
            <div className="w-full -mt-4 md:mt-0 md:w-4/6 md:-ml-3 z-10 flex flex-col justify-center items-center">
              <div className="w-full h-auto p-3">
                <img src={HuluClone} alt="Hulu Clone" className="rounded" />
              </div>
            </div>
          </div>
          {/* <div className="w-full flex flex-col md:flex-row mt-16">
            <div className="w-full md:w-3/6 flex flex-col bg-white p-8 rounded">
              <span className="text-2xl font-semibold">Framer Motion Dashboard</span>
              <p className="mt-3 text-sm">
                This was a fun project. Main objective of this project was to learn something new. I
                learnt framer motion and how to use their apis and react component in react to add
                smooth animations. Using framer motion I built this basic dashboard having left side
                navigation and some graphs with animations
              </p>
              <p className="mt-4 text-sm font-semibold">Work in progress</p>
            </div>
            <div className="w-full -mt-4 md:mt-0 md:w-4/6 md:-ml-3 z-10 flex flex-col justify-center items-center">
              <div className="w-full h-auto p-3">
                <img
                  src={
                    "https://raw.githubusercontent.com/yatharth1706/framer-motion-dashboard/master/src/images/dashboardPreview.gif"
                  }
                  alt="Framer motion project"
                  className="rounded"
                />
              </div>
            </div>
          </div> */}
          <div className="w-full flex flex-col md:flex-row mt-16">
            <div className="w-full md:w-3/6 flex flex-col bg-white p-8 rounded">
              <span className="text-2xl font-semibold">CP Editor Web</span>
              <p className="mt-3 text-sm">
                In this project, I did the frontend part. I made first design on Adobe XD. And then
                I built this from scratch using ReactJS, TailwindCSS and needed NPM Modules. It was
                fun to work on this project. This website's main purpose was to allow user to write
                code in any language and test it with different test cases and see the output.
              </p>
              <p className="mt-4 text-sm font-semibold">Work in progress</p>
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
