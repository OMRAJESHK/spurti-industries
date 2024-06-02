"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import Wrapper from "../home/common/wrapper";
import Copyrights from "../common/copyrights";
import Footer from "../common/footer/footer";
import ContactUs from "../common/contactUs/contactUs";

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
  };

  return (
    <>
      <Wrapper>
        <h1>Under Progress...!</h1>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
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
      </Wrapper>
      <ContactUs />
      <Footer />
      <Copyrights />
    </>
  );
};

export default Productlist;
