"use client";
import React from "react";
import PropTypes from "prop-types";
import classes from "./navbar.module.css";
import Link from "next/link";
import CustomImage from "../customImage";
import logo from "../../asset/images/spurthi-industries-logo.png";
import Flexbox from "../flexbox/flexbox";
import { navbars } from "./common";
import { usePathname } from "next/navigation";

const Navbar = (props) => {
  const pathname = usePathname();

  console.log("routerrouter", pathname);
  return (
    <div className={classes["nav-wrapper"]}>
      <nav className={classes["navbar"]}>
        <Flexbox justifyContent="flex-start" alignItems="center" gap={10}>
          <CustomImage
            src={logo}
            alt="logo"
            width={100}
            height={100}
            classProp={classes["logo-img"]}
          />
          <span className={classes["logo-title"]}>Spurthi Industries</span>
        </Flexbox>
        <div className={classes["menu-toggle"]} id="mobile-menu">
          <span className={classes["bar"]}></span>
          <span className={classes["bar"]}></span>
          <span className={classes["bar"]}></span>
        </div>
        <ul className={classes["nav"]}>
          {navbars.map((navItem) => (
            <li key={navItem.id}>
              <Link
                className={`${classes["nav-item"]} ${pathname === navItem.path ? classes["nav-active"] : ""}`}
                href={navItem.path}
              >
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={classes["grad-bar"]} />
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
