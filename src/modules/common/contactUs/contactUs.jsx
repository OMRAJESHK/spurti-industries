"use client";
import React, { useState } from "react";
import Flexbox from "@/components/flexbox/flexbox";
import CustomImage from "@/components/customImage";
import spurtiMap from "../../../asset/images/si-in-maps.png";
import Wrapper from "@/modules/home/common/wrapper";
import classes from "./contactUs.module.css";
import Input from "@/components/input/input";
import Textarea from "@/components/input/textarea";
import Button from "@/components/button/button";
import Notification from "./notification";
import { ProdBaseURL } from "@/routes/routes";
import { H2 } from "@/components/headings/headings";

const INITIAL_STATE = { name: "", email: "", message: "" };

const ContactUs = () => {
  const [query, setQuery] = useState(INITIAL_STATE);
  const [formResponse, setFormResponse] = useState({ open: false });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    const query = { [name]: value };
    setQuery((prev) => ({ ...prev, ...query }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const postResponse = await fetch(`${ProdBaseURL}/api/contactus`, {
      method: "POST",
      body: JSON.stringify(query),
    });
    const result = await postResponse.json();
    setFormResponse({ ...result, open: true });
    setQuery(INITIAL_STATE);
  };

  return (
    <Wrapper>
      <Flexbox gap={0} justifyContent="space-between">
        <div className={classes["contactus-form-wrapper"]}>
          <H2 className={classes["contactus-title"]}>
            Contact Us for any Queries
          </H2>
          <form onSubmit={onSubmitHandler}>
            <Input
              label="Name :"
              name="name"
              required
              type="text"
              value={query.name}
              onChange={onChangeHandler}
              placeholder="enter you name"
            />
            <Input
              label="Email :"
              name="email"
              type="email"
              required
              value={query.email}
              onChange={onChangeHandler}
              placeholder="enter you email"
            />
            <br />
            <Textarea
              label="Messagse :"
              name="message"
              value={query.message}
              required
              onChange={onChangeHandler}
              placeholder="enter you query"
            />
            <div className={classes["form-footer-wrapper"]}>
              <Notification
                open={formResponse.open}
                message={formResponse.message}
                status={formResponse.status}
                onClose={setFormResponse}
              />
              <Button label="Send" type="submit" />
            </div>
          </form>
        </div>
        <div className={classes["contactus-map-wrapper"]}>
          <a href="https://maps.app.goo.gl/VxLm7YjLbtb7bRh96" target="_blank">
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
