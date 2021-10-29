import React, { useRef } from "react";
import ContactBg from "../images/ContactBg.png";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);
  };

  return (
    <div className="w-full h-auto px-10 lg:px-20 flex flex-col py-10">
      <span className="text-3xl">Contact Me</span>
      <div className="w-full h-auto flex lg:space-x-6 shadow-lg p-6 lg:p-16 mt-6 justify-center items-align-center">
        <img src={ContactBg} alt="Contact pic" className="hidden lg:block lg:w-3/6 h-80" />
        <form ref={form} onSubmit={sendEmail} className="w-full h-auto flex flex-col lg:w-3/6">
          <label>Name</label>
          <input type="text" name="user_name" className="border w-full h-8 mt-2 rounded-sm" />
          <label className="mt-4">Email</label>
          <input type="email" name="user_email" className="border w-full h-8 mt-2 rounded-sm" />
          <label className="mt-4">Message</label>
          <textarea name="message" className="border w-full h-16 mt-2 rounded-sm" />
          <button
            type="submit"
            className="mt-4 text-white px-2 py-1 rounded-sm"
            style={{ background: "#3F72DE" }}
          >
            Submit
          </button>
          <span className="text-sm mt-4 text-center">OR</span>
          <span className="text-sm mt-4 text-center">
            Directly contact me <span className="text-blue-600">yatharthverma070@gmail.com</span>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Contact;
