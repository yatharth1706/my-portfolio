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
            <span className="text-sm text-gray-400">December, 2023 - Present</span>
            <div className="flex flex-col leading-relaxed">
              <li>
                Spearheaded the integration of multiple CRMs including HubSpot
                and Salesforce into the platform, enhancing lead management
                efficiency.
              </li>
              <li>
                Achieved a remarkable 99% improvement in email deliverability
                through meticulous optimization strategies.
              </li>
              <li>
                Implemented advanced techniques to enhance email quality and
                refine email filtering mechanisms, resulting in a more
                streamlined communication process.
              </li>
              <li>
                Revamped the entire subscription workflow by leveraging Stripe
                within the platform, leading to improved user experience and
                increased conversion rates.
              </li>
              <li>
                Developed comprehensive analytics infrastructure, enabling
                real-time monitoring and analysis of all lead and email-related
                activities within the platform.
              </li>
              <li>
                Engineered robust solutions to fortify the scheduler, enabling
                seamless handling of over 10,000 emails daily and facilitating
                effective communication with leads.
              </li>
              <div className="flex flex-col">
                <li>
                  Skills: Python, FastAPI, Docker, Postgres, DigitalOcean, LLM
                </li>
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
            <span className="text-sm text-gray-400">June, 2023 - December, 2023</span>
            <div className="flex flex-col leading-relaxed">
              <li>
                Automated release pipeline that helps faster releases and 100%
                efficiency
              </li>
              <li>
                Automated Region Setup Infra for LeadSquared to create all its
                infra in new region on requirement basis. Automating it via
                Terraform, AWS, RDS, Powershell scripts.
              </li>
              <div className="flex flex-col">
                <li>
                  Skills: ReactJS, Terraform, Python, Git, AWS, Powershell,
                  MySQL, Nodejs, Figma, NextJS, Typescript
                </li>
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
            <span className="text-sm text-gray-400">June, 2021 - June, 2023</span>
            <div className="flex flex-col leading-relaxed">
              <li>Part of DevOps Portal team</li>
              <li>
                Created an automation platform for the tasks devops team
                performs. Following are some of them
              </li>
              <div className="flex flex-col">
                <li>
                  Automated RDS Cluster upgrade / downgrade activity with very
                  less downtime around 1-10 seconds in production
                </li>
                <li>
                  Devised notification system for the platform supporting both
                  web and email notifications on based of certain actions custom
                  selected by user
                </li>
                <li>
                  Devised task management and approval system in the platform
                  for devops team
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Experience;
