import Flexbox from "@/components/flexbox/flexbox";
import React from "react";
import classes from "./footer.module.css";
import CustomImage from "@/components/customImage";
import { locationDetails } from "./data";
import { H2 } from "@/components/headings/headings";

const GetSocialLinks = ({ icons }) => {
  return Object.keys(icons).map((icon) => (
    <CustomImage key={icon} src={icons[icon]} classProp={classes["card-img"]} />
  ));
};

const Footer = () => {
  const { mail, mobile, address, title, mediaLinksIcons } = locationDetails;
  return (
    <Flexbox gap={10} classProp={classes["footer-wrapper"]}>
      <div className={classes["footer-item-wrapper"]}>
        <H2 className={classes["footer-company-title"]}>{title}</H2>
        <div className={classes["footer-address-wrapper"]}>
          <p>{address}</p>
        </div>
      </div>
      <div className={classes["footer-item-wrapper"]}>
        <H2 className={classes["footer-title"]}>Quick Contacts</H2>
        <div className={classes["footer-contacts-wrapper"]}>
          <p>{mail}</p>
          <p>{mobile}</p>
        </div>
      </div>
      <div className={classes["footer-item-wrapper"]}>
        <H2 className={classes["footer-title"]}>Social Media Links</H2>
        <div className={classes["footer-social-links-wrapper"]}>
          <GetSocialLinks icons={mediaLinksIcons} />
        </div>
      </div>
    </Flexbox>
  );
};

export default Footer;
