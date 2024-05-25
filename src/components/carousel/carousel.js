"use client";

import React from "react";
import Slider from "react-slick";
import map from "../../asset/images/spurthiMap.png";
import computer from "../../asset/images/computer.jpg";
import classes from "./carousel.module.css";
import CustomImage from "../customImage";
import Button from "../button/button";
import { carousels } from "./constants";
import CarouselItem from "./carouselItem";

import ArrowLeft from "./arrowLeft";
import ArrowRight from "./arrowRight";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div className={classes["slider-wrapper"]}>
      <Slider {...settings}>
        {carousels.map((carousel) => (
          <CarouselItem key={carousel.id} {...carousel} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
