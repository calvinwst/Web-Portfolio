import React, { useState, useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Project = () => {
  return (
    <>
      <section className="text-gray-600 body-font" id="project">
        <div className="h-1 bg-gray-200  overflow-hidden"></div>
        <div className="container px-5 py-12 mx-auto">
          <h1 className="text-gray-900 font-medium title-font text-4xl mb-2 sm:mb-0 dark:text-black">
            Project & Certification
          </h1>
          <hr />
          <br />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {/**ROW 1 */}
            <div className="max-w-sm bg-white border p-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/img/fullstack.png" alt="" />
              </a>
              <div className="p-5">
                <a href="https://github.com/calvinwst/Slim_Demo_Watch1">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Full Stack Watches Web App
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A straightforward full-stack web application centered around
                  watches, employing CRUD operations.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View Github
                  <BsArrowRightShort className="w-7 h-5 ml-2" />
                </a>
              </div>
            </div>

            <div className="max-w-sm bg-white border p-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="https://github.com/calvinwst/Todo-App">
                <img className="rounded-t-lg" src="/img/todo.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Todo List Web App
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A simple frontend todo-app with the use of Typescript and
                  React Framework.
                </p>
                <a
                  href="https://github.com/calvinwst/Todo-App"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View Github
                  <BsArrowRightShort className="w-7 h-5 ml-2" />
                </a>
              </div>
            </div>

            <div className="max-w-sm bg-white border p-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="https://replit.com/@calvinwst">
                <img className="rounded-t-lg" src="/img/bot.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Discord Python Bot
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Created a Python-based joke-telling bot using API integrations
                  that showcases coding skills and creativity.
                </p>
                <a
                  href="https://replit.com/@calvinwst"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <BsArrowRightShort className="w-7 h-5 ml-2" />
                </a>
              </div>
            </div>

            {/**ROW 2 */}
          </div>
          <br />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className=" bg-white border p-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/img/ux.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Google Foundations of User Experience (UX) Design
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Gaining insights into the principles and practices of creating
                  intuitive and user-centric digital interfaces. Explored topics
                  like usability, wireframing, and user research, enhancing
                  understanding of designing products that prioritize user
                  needs.
                </p>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/E8UTP2WUK42A"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <BsArrowRightShort className="w-7 h-5 ml-2" />
                </a>
              </div>
            </div>
            <div className=" bg-white border p-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/img/ibm.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    IBM's Python for Data Science & AI Dev Certification
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Learned to manipulate data, implement machine learning
                  algorithms, and create predictive models. Leveraged Python
                  libraries like NumPy, pandas, and scikit-learn, gaining the
                  ability to solve real-world data challenges and contribute to
                  data-driven insights.
                </p>
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/JNVK6J6QAVBR"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <BsArrowRightShort className="w-7 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="gird grid-cols-2 gap-2">
            <div className="max-w-sm bg-white border p-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"></div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Project;
