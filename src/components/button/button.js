import React from "react";
import PropTypes from "prop-types";
import classes from "./button.module.css";

const Button = (props) => {
  const { label, onClick, type, classProp = "", ...otherProps } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      {...otherProps}
      className={`${classProp ? classProp : ""} ${classes["button"]}`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  classProp: PropTypes.string,
};

export default Button;
