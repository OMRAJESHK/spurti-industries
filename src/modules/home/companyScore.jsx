"use client";
import React from "react";
import CountUp from "react-countup";
import Wrapper from "./common/wrapper";
import classes from "./home.module.css";
import ticksvg from "../../asset/svgs/tick.svg";
import usersvg from "../../asset/svgs/user.svg";
import CustomImage from "@/components/customImage";
import Flexbox from "@/components/flexbox/flexbox";
import CounterWrapper from "./common/counterWrapper";

const CompanyScore = () => {
  return (
    <Wrapper>
      <Flexbox justifyContent="space-between">
        <CounterWrapper
          start={0}
          end={50}
          duration={6}
          src={ticksvg}
          title="Years Of Experience"
        />
        <CounterWrapper
          start={0}
          end={500}
          duration={7}
          src={ticksvg}
          title="Years Of Projects"
        />
        <CounterWrapper
          start={0}
          end={100}
          duration={8}
          src={ticksvg}
          title="Number Of Clients"
        />
        <CounterWrapper
          start={100}
          end={1000}
          duration={10}
          src={usersvg}
          title="Number Of Customers"
        />
      </Flexbox>
    </Wrapper>
  );
};

export default CompanyScore;
