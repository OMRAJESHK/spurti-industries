import Flexbox from "@/components/flexbox/flexbox";
import React from "react";
import aboutUsImg from "../../asset/images/image-8.jpg";
import classes from "./aboutus.module.css";
import CustomImage from "@/components/customImage";
import Wrapper from "../home/common/wrapper";

const WhoWeAre = () => {
  return (
    <Wrapper>
      <Flexbox
        justifyContent="space-around"
        classProp={classes["whoweare-Wrapper"]}
      >
        <div className={classes["why-choose-item-wrapper"]}>
          <section>
            <h2>Spurthi Industries is certified for</h2>
            <ul>
              <li>1998: ISO 9002 :1994 Certification</li>
              <li>2003: ISO 9001 :2000 Certification</li>
              <li>ISO 14001:2004 EMS Certification</li>
            </ul>
            <p>
              Recognition and awards for delivering quality products has become
              a part of Spurthi Industries culture, to name a few
            </p>
            <ul>
              <li>1991 & 1992 - Performance Award.</li>
              <li>2001 & 2002 - Award for Excellence.</li>
              <li>
                2016 - Awarded as global “P” - Preferred supplier by BOSCH
              </li>
            </ul>
          </section>
        </div>
        <div className={classes["whoweare-image-wrapper"]}>
          <CustomImage
            src={aboutUsImg}
            alt="logo"
            width={350}
            height={350}
            classProp={classes["whoweare-img"]}
          />
        </div>
      </Flexbox>
    </Wrapper>
  );
};

export default WhoWeAre;
