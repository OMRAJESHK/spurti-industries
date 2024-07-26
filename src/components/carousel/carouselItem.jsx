import React from "react";
import PropTypes from "prop-types";
import CustomImage from "../customImage";
import classes from "./carousel.module.css";
import { useRouter } from "next/navigation";
import { pageRoutes } from "@/routes/routes";
import SliderTextWrapper from "./sliderTextWrapper";

const CarouselItem = (props) => {
  const {
    title = "",
    text = "",
    hasButton = false,
    buttonLabel,
    image,
  } = props;
  const router = useRouter();
  const onKnoMoreClickHandler = () => {
    router.push(pageRoutes.aboutus, { scroll: false });
  };

  return (
    <div className={classes["slider-item-wrapper"]}>
      <div>
        <SliderTextWrapper
          title={title}
          text={text}
          hasButton={hasButton}
          buttonLabel={buttonLabel}
          onClick={onKnoMoreClickHandler}
        />
        <CustomImage
          src={image}
          alt="logo"
          width={800}
          height={800}
          classProp={classes["slider-img"]}
        />
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  hasButton: PropTypes.bool,
  buttonLabel: PropTypes.string,
  image: PropTypes.string,
};

export default CarouselItem;
