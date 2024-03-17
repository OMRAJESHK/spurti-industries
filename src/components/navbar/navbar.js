"use client";
import React from "react";
import classes from "./navbar.module.css";
import NavItem from "./navItem";
import { spurtiIndustriesNavbars } from "./constants";
import CustomImage from "../image/customImage";

const Bar = () => {
  [0, 1, 2].map((item) => <span key={item} className={classes["bar"]} />);
};

const RenderNavbar = () => (
  <ul className={classes["nav"]}>
    {spurtiIndustriesNavbars.map((page) => (
      <NavItem key={crypto.randomUUID()} path={page.path} label={page.label} />
    ))}
  </ul>
);

const Navbar = () => {
  return (
    <div className={classes["nav-wrapper"]}>
      <div className={classes["grad-bar"]}></div>
      <nav className={classes["navbar"]}>
        <div className={classes["brand-img-wrapper"]}>
          <CustomImage
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png"
            alt="brand Logo"
            classProp={classes["brand-img"]}
            width={100}
            height={100}
          />
        </div>
        <div className={classes["menu-toggle"]} id="mobile-menu">
          <Bar />
        </div>
        <RenderNavbar />
      </nav>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
