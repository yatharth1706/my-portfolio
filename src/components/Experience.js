import React from "react";
import { Element } from "react-scroll";
import LeadSquaredLogo from "./../images/LeadSquaredLogo.png";

function Experience() {
  return (
    <Element name="aboutMe">
      <div className="text-gray-300 w-full h-auto sm:mt-10 py-8">
        <span className="text-2xl font-semibold">Experience</span>
        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 mt-6">
          <div>
            <img className="w-12" src={LeadSquaredLogo} alt="LeadSquaredLogo" />
          </div>
          <div className="flex flex-col space-y-4 border-blue-400 border-l-0 sm:border-l-2  sm:px-6">
            <h1>Software Development Engineer</h1>
            <span className="text-sm text-gray-400">June, 2021 - Present</span>
            <ul>
              <li>Part of DevOps Portal team</li>
              <li>
                Created a automation platform for the tasks devops team performs. Following are some
                of the features automated for them
              </li>
              <li>
                Automated RDS Cluster upgrade / downgrade activity with very less downtime around
                1-10 seconds in production
              </li>
              <li>
                Devised notification system for the platform supporting both web and email
                notifications on based of certain actions custom selected by user
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 mt-6">
          <div>
            <img className="w-12" src={LeadSquaredLogo} alt="LeadSquaredLogo" />
          </div>
          <div className="flex flex-col space-y-4 border-blue-400 border-l-0 sm:border-l-2  sm:px-6">
            <h1>Software Development Engineer ( Intern )</h1>
            <span className="text-sm text-gray-400">June, 2020 - June, 2021</span>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Experience;
