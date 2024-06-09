import React from "react";
import ContactUs from "../common/contactUs/contactUs";
import Footer from "../common/footer/footer";
import Copyrights from "../common/copyrights";
import Wrapper from "../home/common/wrapper";
import Flexbox from "@/components/flexbox/flexbox";
import Card from "@/components/card/card";
import classes from "./contactus.module.css";
import CustomImage from "@/components/customImage";
import mailIcon from "../../asset/svgs/mail.svg";
import phoneIcon from "../../asset/svgs/phone.svg";
import addressIcon from "../../asset/svgs/address.svg";
import { locationDetails } from "../common/footer/data";

const Contactus = () => {
  return (
    <div>
      <Wrapper>
        <section className={classes["contactus-section-wrapper"]}>
          <Flexbox justifyContent="space-between" gap={20}>
            <Card classProp={classes["contact-card-item"]}>
              <Card.Header>
                <CustomImage
                  src={addressIcon}
                  classProp={classes["card-img"]}
                  width={100}
                  height={100}
                />
                <div>
                  <strong>Address</strong>
                </div>
              </Card.Header>
              <Card.Body>
                <p>{locationDetails.address}</p>
              </Card.Body>
            </Card>
            <Card classProp={classes["contact-card-item"]}>
              <Card.Header>
                <CustomImage src={phoneIcon} classProp={classes["card-img"]} />
                <div>
                  <strong>Call Us</strong>
                </div>
              </Card.Header>
              <Card.Body>
                <p>{locationDetails.mobile}</p>
              </Card.Body>
            </Card>
            <Card classProp={classes["contact-card-item"]}>
              <Card.Header>
                <CustomImage src={mailIcon} classProp={classes["card-img"]} />
                <div>
                  <strong>Mail Us</strong>
                </div>
              </Card.Header>
              <Card.Body>
                <p className={classes["mail-text"]}>{locationDetails.mail}</p>
              </Card.Body>
            </Card>
          </Flexbox>
        </section>
      </Wrapper>
      <ContactUs />
      <Footer />
      <Copyrights />
    </div>
  );
};

export default Contactus;
