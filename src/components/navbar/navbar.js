"use client";
import React from "react";
import classes from "./navbar.module.css";
import Link from "next/link";
import CustomImage from "../customImage";
import logo from "../../asset/images/spurthi-industries-logo.png";
import Flexbox from "../flexbox/flexbox";
import { navbars } from "./common";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className={classes["nav"]}>
        <input
          type="checkbox"
          id="nav-check"
          className={classes["nav-check"]}
        />
        <div className={classes["nav-header"]}>
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
        </div>
        <div className={classes["nav-btn"]}>
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <ul className={classes["nav-list"]}>
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
    </header>
  );
};

Navbar.propTypes = {};

export default Navbar;
