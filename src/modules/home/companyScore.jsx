"use client";
import React from "react";
import Wrapper from "./common/wrapper";
import classes from "./home.module.css";
import ticksvg from "../../asset/svgs/tick.svg";
import usersvg from "../../asset/svgs/user.svg";
import project from "../../asset/svgs/project.svg";
import calender from "../../asset/svgs/calender.svg";
import Flexbox from "@/components/flexbox/flexbox";
import CounterWrapper from "./common/counterWrapper";

const CompanyScore = () => {
  return (
    <Wrapper classProp={classes["company-scorelist-wrapper"]}>
      <Flexbox
        justifyContent="space-between"
        classProp={classes["company-scorelist-wrapper"]}
      >
        <CounterWrapper
          start={0}
          end={50}
          duration={6}
          src={calender}
          title="Years of Experience"
        />
        <CounterWrapper
          start={0}
          end={500}
          duration={7}
          src={project}
          title="Number of Projects"
        />
        <CounterWrapper
          start={0}
          end={100}
          duration={8}
          src={ticksvg}
          title="Number of Clients"
        />
        <CounterWrapper
          start={100}
          end={1000}
          duration={10}
          src={usersvg}
          title="Number of Customers"
        />
      </Flexbox>
    </Wrapper>
  );
};

export default CompanyScore;
