"use client";

import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import classes from "./carousel.module.css";
import CarouselItem from "./carouselItem";
import Arrow from "./arrow";
import Flexbox from "../flexbox/flexbox";

const Carousel = (props) => {
  const {
    dots = true,
    infinite = false,
    speed = 500,
    slidesToShow = 1,
    slidesToScroll = 1,
    initialSlide = 0,
    slides = [],
  } = props;

  const settings = {
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    initialSlide,
    prevArrow: <Arrow />,
    nextArrow: <Arrow toRight />,
  };
  if (slides.length > 0)
    return (
      <div className={classes["slider-wrapper"]}>
        <Slider {...settings}>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} {...slide} />
          ))}
        </Slider>
      </div>
    );
  else
    return (
      <Flexbox justifyContent="center">
        <strong>No Slides...</strong>
      </Flexbox>
    );
};

Carousel.propTypes = {
  dots: PropTypes.bool,
  infinite: PropTypes.bool,
  speed: PropTypes.number,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  initialSlide: PropTypes.number,
  slides: PropTypes.array,
};

export default Carousel;
