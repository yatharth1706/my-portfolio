import React, { useRef } from "react";
import ContactBg from "../images/ContactBg.png";
import emailjs from "emailjs-com";
import { Element } from "react-scroll";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());
    if (
      data?.name.trim().length === 0 ||
      data?.email.trim().length === 0 ||
      data?.message?.trim().length === 0
    ) {
      alert("Fill all the values in the form before submission");
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            // show notification
            alert("Successfully sent the message!");
            form.current.reset();
          },
          (error) => {
            // show notification
            console.log(error.text);
            alert(error.text);
          }
        );
    }
  };

  return (
    <Element name="contactMe">
      <div
        className="w-full h-auto px-6 lg:px-20 flex flex-col py-10 text-white"
        style={{ background: "#0177FB" }}
      >
        <span className="text-3xl">Contact Me</span>
        <div className="w-full h-auto flex lg:space-x-6 shadow-lg p-6 lg:p-16 mt-6 justify-center items-align-center bg-white text-gray-900 rounded-lg">
          <img src={ContactBg} alt="Contact pic" className="hidden lg:block lg:w-3/6 h-80" />
          <form ref={form} onSubmit={sendEmail} className="w-full h-auto flex flex-col lg:w-3/6">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="border w-full h-8 mt-2 rounded-sm px-2 outline-none"
            />
            <label className="mt-4">Email</label>
            <input
              type="email"
              name="email"
              className="border w-full h-8 mt-2 rounded-sm px-2 outline-none"
            />
            <label className="mt-4">Message</label>
            <textarea
              name="message"
              className="border w-full h-16 mt-2 rounded-sm px-2 outline-none pt-1"
            />
            <button
              type="submit"
              className="mt-4 text-white px-2 py-1 rounded-sm transition-transform transform duration-300 hover:scale-95"
              style={{
                color: "white",
                background: "#0177FB",
                borderRadius: "6px",
                padding: "7px",
              }}
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
    </Element>
  );
}

export default Contact;
