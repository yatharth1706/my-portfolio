import React from "react";

import { Element } from "react-scroll";
import LeadSquaredLogo from "./../images/LeadSquaredLogo.png";
import ArtisanAILogo from "./../images/ArtisanAILogo.png";

function Experience() {
  return (
    <Element name="experience">
      <div className="text-gray-300 w-full sm:mb-44">
        <span className="flex text-xl sm:text-2xl justify-center sm:justify-start md:justify-left font-semibold">
          Experience
        </span>
        <div className="flex  flex-col sm:flex-row sm:space-x-8 mt-10 sm:mt-6 px-4 md:p-6">
          <div className="flex  items-center sm:items-start space-x-4 sm:w-10 w-full border-b-2 border-blue-400 sm:border-b-0 pb-5 sm:pb-0">
            <img
              className="w-8 sm:w-12"
              src={ArtisanAILogo}
              alt="ArtisanAILogo"
            />
            <span className="font-bold text-lg sm:hidden">Artisan AI</span>
          </div>

          <div className="flex flex-1 flex-col space-y-2 border-blue-400 border-l-0 sm:border-l-2  sm:px-6 py-6 sm:py-0">
            <h1>Senior Backend Engineer</h1>
            <span className="text-sm text-gray-400">June, 2023 - Present</span>
            <div className="flex flex-col leading-relaxed">
              <span>
                - Building digital workers using cutting edge AI technology to
                supercharge productivity
              </span>
              <span>
                - Optimized email quality and email filtering for outbound
                emails
              </span>
              <span>
                - Improved whole subscription workflow with stripe in the
                platform
              </span>
              <div className="flex flex-col">
                <span>
                  - Skills: Python, FastAPI, Docker, Postgres, DigitalOcean, LLM
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  flex-col sm:flex-row sm:space-x-8 mt-10 sm:mt-6 px-4 md:p-6">
          <div className="flex  items-center sm:items-start space-x-4 sm:w-10 w-full border-b-2 border-blue-400 sm:border-b-0 pb-5 sm:pb-0">
            <img
              className="w-8 sm:w-12"
              src={LeadSquaredLogo}
              alt="LeadSquaredLogo"
            />
            <span className="font-bold text-lg sm:hidden">LeadSquared</span>
          </div>

          <div className="flex flex-1 flex-col space-y-2 border-blue-400 border-l-0 sm:border-l-2  sm:px-6 py-6 sm:py-0">
            <h1>Senior Software Engineer</h1>
            <span className="text-sm text-gray-400">June, 2023 - Present</span>
            <div className="flex flex-col leading-relaxed">
              <span>
                - Automated release pipeline that helps faster releases and 100%
                efficiency
              </span>
              <span>
                - Automating Region Setup Infra for LeadSquared to create all
                its infra in new region on requirement basis. Automating it via
                Terraform, AWS, RDS, Powershell scripts.
              </span>
              <div className="flex flex-col">
                <span>
                  - Skills: ReactJS, Terraform, Python, Git, AWS, Powershell,
                  MySQL, Nodejs, Figma, NextJS, Typescript
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  flex-col sm:flex-row sm:space-x-8 mt-10 sm:mt-6 px-4 md:p-6">
          <div className="flex  items-center sm:items-start space-x-4 sm:w-10 w-full border-b-2 border-blue-400 sm:border-b-0 pb-5 sm:pb-0">
            <img
              className="w-8 sm:w-12"
              src={LeadSquaredLogo}
              alt="LeadSquaredLogo"
            />
            <span className="font-bold text-lg sm:hidden">LeadSquared</span>
          </div>

          <div className="flex flex-1 flex-col space-y-2 border-blue-400 border-l-0 sm:border-l-2  sm:px-6 py-6 sm:py-0">
            <h1>Software Development Engineer</h1>
            <span className="text-sm text-gray-400">June, 2021 - Present</span>
            <div className="flex flex-col leading-relaxed">
              <span>- Part of DevOps Portal team</span>
              <span>
                - Created an automation platform for the tasks devops team
                performs. Following are some of them
              </span>
              <div className="flex flex-col">
                <span>
                  - Automated RDS Cluster upgrade / downgrade activity with very
                  less downtime around 1-10 seconds in production
                </span>
                <span>
                  - Devised notification system for the platform supporting both
                  web and email notifications on based of certain actions custom
                  selected by user
                </span>
                <span>
                  - Devised task management and approval system in the platform
                  for devops team
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Experience;
