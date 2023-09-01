import React, { useState, useEffect } from "react";
import "../tailwind.css";
import {
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoTypescript,
  BiLogoGraphql,
} from "react-icons/bi";
import { DiMysql } from "react-icons/di";

const Resume = () => {
  return (
    <>
      <section className="text-gray-600 body-font" id="resume">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200  overflow-hidden"></div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-5">
              <div className="sm:w-2/5 flex justify-center">
                <img
                  className="w-50 h-85  inline-flex items-center justify-center flex-shrink-0"
                  src="/img/profile.jpeg"
                  alt="Calvin Wong"
                />
              </div>
              <div className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 dark:text-gray-500">
                <h1 className="text-gray-900 font-medium title-font text-xl mb-2 sm:mb-0 dark:text-black">
                  Resume
                </h1>
                <hr />
                <p className="text-gray-900 font-medium title-font text-base mb-2 sm:mb-0 dark:text-gray-500">
                  Hi, I'm Calvin Wong, currently a final year student at
                  Technological University of Shannon, specializing in AI-driven
                  Software Design for Cloud Computing. Backed by 6 months of
                  industry experience in web application development, and a
                  passion for innovation and problem-solving. Below is a summary
                  of my skills and experience.
                </p>
                <br />
                <h1 className="text-gray-900 font-medium title-font text-xl mb-2 sm:mb-0 dark:text-black">
                  Employment
                </h1>
                <hr />
                <p>
                  <p className="text-gray-900 font-medium title-font text-lg mb-2 sm:mb-0 dark:text-black">
                    Software Engineer Intern
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-900 font-medium title-font text-base mb-2 sm:mb-0 dark:text-gray-500">
                      Finexus Group Malaysia Sdn Bhd
                    </p>
                    <br />
                    <p className="text-gray-900 font-medium title-font text-base mb-2 sm:mb-0 dark:text-gray-500">
                      Feb 2023 - July 2023
                    </p>
                  </div>
                  {/* <br /> */}
                  <p className="text-gray-900 font-medium  text-base mb-2 sm:mb-0 dark:text-gray-500">
                    - Worked on creation of a web application for handling
                    company payment processes, utilizing React Framework,
                    Typescript, and GraphQL.
                  </p>
                  <p className="text-gray-900 font-medium  text-base mb-2 sm:mb-0 dark:text-gray-500">
                    - Utilize test-driven development (TDD) metrologies tool
                    such as Jest and React Testing Library for rigorous unit
                    testing on development of web app.
                  </p>
                </p>
                <br />

                <h1 className="text-gray-900 font-medium title-font text-xl mb-2 sm:mb-0 dark:text-black">
                  Skills & Framework
                </h1>
                <hr />
                <div className="mt-4">
                  <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    <li className="flex items-center">
                      Java
                      <BiLogoJava className="ml-2" size={25} />
                    </li>
                    <li className="flex items-center">
                      Python <BiLogoPython className="ml-2" size={25} />
                    </li>
                    <li className="flex items-center">
                      JavaScript
                      <BiLogoJavascript className="ml-2" size={25} />
                    </li>
                    <li className="flex items-center">
                      Typescript <BiLogoTypescript className="ml-2" size={25} />
                    </li>
                    <li className="flex items-center">
                      ReactJS <BiLogoReact className="ml-2" size={25} />
                    </li>
                    <li className="flex items-center">
                      MySQL <DiMysql className="ml-2" size={25} />
                    </li>
                    <li className="flex items-center">ExpressJS </li>
                    <li className="flex items-center">
                      NodeJS <BiLogoNodejs className="ml-2" size={25} />
                    </li>
                    <li className="flex items-center">
                      MongoDB <BiLogoMongodb className="ml-2" size={25} />
                    </li>
                    <li className="flex items-center">
                      GraphQL <BiLogoGraphql className="ml-2" size={25} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
