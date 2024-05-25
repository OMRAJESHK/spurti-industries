import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classes from "./input.module.css";

const Input = (props, ref) => {
  const { label, name, value, onChange, ...otherProps } = props;
  return (
    <div className={classes["input-wrapper"]}>
      <label htmlFor={name} className={classes["label"]}>
        {label}
      </label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        ref={ref}
        className={classes["input"]}
        {...otherProps}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default forwardRef(Input);
