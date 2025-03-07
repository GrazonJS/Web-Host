import React from "react";
import "./Projects.css";
import { projectList } from "../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <div className="container projects">
      <h1>Projects</h1>

      <div className="slide-container">
        <Slider {...settings}>
          {projectList.map((item) => {
            return (
              <div className="slide" key={item.id}>
                <img src={item.img} alt="" />
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <div className="buttons ">
                  <button className="button-black">
                    {" "}
                    <a href={item.gitLink} target="_BLANK">
                      Git Repo
                    </a>
                  </button>
                  <button className="button-black"><a href={item.webLink} target="_BLANK" >View Website</a></button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
