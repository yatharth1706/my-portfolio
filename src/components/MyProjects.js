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
        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2  sm:gap-4 md:gap-6 mt-6 rounded">
          {ProjectsConfig.map((config) => (
            <div className="w-full h-full bg-black text-white opacity-80 rounded flex flex-col">
              <div className="w-full rounded" style={{ height: "60%" }}>
                <img
                  src={config.previewImage}
                  className="w-full h-full object-cover rounded rounded-b-none"
                />
              </div>
              <div style={{ height: "40%" }} className="w-full">
                <div className="px-4 py-4 flex flex-col w-full h-full">
                  <span className="mb-1" style={{ fontSize: "20px" }}>
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
                    <p style={{ fontSize: "12px" }}>{truncate(config.description, 120)}</p>
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
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default MyProjects;
