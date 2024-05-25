import React from "react";
import classes from "./carousel.module.css";
import PropTypes from "prop-types";

const ArrowLeft = (props) => {
  return (
    <div className={classes["arrow-left"]} onClick={props.onClick}>
      <span />
      <span />
      <span />
    </div>
  );
};

ArrowLeft.propTypes = {
  onClick: PropTypes.func,
};
export default ArrowLeft;
