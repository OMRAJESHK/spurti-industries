import React from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import CustomImage from "@/components/customImage";
import Flexbox from "@/components/flexbox/flexbox";
import classes from "../home.module.css";

const CounterWrapper = ({
  src = "#",
  title = "",
  start = 0,
  end,
  duration,
  classProp = "",
}) => {
  return (
    <Flexbox
      flexDirection="row"
      alignItems="center"
      classProp={`${classes["score-item-wrapper"]} ${classProp ?? classProp}`}
    >
      <CustomImage src={src} classProp={classes["score-img"]} />
      <div>
        <CountUp
          start={start}
          end={end}
          duration={duration}
          className={classes["counter"]}
          suffix="+"
        />
        <h5 className={classes["score-title"]}>{title}</h5>
      </div>
    </Flexbox>
  );
};

CounterWrapper.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  start: PropTypes.number,
  end: PropTypes.number,
  duration: PropTypes.number,
  classProp: PropTypes.string,
};

export default CounterWrapper;
