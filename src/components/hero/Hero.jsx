import React, { useEffect, useState, useContext } from "react";
import { ContactContext } from "../../App";
import { Link } from "react-scroll";
import "./Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { focusInput } = useContext(ContactContext);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="hero-container hero container">
      <div className={`title-container ${isVisible ? "animate" : ""}`}>
        <h1>Hi, I am Graceshon</h1>
        <h1>A Web-Developer</h1>
      </div>
      <p className={`description ${isVisible ? "animate" : ""}`}>
        Welcome to my corner of the web! As a web developer, I transform ideas
        into interactive experiences. Dive into my portfolio and let's innovate
        together.
      </p>
      <Link to="name-input" smooth={true} duration={1000}>
        <button
          onClick={focusInput}
          className={`btn button ${isVisible ? "animate" : ""}`}
        >
          HIRE ME
        </button>
      </Link>
    </div>
  );
};

export default Hero;
