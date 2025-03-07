import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = ({ inputRef }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f306dc6e-f89a-44b7-8455-2680db370374");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact container">
      <h1>Contact</h1>
      <div className="contact-cols">
        <div className="section-1">
          <h2>
            If you are interested in <span id="white-content">development</span>{" "}
            and would like to work together, Come say Hi!
          </h2>
          <p>
            You can also drop a mail to{" "}
            <span id="white-content">graceshon.js.2003@gmail.com</span>
          </p>
          <div className="icons">
            <a href="https://github.com/GrazonJS">
              <FaGithub color="white" />
            </a>
            <a href="https://x.com/js_grazon">
              <FaXTwitter color="white" />
            </a>
            <a href="https://www.linkedin.com/in/graceshon-js/">
              <FaLinkedin color="white" />
            </a>
          </div>
        </div>
        <div className="section-2">
          <h2>Let's Talk</h2>

          <form action="" onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              ref={inputRef}
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="name-input"
            />
            <label>Email ID</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email ID"
              required
            />
            <label>Write your message here</label>
            <textarea
              name="message"
              placeholder="Enter your message here"
              id=""
              rows="6"
              required
            ></textarea>
            <button type="submit" className="button-black">
              Submit
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
      <div className="final-footer">
        <p>Copyrights © 2024</p>
        <p>Developed using React JS</p>
      </div>
    </div>
  );
};

export default Contact;
