"use client";
import CustomImage from "@/components/customImage";
import React from "react";
import aboutImg from "../../asset/images/image-6.jpg";
import classes from "./home.module.css";
import Wrapper from "./common/wrapper";
import Button from "@/components/button/button";
import { useRouter } from "next/navigation";
import { pageRoutes } from "@/routes/routes";
import en from "@/localization/en";
import { H1 } from "@/components/headings/headings";

const AboutCompany = () => {
  const router = useRouter();

  const onKnoMoreClickHandler = () => {
    router.push(pageRoutes.aboutus, { scroll: false });
  };

  return (
    <Wrapper>
      <div className={classes["about-image-wrapper"]}>
        <CustomImage src={aboutImg} alt="logo" width={400} height={400} />
      </div>
      <div className={classes["about-description-wrapper"]}>
        <H1>{en.aboutusPage.ABOUT_THE_COMPANY}</H1>
        {en.aboutusPage.description.map((desc) => (
          <p key={desc}>{desc}</p>
        ))}
        <Button label={en.KNOW_MORE} onClick={onKnoMoreClickHandler} />
      </div>
    </Wrapper>
  );
};

export default AboutCompany;
