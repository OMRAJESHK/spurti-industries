import React from "react";
import PropTypes from "prop-types";
import CustomImage from "../customImage";
import Button from "../button/button";
import classes from "./carousel.module.css";
import { useRouter } from "next/navigation";
import { pageRoutes } from "@/routes/routes";

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
      <div className={classes["slider-img-wrapper"]}>
        <div className={classes["overlay"]}>
          <div className={classes["slider-text-wrapper"]}>
            <div>
              <h2 className={classes["slider-title"]}>{title}</h2>
              <p className={classes["slider-text"]}>{text}</p>
              {hasButton && (
                <Button label={buttonLabel} onClick={onKnoMoreClickHandler} />
              )}
            </div>
          </div>
        </div>
        <CustomImage
          src={image}
          alt="logo"
          width={650}
          height={250}
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
