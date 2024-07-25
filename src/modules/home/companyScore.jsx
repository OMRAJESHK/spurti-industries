"use client";
import React from "react";
import Wrapper from "./common/wrapper";
import classes from "./home.module.css";
import Flexbox from "@/components/flexbox/flexbox";
import CounterWrapper from "./common/counterWrapper";
import { companyScoreList } from "./constants";

const CompanyScore = () => {
  return (
    <Wrapper classProp={classes["company-scorelist-wrapper"]}>
      <Flexbox
        justifyContent="space-around"
        classProp={classes["company-scorelist-wrapper"]}
      >
        {companyScoreList.map(({ id, title, start, end, duration, src }) => (
          <CounterWrapper
            classProp={classes["score-counter"]}
            key={id}
            start={start}
            end={end}
            duration={duration}
            src={src}
            title={title}
          />
        ))}
      </Flexbox>
    </Wrapper>
  );
};

export default CompanyScore;
