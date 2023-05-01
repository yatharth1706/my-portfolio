import React from "react";

import { Element } from "react-scroll";
import LeadSquaredLogo from "./../images/LeadSquaredLogo.png";

function Experience() {
  return (
    <Element name="experience">
      <div className="text-gray-300 w-full py-20  sm:mb-44">
        <span className="flex text-2xl justify-center md:justify-left">Experience</span>
        <div className="flex flex-col sm:flex-row sm:space-x-8 mt-6 p-6">
          <div className="w-10">
            <img className="w-8 sm:w-12" src={LeadSquaredLogo} alt="LeadSquaredLogo" />
          </div>
          <div className="flex flex-1 flex-col space-y-2 border-blue-400 border-l-0 sm:border-l-2  sm:px-6 py-6 sm:py-0">
            <h1>Software Development Engineer</h1>
            <span className="text-sm text-gray-400">June, 2021 - Present</span>
            <div className="flex flex-col leading-relaxed">
              <span>- Part of DevOps Portal team</span>
              <span>
                - Created an automation platform for the tasks devops team performs. Following are
                some of them
              </span>
              <div className="flex flex-col">
                <span>
                  - Automated RDS Cluster upgrade / downgrade activity with very less downtime
                  around 1-10 seconds in production
                </span>
                <span>
                  - Devised notification system for the platform supporting both web and email
                  notifications on based of certain actions custom selected by user
                </span>
                <span>
                  - Devised task management and approval system in the platform for devops team
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-8 mt-6 p-6">
          <div className="w-10">
            <img className="w-8 sm:w-12" src={LeadSquaredLogo} alt="LeadSquaredLogo" />
          </div>
          <div className="flex flex-1 flex-col space-y-2 border-blue-400 border-l-0 sm:border-l-2  sm:px-6 py-6 sm:py-0">
            <h1>Software Development Engineer</h1>
            <span className="text-sm text-gray-400">June, 2021 - Present</span>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Experience;
