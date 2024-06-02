import React from "react";
import Goals from "./goals";
import WhoWeAre from "./whoWeAre";
import ContactUs from "../common/contactUs/contactUs";
import Footer from "../common/footer/footer";
import Copyrights from "../common/copyrights";
import Flexbox from "@/components/flexbox/flexbox";
import classes from "./aboutus.module.css";

const Aboutus = () => {
  return (
    <>
      <Flexbox
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        classProp={classes["whychoose-wrapper"]}
      >
        <section className={classes["why-choose-section"]}>
          <h2 className={classes["whoweare-title"]}>Who We Are</h2>
          <p>
            {`To continuously improve our products and service, we believe that a
            perfect understanding of the clients need is of crucial importance
            and also adhere to the concept of corporate social responsibility.`}
          </p>
          <p>
            {`Spurthi Industries started its journey in the early year of 2000(to
            be changed) under the leadership of Shri. Pradeep Deshpande with a
            product center lathes. Later added 'Single Spindle Automats'
            Multiple spindles, CNC Turning Centers, Vertical Machining Centers.`}
          </p>
          <p>
            {`Enhanced manufacturing area from 10,000 Sq.Ft. area with well
            sophisticated and modernized equipment's and tools.`}
          </p>
        </section>
      </Flexbox>
      <Goals />
      <WhoWeAre />
      <ContactUs />
      <Footer />
      <Copyrights />
    </>
  );
};

export default Aboutus;
