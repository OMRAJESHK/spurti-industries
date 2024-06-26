import React from "react";
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
}) => {
  return (
    <Flexbox
      flexDirection="row"
      alignItems="center"
      classProp={classes["score-item-wrapper"]}
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

export default CounterWrapper;
