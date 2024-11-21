import React from "react";
import "./About.css";
import profile_image from "../../assets/portfolio image upscaled.jpg";
import resume from "../../assets/GRACESHON JS NOV.pdf";

const About = () => {
  return (
    <div className="about container">
      <div className="real-left">
        <div className="left-box">
          <h2>About Me</h2>
          <img src={profile_image} alt="" width="350px" />
          <p>Hi 👋,</p>
          <p>
            I'm Graceshon J S, a technology enthusiast and front-end developer
            with a passion for creating visually appealing and interactive web
            interfaces.
          </p>
        </div>
        <button className="responsive-box btn">
          <a href={resume} target="_blank" className="resume-link">
            View Resume
          </a>
        </button>
      </div>
      <div className="right-side">
        <div className="box">
          <h3>Education</h3>
          <p>
            Currently pursuing my B.E. in Computer Science Engineering at
            Kongunadu College of Engineering and Technology.
          </p>
          <p>2021 - 2025</p>
        </div>
        <div className="box ">
          <h3>Experience</h3>
          <p>
            Completed Internship in Data Integration at Cognizant Technology
            Solutions.
          </p>
          <p>Aug 2024 - Sep 2024</p>
        </div>
        <div className="box">
          <h3>More About me...</h3>
          <p>
            My journey in web development is driven by a constant desire to
            learn and adapt to the latest industry trends. I specialize in
            building responsive and user-friendly applications using React JS,
            and I'm proficient in core technologies like JavaScript, Java, and
            SQL. My experience extends to emerging technologies, particularly in
            the AI space, where I've worked on innovative projects using
            LangChain and OpenAI.
          </p>
        </div>
        <button className="btn special-box">
          <a href={resume} target="_blank" className="resume-link">
            View Resume{" "}
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
