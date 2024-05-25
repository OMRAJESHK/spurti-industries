import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classes from "./input.module.css";

const Textarea = (props, ref) => {
  const {
    label,
    name,
    value,
    onChange,
    rows = 3,
    cols = 10,
    ...otherProps
  } = props;

  return (
    <div className={classes["input-wrapper"]}>
      <label htmlFor={name} className={classes["label"]}>
        {label}
      </label>
      <textarea
        ref={ref}
        name={name}
        rows={rows}
        cols={cols}
        value={value}
        onChange={onChange}
        className={classes["textarea"]}
        {...otherProps}
      />
    </div>
  );
};

Textarea.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default forwardRef(Textarea);
