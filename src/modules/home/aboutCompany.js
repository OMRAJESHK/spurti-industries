import Flexbox from "@/components/flexbox/flexbox";
import CustomImage from "@/components/customImage";
import React from "react";
import computer from "../../asset/images/computer.jpg";
import classes from "./home.module.css";
import Wrapper from "./common/wrapper";
import Button from "@/components/button/button";

const AboutCompany = () => {
  return (
    <Wrapper>
      <div className={classes["about-image-wrapper"]}>
        <CustomImage
          src={computer}
          alt="logo"
          width={250}
          height={250}
          classProp={classes["about-description-img"]}
        />
      </div>
      <div className={classes["about-description-wrapper"]}>
        <h1 className={classes["about-description-title"]}>
          About the Company
        </h1>
        <p className={classes["about-description-text"]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className={classes["about-description-text"]}>
          Lindustry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Button
          label="Know More"
          classProp={classes["about-know-more-button"]}
        />
      </div>
    </Wrapper>
  );
};

export default AboutCompany;
