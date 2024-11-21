import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { RiMenu4Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [isBlur, setIsBlur] = useState(false);
  const [sideToggle, setSideToggle] = useState(false);

  const handleSideNav = () => {
    setSideToggle(!sideToggle);
    console.log(sideToggle);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setIsBlur(true) : setIsBlur(false);
    });
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setSideToggle(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <nav>
      <ul
        className={`navbar container ${
          isBlur && !sideToggle ? "blur-nav" : ""
        }`}
      >
        <li id="nav-link">
          <Link to="hero" smooth={true} offset={-250} duration={500}>
            Home
          </Link>
        </li>
        <li id="nav-link">
          <Link to="about" smooth={true} offset={-50} duration={500}>
            About
          </Link>
        </li>
        <li id="nav-link">
          <Link to="skills" smooth={true} offset={0} duration={500}>
            Skills
          </Link>
        </li>
        <li id="nav-link">
          <Link to="projects" smooth={true} offset={-60} duration={500}>
            Projects
          </Link>
        </li>
        <li id="nav-link">
          <Link to="contact" smooth={true} offset={0} duration={500}>
            Contact
          </Link>
        </li>
        <li onClick={handleSideNav}>
          <RiMenu4Fill className="menu-icon" />
        </li>
      </ul>
      {/* ------------------------------------- */}
      <ul className={`side-nav ${!sideToggle ? "dis-side-nav" : ""}`}>
        <li onClick={handleSideNav}>
          <IoCloseSharp className="close-icon" />
        </li>
        <li>
          <Link to="hero" smooth={true} offset={-250} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-50} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={0} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-60} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={0} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
