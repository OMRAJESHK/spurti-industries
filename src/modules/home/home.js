import React from "react";
import classess from "./home.module.css";
import AboutCompany from "./aboutCompany";
import CompanyScore from "./companyScore";
import ContactUs from "../common/contactUs/contactUs";

const Home = () => {
  return (
    <div className={classess["home-wrapper"]}>
      <AboutCompany />
      <CompanyScore />
      <ContactUs />
    </div>
  );
};

export default Home;
