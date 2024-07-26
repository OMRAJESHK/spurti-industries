import React from "react";
import PropTypes from "prop-types";
import classes from "./carousel.module.css";

const Arrow = ({ toLeft = true, toRight = false, onClick }) => {
  let arrowClasses = "";

  if (toLeft) arrowClasses = classes["arrow-left"];
  if (toRight) arrowClasses = classes["arrow-right"];

  return (
    <div className={arrowClasses} onClick={onClick}>
      <span />
      <span />
      <span />
    </div>
  );
};

Arrow.propTypes = {
  toLeft: PropTypes.bool,
  toRight: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Arrow;
