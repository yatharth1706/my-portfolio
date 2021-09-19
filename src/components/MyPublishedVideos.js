import React from "react";

function MyPublishedVideos() {
  return (
    <div className="w-full h-auto px-10 md:px-20 flex flex-col mt-14">
      <span className="text-3xl">
        Videos <span className="font-semibold">Published</span>
      </span>

      <div className="w-full h-auto">
        <div className="w-full h-auto flex flex-col md:flex-row mt-8 justify-center">
          <div className="aspect-w-16 aspect-h-9 md:aspect-w-6 md:aspect-h-2 md:w-4/6">
            <iframe
              src="https://www.youtube.com/embed/EdibJxFMxlI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="-mt-2 md:mt-0 w-full h-auto md:w-3/6 flex flex-col md:-ml-2 justify-center">
            <div className="shadow-lg w-full h-auto p-6 lg:p-14 bg-custom-light-blue rounded-lg text-white">
              <span className="text-2xl font-semibold mb-4">Formik & React JS</span>
              <p className="mt-4">
                In this youtube video, I explained what is FormikJS and how to use it to make forms
                easily. I also taught validations using formik js and how to apply them to forms in
                easy way.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row mb-10 mt-16 sm:mt-24 justify-center">
          <div className="hidden  w-full h-auto md:w-3/6 md:flex flex-col md:-mr-2 justify-center">
            <div className="shadow-lg w-full h-auto p-6 lg:p-14 bg-custom-light-blue rounded-lg text-white">
              <span className="text-2xl font-semibold mb-4">Todo List Using React (Part - 1)</span>
              <p className="mt-4">
                In this youtube video, I made a simple Todo App. I first designed it on Adobe XD.
                And Then I did the coding part in React. It was fun. It got almost 10000 views
                within 6 months.
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
            <div className="shadow-lg w-full h-auto p-6 lg:p-14 bg-custom-light-blue rounded-lg text-white">
              <span className="text-2xl font-semibold mb-4"></span>
              <p className="mt-4">
                In this youtube video, I explained what is FormikJS and how to use it to make forms
                easily. I also taught validations using formik js and how to apply them to forms in
                easy way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPublishedVideos;
