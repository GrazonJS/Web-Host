import React from "react";
import "./Skills.css";
import aws from "../../assets/aws2.png";
import figma from "../../assets/figma_2.png";
import git from "../../assets/git.png";
import informatica from "../../assets/informatica2.png";
import java from "../../assets/java2.png";
import langchain from "../../assets/langchain2.png";
import javascript from "../../assets/javascript.png";
import linux from "../../assets/linux.png";
import react from "../../assets/react.png";
import mysql from "../../assets/mysql.png";
import nodejs from "../../assets/nodejs2.png";
import redux from "../../assets/redux.png";
import tailwind from "../../assets/tailwind.png";

const Skills = () => {
  return (
    <div className="container skills">
      <h2>Skills</h2>
      <div className="grid-container">
        <div className="item aws">
          <img src={aws} alt="" />
          <p>AWS</p>
        </div>
        <div className="item figma">
          <img src={figma} alt="" />
          <p>Figma</p>
        </div>
        <div className="item react">
          <img src={react} alt="" />
          <p>React</p>
        </div>
        <div className="item git">
          <img src={git} alt="" />
          <p>Git</p>
        </div>
        <div className="item nodejs">
          <img src={nodejs} alt="" />
          <p>Nodejs</p>
        </div>
        <div className="item informatica">
          <img src={informatica} alt="" />
          <p>Informatica</p>
        </div>
        <div className="item linux">
          <img src={linux} alt="" />
          <p>Linux</p>
        </div>
        <div className="item mysql">
          <img src={mysql} alt="" />
          <p>Mysql</p>
        </div>
        <div className="item java">
          <img src={java} alt="" />
          <p>Java</p>
        </div>
        <div className="item langchain">
          <img src={langchain} alt="" />
          <p>LangChain</p>
        </div>
        <div className="item javascript">
          <img src={javascript} alt="" />
          <p>Javascript</p>
        </div>
        <div className="item redux">
          <img src={redux} alt="" />
          <p>RTK</p>
        </div>
        <div className="item tailwind">
          <img src={tailwind} alt="" />
          <p>Tailwind</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
