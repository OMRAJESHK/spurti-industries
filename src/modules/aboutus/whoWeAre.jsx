import Flexbox from "@/components/flexbox/flexbox";
import React from "react";
import aboutUsImg from "../../asset/images/image-8.jpg";
import lmscertificate from "../../asset/images/lms-certificate.jpg";
import classes from "./aboutus.module.css";
import CustomImage from "@/components/customImage";
import Wrapper from "../home/common/wrapper";
import { certificateData } from "./data";
import Card from "@/components/card/card";

const WhoWeAre = ({ setShowCertificate }) => {
  const onCertificateClick = () => {
    setShowCertificate(true);
  };
  return (
    <Wrapper>
      <Flexbox
        justifyContent="space-around"
        classProp={classes["whoweare-Wrapper"]}
      >
        <div className={classes["why-choose-item-wrapper"]}>
          <section>
            <h2>{certificateData.title}</h2>
            <div className={classes["rewards-wrapper"]}>
              {certificateData.list.certificates.map((certificate) => (
                <Card
                  key={certificate.id}
                  classProp={classes["certificate-carditem"]}
                >
                  <p>{certificate.title}</p>
                </Card>
              ))}
            </div>
            <h5 className={classes["award-title"]}>
              {certificateData.list.awardTitle}
            </h5>
            <small>{certificateData.list.awardText}</small>
            <div className={classes["rewards-wrapper"]}>
              {certificateData.list.awards.map((award) => (
                <Card key={award.id} classProp={classes["award-carditem"]}>
                  <p>{award.title}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>
        <div
          className={classes["whoweare-image-wrapper"]}
          onClick={onCertificateClick}
        >
          <CustomImage
            src={lmscertificate}
            alt="logo"
            width={450}
            height={450}
            classProp={classes["whoweare-img"]}
          />
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
