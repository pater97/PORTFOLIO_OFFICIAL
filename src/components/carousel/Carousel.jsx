import React, { useState } from "react";
import "./Carousel.scss";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const ps = require('../../assets/project/desktopview/ps.png')
const cinemaOk = require('../../assets/project/desktopview/cinemaOk.png')
const dc = require('../../assets/project/desktopview/dcComic.png')
const dummyProject = require('../../assets/project/desktopview/dummyproject.png')
const spoti = require('../../assets/project/desktopview/spotify.png')

const images = [ps,cinemaOk,dc,dummyProject,spoti]


const Carousel = () =>  {
  const [imageIndex, setImageIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}


export default Carousel;
