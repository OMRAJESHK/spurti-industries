import React from "react";
import PropTypes from "prop-types";
import Button from "../button/button";
import classes from "./carousel.module.css";
import { H2 } from "../headings/headings";

const SliderTextWrapper = ({
  title,
  text,
  onClick,
  hasButton,
  buttonLabel,
}) => {
  return (
    <div className={classes["overlay"]}>
      <div className={classes["slider-text-wrapper"]}>
        <H2>{title}</H2>
        <p>{text}</p>
        {hasButton && <Button label={buttonLabel} onClick={onClick} />}
      </div>
    </div>
  );
};

SliderTextWrapper.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  hasButton: PropTypes.bool,
  buttonLabel: PropTypes.string,
};

export default SliderTextWrapper;
