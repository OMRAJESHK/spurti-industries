import Flexbox from "@/components/flexbox/flexbox";
import React from "react";
import classes from "./home.module.css";

const SocialMedia = () => {
  return (
    <Flexbox
      justifyContent="space-between"
      alignItems="center"
      classProp={classes["socialmedia-wrapper"]}
    >
      <div>
        <p className={classes["socialmedia-text"]}>
          support@spurthiindustry.com
        </p>
      </div>
      <p className={classes["socialmedia-text"]}>+91 8956223004</p>
      <p className={classes["socialmedia-text"]}>
        customer-care@spurthiindustry.com
      </p>
    </Flexbox>
  );
};

export default SocialMedia;
