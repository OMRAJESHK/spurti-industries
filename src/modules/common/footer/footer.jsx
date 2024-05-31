import Flexbox from "@/components/flexbox/flexbox";
import React from "react";
import classes from "./footer.module.css";
import CustomImage from "@/components/customImage";
import facebookIcon from "../../../asset/svgs/facebook.svg";
import linkedinIcon from "../../../asset/svgs/linkedIn.svg";
import twitterIcon from "../../../asset/svgs/twitter.svg";
import mailIcon from "../../../asset/svgs/mail.svg";

const Footer = () => {
  return (
    <Flexbox gap={10} classProp={classes["footer-wrapper"]}>
      <div className={classes["footer-item-wrapper"]}>
        <h2 className={classes["footer-company-title"]}>Spurthi Industries</h2>
        <div className={classes["footer-address-wrapper"]}>
          <p>
            No 65/4 4th Cross KG Shivanna Building Kaveripura, Kamakshipalya
            Bangalore Bengaluru - 560079, Karnataka, India
          </p>
        </div>
      </div>
      <div className={classes["footer-item-wrapper"]}>
        <h2 className={classes["footer-title"]}>Quick Contacts</h2>
        <div className={classes["footer-contacts-wrapper"]}>
          <p>Mail : spurthi_industries2003@yahoo.co.in</p>
          <p>Mobile : +91 9844130388</p>
        </div>
      </div>
      <div className={classes["footer-item-wrapper"]}>
        <h2 className={classes["footer-title"]}>Social Media Links</h2>
        <div className={classes["footer-contacts-wrapper"]}>
          <CustomImage src={facebookIcon} classProp={classes["card-img"]} />
          <CustomImage src={linkedinIcon} classProp={classes["card-img"]} />
          <CustomImage src={twitterIcon} classProp={classes["card-img"]} />
          <CustomImage src={mailIcon} classProp={classes["card-img"]} />
        </div>
      </div>
    </Flexbox>
  );
};

export default Footer;
