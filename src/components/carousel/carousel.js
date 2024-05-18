"use client";

import React from "react";
import Slider from "react-slick";

import CustomImage from "../image/customImage";
import classess from "./carousel.module.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div style={{ display: "block", background: "green" }}>
          <h3>
            1111111111111111111111111111111111111111111111111111111111111111111111111
          </h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
    // <div className="carousel">
    //   <div className="carousel-inner">
    //     <input
    //       className={`${classess["carousel-open"]} ${classess["carousel-1"]}`}
    //       type="radio"
    //       id="carousel-1"
    //       name="carousel"
    //       aria-hidden="true"
    //       hidden=""
    //       checked="checked"
    //     />
    //     <div className={classess["carousel-item"]}>
    //       <img src="http://fakeimg.pl/2000x800/0079D8/fff/?text=Without" />
    //     </div>
    //     <input
    //       className={`${classess["carousel-open"]} ${classess["carousel-2"]}`}
    //       type="radio"
    //       id="carousel-2"
    //       name="carousel"
    //       aria-hidden="true"
    //       hidden=""
    //     />
    //     <div className="carousel-item">
    //       <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript" />
    //     </div>
    //     <input
    //       className={`${classess["carousel-open"]} ${classess["carousel-3"]}`}
    //       type="radio"
    //       id="carousel-3"
    //       name="carousel"
    //       aria-hidden="true"
    //       hidden=""
    //     />
    //     <div className={classess["carousel-item"]}>
    //       <img
    //         src="http://fakeimg.pl/2000x800/F90/fff/?text=Carousel"
    //         alt="carosel_3
    //       "
    //       />
    //     </div>
    //     <label
    //       htmlFor="carousel-3"
    //       className={`${classess["carousel-control"]} ${classess["prev"]} ${classess["control-1"]}`}
    //     >
    //       ‹
    //     </label>
    //     <label
    //       htmlFor="carousel-2"
    //       className={`${classess["carousel-control"]} ${classess["next"]} ${classess["control-1"]}`}
    //     >
    //       ›
    //     </label>
    //     <label
    //       htmlFor="carousel-1"
    //       className={`${classess["carousel-control"]} ${classess["prev"]} ${classess["control-2"]}`}
    //     >
    //       ‹
    //     </label>
    //     <label
    //       htmlFor="carousel-3"
    //       className={`${classess["carousel-control"]} ${classess["next"]} ${classess["control-2"]}`}
    //     >
    //       ›
    //     </label>
    //     <label
    //       htmlFor="carousel-2"
    //       className={`${classess["carousel-control"]} ${classess["prev"]} ${classess["control-3"]}`}
    //     >
    //       ‹
    //     </label>
    //     <label htmlFor="carousel-1" className="carousel-control next control-3">
    //       ›
    //     </label>
    //     <ol className="carousel-indicators">
    //       <li>
    //         <label
    //           htmlFor="carousel-1"
    //           className={`${classess["carousel-bullet"]}`}
    //         >
    //           •
    //         </label>
    //       </li>
    //       <li>
    //         <label
    //           htmlFor="carousel-2"
    //           className={`${classess["carousel-bullet"]}`}
    //         >
    //           •
    //         </label>
    //       </li>
    //       <li>
    //         <label
    //           htmlFor="carousel-3"
    //           className={`${classess["carousel-bullet"]}`}
    //         >
    //           •
    //         </label>
    //       </li>
    //     </ol>
    //   </div>
    // </div>
  );
};

export default Carousel;
