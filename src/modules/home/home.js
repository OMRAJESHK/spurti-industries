import React from "react";
import classess from "./home.module.css";
import AboutCompany from "./aboutCompany";
import CompanyScore from "./companyScore";
import ContactUs from "../common/contactUs/contactUs";
import Carousel from "@/components/carousel/carousel";
import Footer from "../common/footer/footer";
import Copyrights from "../common/copyrights";
import { carousels } from "@/components/carousel/constants";

const Home = () => {
  return (
    <div className={classess["home-wrapper"]}>
      <Carousel slides={carousels} />
      <AboutCompany />
      <CompanyScore />
      <ContactUs />
      <Footer />
      <Copyrights />
    </div>
  );
};

export default Home;
