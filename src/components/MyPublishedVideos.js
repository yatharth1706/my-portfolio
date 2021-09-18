import React from "react";

function MyPublishedVideos() {
  return (
    <div className="w-full h-auto px-10 md:px-20 flex flex-col mt-14">
      <span className="text-3xl">
        Videos <span className="font-semibold">Published</span>
      </span>

      <div className="w-full h-auto">
        <div className="w-full h-auto flex flex-col md:flex-row mb-10">
          <div className="aspect-w-16 aspect-h-9 mt-8 md:aspect-w-10 md:aspect-h-3 md:w-4/6">
            <iframe
              src="https://www.youtube.com/embed/EdibJxFMxlI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="w-full h-auto md:w-3/6 flex flex-col justify-center md:-ml-2">
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
      </div>
    </div>
  );
}

export default MyPublishedVideos;
