/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";
import classes from "./card.module.css";

const Card = (props) => {
  const { classProp = "", width, styleProp = {}, children } = props;

  return (
    <article
      style={styleProp}
      className={`${classProp ? classProp : ""} ${classes["goal-card"]}`}
    >
      {children}
    </article>
  );
};

Card.Header = ({ children }) => <h4>{children}</h4>;

Card.Body = ({ children }) => (
  <div className={classes["goalcard-body"]}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  styleProp: PropTypes.object,
  classProp: PropTypes.string,
};
Card.Header.propTypes = { children: PropTypes.node };
Card.Body.propTypes = { children: PropTypes.node };

export default Card;
