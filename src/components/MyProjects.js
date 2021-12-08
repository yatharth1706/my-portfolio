import React from "react";
import ProjectsConfig from "./ProjectsConfig";
import { Element } from "react-scroll";

function MyProjects() {
  const truncate = (str, len) => {
    if (str.length >= len) {
      return str.substr(0, len) + "...";
    } else {
      return str;
    }
  };

  return (
    <Element name="myProjects">
      <div className="px-6 py-10 md:px-20 mt-12" style={{ background: "#3F72DE" }}>
        <span className="text-white text-3xl">My Projects</span>
        <div className="flex flex-col space-y-8 py-10">
          {ProjectsConfig.map((config) => (
            <div className="h-auto lg:h-96 w-full bg-black text-white opacity-80 rounded flex flex-col lg:flex-row">
              <div className="w-full rounded">
                <img
                  src={config.previewImage}
                  className="w-full h-full object-cover rounded rounded-b-none"
                />
              </div>
              <div className="w-full h-6/6 flex flex-col p-6">
                <span className="mb-1 font-bold" style={{ fontSize: "20px" }}>
                  {config.title}
                </span>
                <div className="flex justify-between">
                  {config.downloads && (
                    <div className="mt-1">
                      <img src={config.downloads} />
                    </div>
                  )}
                </div>
                <div className="mt-2 mb-4">
                  <p className="text-xs md:text-sm lg:text-md">{config.description}</p>
                </div>
                {config.liveDemoLink ? (
                  <div className="flex justify-between mt-auto" style={{ color: "#3f72de" }}>
                    <a target="_blank" href={config.liveDemoLink} className="font-bold">
                      Live Demo
                    </a>
                    <a target="_blank" href={config.githubLink} className="font-bold">
                      Source Code
                    </a>
                  </div>
                ) : (
                  <div className="mt-auto">
                    <span className="text-sm">Still in development ...</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default MyProjects;
