import React from "react";
import PropTypes from "prop-types";
import classes from "./card.module.css";
import Image from "next/image";
import CustomImage from "../customImage";

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

Card.propTypes = {};

export default Card;
