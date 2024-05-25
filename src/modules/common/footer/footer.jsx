import Flexbox from "@/components/flexbox/flexbox";
import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <Flexbox gap={10} classProp={classes["footer-wrapper"]}>
      <div className={classes["footer-item-wrapper"]}>
        <h2 className={classes["footer-company-title"]}>Spurthi Industries</h2>
        <div className={classes["footer-address-wrapper"]}>
          <p>
            KARNATAKA AUTOMATS PVT. LTD. #143/F, AKS Building, Sy. No.
            70.180.181, Bommasandra Industrial Area, Hebbagodi Village,
            Bangalore KA 560099
          </p>
        </div>
      </div>
      <div className={classes["footer-item-wrapper"]}>
        <h2 className={classes["footer-title"]}>Quick Contacts</h2>
        <div className={classes["footer-contacts-wrapper"]}>
          <p>Mail : support@spurthiindustries.com</p>
          <p>Mobile : +91 9865230124</p>
          <p>Fax : +91 (80) 45145500</p>
        </div>
      </div>
      <div className={classes["footer-item-wrapper"]}>
        <h2 className={classes["footer-title"]}>Social Media Links</h2>
        <div className={classes["footer-contacts-wrapper"]}>
          <p>Mail : support@spurthiindustries.com</p>
          <p>Mobile : +91 9865230124</p>
          <p>Fax : +91 (80) 45145500</p>
        </div>
      </div>
    </Flexbox>
  );
};

export default Footer;
