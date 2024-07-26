"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import Wrapper from "../home/common/wrapper";
import Copyrights from "../common/copyrights";
import Footer from "../common/footer/footer";
import ContactUs from "../common/contactUs/contactUs";
import classes from "./productlist.module.css";

import CustomImage from "@/components/customImage";
import { imageGallery } from "./data";
import Arrow from "@/components/carousel/arrow";

const Productlist = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow />,
    nextArrow: <Arrow toRight />,
  };

  return (
    <>
      <Wrapper>
        <div className={classes["product-wrapper"]}>
          <Slider
            asNavFor={nav2}
            ref={(slider) => (sliderRef1 = slider)}
            {...settings}
          >
            {imageGallery.map((imageItem) => (
              <div
                key={imageItem.id}
                className={classes["product-main-img-wrapper"]}
              >
                <CustomImage
                  src={imageItem.src}
                  alt="logo"
                  width={700}
                  height={700}
                  classProp={classes["product-img"]}
                />
              </div>
            ))}
          </Slider>
          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={5}
            swipeToSlide={true}
            focusOnSelect={true}
            prevArrow={<Arrow />}
            nextArrow={<Arrow toRight />}
          >
            {imageGallery.map((imageItem) => (
              <div
                key={imageItem.id}
                className={classes["product-thumbnail-wrapper"]}
              >
                <CustomImage
                  src={imageItem.src}
                  alt="logo"
                  width={100}
                  height={100}
                  classProp={classes["product-thumbnail-img"]}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Wrapper>
      <ContactUs />
      <Footer />
      <Copyrights />
    </>
  );
};

export default Productlist;
