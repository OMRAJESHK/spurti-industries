import Flexbox from "@/components/flexbox/flexbox";
import React from "react";
import classes from "./home.module.css";
import mailIcon from "../../asset/svgs/mail.svg";
import phoneIcon from "../../asset/svgs/phone.svg";
import CustomImage from "@/components/customImage";

const SocialMedia = () => {
  return (
    <Flexbox
      justifyContent="space-around"
      alignItems="center"
      classProp={classes["socialmedia-wrapper"]}
    >
      <div>
        <article className={classes["socialmedia-text"]}>
          <span>
            <CustomImage src={mailIcon} classProp={classes["card-img"]} />
          </span>
          spurthi_industries2003@yahoo.co.in
        </article>
      </div>
      <article className={classes["socialmedia-text"]}>
        <span>
          <CustomImage src={phoneIcon} classProp={classes["card-img"]} />
        </span>
        +91 9844130388
      </article>
    </Flexbox>
  );
};

export default SocialMedia;
