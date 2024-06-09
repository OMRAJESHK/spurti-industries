import React from "react";
import classes from "./aboutus.module.css";
import Flexbox from "@/components/flexbox/flexbox";
import CustomImage from "@/components/customImage";
import lmscertificate from "../../asset/images/lms-certificate.jpg";

const ImgViewer = ({ setShowCertificate }) => {
  return (
    <div className={classes["imgviewer-wrapper"]}>
      <div className={classes["imgviewer"]}>
        <Flexbox justifyContent="space-between" alignItems="center">
          <h2>LMS Certified</h2>
          <button onClick={() => setShowCertificate(false)}>&#x2716;</button>
        </Flexbox>
        <CustomImage
          src={lmscertificate}
          alt="logo"
          width={650}
          height={650}
          classProp={classes["fullscreen-img"]}
        />
      </div>
    </div>
  );
};

export default ImgViewer;
