"use client";
import CustomImage from "@/components/customImage";
import React from "react";
import aboutImg from "../../asset/images/image-6.jpg";
import classes from "./home.module.css";
import Wrapper from "./common/wrapper";
import Button from "@/components/button/button";
import { useRouter } from "next/navigation";
import { pageRoutes } from "@/routes/routes";

const AboutCompany = () => {
  const router = useRouter();
  const onKnoMoreClickHandler = () => {
    router.push(pageRoutes.aboutus, { scroll: false });
  };

  return (
    <Wrapper>
      <div className={classes["about-image-wrapper"]}>
        <CustomImage
          src={aboutImg}
          alt="logo"
          width={300}
          height={300}
          classProp={classes["about-description-img"]}
        />
      </div>
      <div className={classes["about-description-wrapper"]}>
        <h1 className={classes["about-description-title"]}>
          About the Company
        </h1>
        <p className={classes["about-description-text"]}>
          Spurthi Industries is one of the leading manufacturers of precision
          engineering components providing customized quality service. The
          company is based at Bangalore, a city which is also called as the
          'Silicon Valley of India' is having the state of manufacturing
          facilities with best machineries, in house manufacturing of turned
          components and fully assured quality control panel.
        </p>
        <p className={classes["about-description-text"]}>
          The excellent production infrastructure of the company scaling an area
          of 10,000 square feet speaks volumes about the production and is
          reflected in its annual turnover of 8.00 Crores.
        </p>
        <p className={classes["about-description-text"]}>
          We are fully aware of our customer aims to reduce costs without losing
          quality and through our attention to detail and by adapting to market
          change, we are well placed to continue meeting the high standards
          expected of a modern day precision engineering firm.
        </p>
        <Button
          label="Know More"
          classProp={classes["about-know-more-button"]}
          onClick={onKnoMoreClickHandler}
        />
      </div>
    </Wrapper>
  );
};

export default AboutCompany;
