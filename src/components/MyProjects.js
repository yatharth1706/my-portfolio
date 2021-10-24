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
      <div className="px-10 py-10 md:px-20 mt-12" style={{ background: "#3F72DE" }}>
        <span className="text-white text-3xl">My Projects</span>
        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 bmd:grid-cols-2 lg-grid-cols-3 sm:gap-4 md:gap-6 mt-6">
          {ProjectsConfig.map((config) => (
            <div className="w-full h-full bg-white rounded p-6 flex flex-col">
              <div className="flex justify-between">
                <span className="text-xl font-semibold mb-3">{config.title}</span>
                {config.downloads && (
                  <div className="mt-1">
                    <img src={config.downloads} />
                  </div>
                )}
              </div>
              <div className="mt-2 w-full" style={{ height: "250px" }}>
                <img src={config.previewImage} className="w-full h-full " />
              </div>
              <div className="mt-5">
                <p className="text-sm">{truncate(config.description, 120)}</p>
              </div>
              {config.liveDemoLink ? (
                <div className="mt-5 flex justify-between" style={{ color: "#3f72de" }}>
                  <a target="_blank" href={config.liveDemoLink}>
                    Live Demo
                  </a>
                  <a target="_blank" href={config.githubLink}>
                    Source Code
                  </a>
                </div>
              ) : (
                <div className="mt-5">
                  <span className="text-sm">Still in development ...</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default MyProjects;
