"use client";
import React, { useState } from "react";
import Flexbox from "@/components/flexbox/flexbox";
import CustomImage from "@/components/customImage";
import spurtiMap from "../../../asset/images/spurthiMap.png";
import Wrapper from "@/modules/home/common/wrapper";
import classes from "./contactUs.module.css";

const INITIAL_STATE = { name: "", email: "", message: "" };

const ContactUs = () => {
  const [query, setQuery] = useState(INITIAL_STATE);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    const query = { [name]: value };
    setQuery((prev) => ({ ...prev, ...query }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("kdhgfdsjhf", query);

    setQuery(INITIAL_STATE);
  };

  return (
    <Wrapper>
      <Flexbox>
        <div className={classes["contactus-form-wrapper"]}>
          <h2>Feel Free to Contact Us for any Queries.</h2>
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="name">Name : </label>
            <input
              name="name"
              required
              type="text"
              value={query.name}
              onChange={onChangeHandler}
              className=""
            />
            <label htmlFor="email">Email : </label>
            <input
              name="email"
              type="email"
              required
              value={query.email}
              onChange={onChangeHandler}
            />
            <br />
            <label htmlFor="message">Message : </label>
            <textarea
              name="message"
              rows={4}
              required
              value={query.message}
              onChange={onChangeHandler}
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className={classes["contactus-map-wrapper"]}>
          <a href="https://maps.app.goo.gl/KFkbwFq1iaRAuER26" target="_blank">
            <CustomImage
              src={spurtiMap}
              alt="logo"
              width={500}
              height={500}
              classProp={classes["map-img"]}
            />
          </a>
        </div>
      </Flexbox>
    </Wrapper>
  );
};

export default ContactUs;
