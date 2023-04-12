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
      <div className="px-6 py-10 md:px-20 mt-12">
        <span className="text-gray-800 text-3xl">My Projects</span>
        <div className="flex flex-col space-y-10 py-10">
          {ProjectsConfig.map((config) => (
            <div className="h-auto w-full bg-gray-800 text-white rounded flex flex-col lg:flex-row">
              <div
                className={"w-full rounded-sm md:p-10 p-3" + config?.backgroundColor}
              >
                <img
                  src={config.previewImage}
                  className="w-full h-full rounded object-contain"
                  alt="Preview"
                />
              </div>
              <div className="w-full h-6/6 flex flex-col p-8">
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
                  <p className="text-xs md:text-sm lg:text-md leading-6 md:leading-loose">
                    {config.description}
                  </p>
                </div>
                {config.liveDemoLink ? (
                  <div className="flex justify-between mt-auto" style={{ color: "#0177FB" }}>
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
