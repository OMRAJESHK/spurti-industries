import React from "react";
import PropTypes from "prop-types";

export const H1 = ({ classProp = "", children, ...otherProps }) => {
  return (
    <h1 className={classProp} {...otherProps}>
      {children}
    </h1>
  );
};

export const H2 = ({ classProp = "", children, ...otherProps }) => {
  return (
    <h2 className={classProp} {...otherProps}>
      {children}
    </h2>
  );
};

H1.propTypes = { classProp: PropTypes.string, children: PropTypes.node };
H2.propTypes = { classProp: PropTypes.string, children: PropTypes.node };
