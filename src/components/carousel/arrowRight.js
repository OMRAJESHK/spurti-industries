import React from "react";
import PropTypes from "prop-types";
import classes from "./carousel.module.css";

const ArrowRight = (props) => {
  return (
    <div className={classes["arrow-right"]} onClick={props.onClick}>
      <span />
      <span />
      <span />
    </div>
  );
};

ArrowRight.propTypes = {
  onClick: PropTypes.func,
};
export default ArrowRight;
