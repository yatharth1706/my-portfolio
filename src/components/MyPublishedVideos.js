import React from "react";
import { Element } from "react-scroll";

function MyPublishedVideos() {
  return (
    <Element name="myPublishedVideos">
      <div className="py-5 w-full h-auto flex flex-col mb-6 sm:mb-10 justify-center sm:justify-start">
        <span className="flex justify-center sm:justify-start text-xl sm:text-2xl  text-gray-300">
          Videos <span className="font-semibold">Published</span>
        </span>

        <div className="w-full h-auto">
          <div className="w-full h-auto flex flex-col md:flex-row mt-8 justify-center rounded-md backdrop-filter backdrop-blur-md bg-gray-900 p-4 sm:p-10 bg-opacity-80 transform transition-all hover:scale-105 sm:hover:scale-110 cursor-pointer">
            <div className="aspect-w-16 aspect-h-9 md:aspect-w-6 md:aspect-h-2 md:w-4/6">
              <iframe
                src="https://www.youtube.com/embed/EdibJxFMxlI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="-mt-2 md:mt-0 w-full h-auto md:w-3/6 flex flex-col md:-ml-2 justify-center ">
              <div className="shadow-lg w-full h-auto mt-6 md:p-6 lg:p-14 rounded-lg text-white">
                <span
                  className="font-semibold mb-4"
                  style={{ fontSize: "20px" }}
                >
                  Formik & React JS
                </span>
                <p className="mt-4 leading-relaxed md:leading-loose text-xs md:text-sm lg:text-md">
                  In this youtube video, I explained what is FormikJS and how to
                  use it to make forms easily. I also taught validations using
                  formik js and how to apply them to forms in easy way.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex flex-col md:flex-row mb-10 mt-16 sm:mt-24 justify-center rounded-md backdrop-filter backdrop-blur-md bg-gray-900 p-4 sm:p-10 bg-opacity-80 transform transition-all hover:scale-105 sm:hover:scale-110 cursor-pointer">
            <div className="hidden  w-full h-auto md:w-3/6 md:flex flex-col md:-mr-2 justify-center">
              <div className="shadow-lg w-full h-auto p-6 lg:p-14  rounded-lg text-white">
                <span
                  style={{ fontSize: "20px" }}
                  className="font-semibold mb-4"
                >
                  Todo List Using React (Part - 1)
                </span>
                <p className="mt-4 leading-relaxed md:leading-loose text-xs md:text-sm lg:text-md">
                  In this youtube video, I made a simple Todo App. I first
                  designed it on Adobe XD. And Then I did the coding part in
                  React. It was fun. It got almost 10000 views within 6 months.
                </p>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9 md:aspect-w-6 md:aspect-h-2 md:w-4/6">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TZ933D_RB8E"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="-mt-2 w-full h-auto md:w-3/6 sm:flex flex-col md:-ml-2 justify-center md:hidden">
              <div className="shadow-lg w-full h-auto mt-6 md:p-6 lg:p-14 text-white">
                <span className="font-semibold mb-4 text-xs md:text-sm lg:text-md"></span>
                <p className="mt-4 leading-relaxed md:leading-loose">
                  In this youtube video, I made a simple Todo App. I first
                  designed it on Adobe XD. And Then I did the coding part in
                  React. It was fun. It got almost 10000 views within 6 months.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-4 mb-8">
          <a
            href="https://www.youtube.com/channel/UCuttXyopYHZdV8_0ofvqBUQ"
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{
                color: "white",
                background: "#0177FB",
                borderRadius: "10px",
                padding: "12px",
              }}
              className="text-white mt-4 w-60  mx-auto md:mx-0 transition-transform duration-300 transform hover:scale-105"
            >
              Visit my youtube channel
            </button>
          </a>
        </div>
      </div>
    </Element>
  );
}

export default MyPublishedVideos;
