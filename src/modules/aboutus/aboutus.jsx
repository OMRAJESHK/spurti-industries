"use client";
import React, { useState } from "react";
import Goals from "./goals";
import WhoWeAre from "./whoWeAre";
import ContactUs from "../common/contactUs/contactUs";
import Footer from "../common/footer/footer";
import Copyrights from "../common/copyrights";
import Flexbox from "@/components/flexbox/flexbox";
import classes from "./aboutus.module.css";
import { aboutusSection } from "./data";
import ImgViewer from "./imgViewer";

const Aboutus = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  return (
    <>
      <Flexbox
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        classProp={classes["whychoose-wrapper"]}
      >
        <section className={classes["why-choose-section"]}>
          <h2 className={classes["whoweare-title"]}>{aboutusSection.title}</h2>
          {["p1", "p2", "p3"].map((item) => (
            <p key={item}>{aboutusSection[item]}</p>
          ))}
        </section>
      </Flexbox>
      <Goals />
      <WhoWeAre setShowCertificate={setShowCertificate} />
      <ContactUs />
      <Footer />
      <Copyrights />
      {showCertificate && <ImgViewer setShowCertificate={setShowCertificate} />}
    </>
  );
};

export default Aboutus;
