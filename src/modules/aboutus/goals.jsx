import React from "react";
import Wrapper from "../home/common/wrapper";
import classes from "./aboutus.module.css";
import Flexbox from "@/components/flexbox/flexbox";
import Card from "@/components/card/card";
import CustomImage from "@/components/customImage";
import goalIcon from "../../asset/svgs/goal.svg";
import missionIcon from "../../asset/svgs/mission.svg";
import commitmentIcon from "../../asset/svgs/commitment.svg";

const Goals = () => {
  return (
    <Wrapper classProp={classes["bg-primary"]}>
      <section className={classes["aboutus-wrapper"]}>
        <Flexbox justifyContent="space-between">
          <Card>
            <Card.Header>
              <CustomImage src={goalIcon} classProp={classes["card-img"]} />
              <div>
                <strong>Our Committment</strong>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                {`Our Commitmentment is to understand and exceed the expectation
                of our valued customers, while delevering high quality product,
                services, and solution to their most demanding requirements.`}
              </p>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <CustomImage src={missionIcon} classProp={classes["card-img"]} />
              <div>
                <strong>Our Mission</strong>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                {`Our Mission is to assure our customer's success by providing
                them the best manufacturing solutions and delivering superior
                quality products on time.`}
              </p>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <CustomImage
                src={commitmentIcon}
                classProp={classes["card-img"]}
              />
              <div>
                <strong>Our Vision</strong>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                {`our vision is to be the company for our customers and employess.
                to provide innovative solutions using the best technology and
                people assuring stability and longevity.`}
              </p>
            </Card.Body>
          </Card>
        </Flexbox>
      </section>
    </Wrapper>
  );
};

export default Goals;
