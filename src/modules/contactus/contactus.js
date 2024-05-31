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

const Contactus = () => {
  return (
    <div>
      <Wrapper>
        <section className={classes["contactus-section-wrapper"]}>
          <Flexbox justifyContent="space-between">
            <Card>
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
                <p>
                  No 65/4 4th Cross KG Shivanna Building Kaveripura,
                  Kamakshipalya Bangalore Bengaluru - 560079, Karnataka, India
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <CustomImage src={phoneIcon} classProp={classes["card-img"]} />
                <div>
                  <strong>Call Us</strong>
                </div>
              </Card.Header>
              <Card.Body>
                <p> +91 9844130388</p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <CustomImage src={mailIcon} classProp={classes["card-img"]} />
                <div>
                  <strong>Mail Us</strong>
                </div>
              </Card.Header>
              <Card.Body>
                <p>spurthi_industries2003@yahoo.co.in</p>
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
