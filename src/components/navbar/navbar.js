import React from "react";
import PropTypes from "prop-types";
import classes from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes["nav-wrapper"]}>
      <div className={classes["grad-bar"]} />
      <nav className={classes["navbar"]}>
        <img
          className={classes["logo-image"]}
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png"
          alt="Company Logo"
        />
        <div className={classes["menu-toggle"]} id="mobile-menu">
          <span className={classes["bar"]}></span>
          <span className={classes["bar"]}></span>
          <span className={classes["bar"]}></span>
        </div>
        <ul className={classes["nav"]}>
          <li className={classes["nav-item"]}>
            <a href="#">Home</a>
          </li>
          <li className={classes["nav-item"]}>
            <a href="#">About</a>
          </li>
          <li className={classes["nav-item"]}>
            <a href="#">Work</a>
          </li>
          <li className={classes["nav-item"]}>
            <a href="#">Careers</a>
          </li>
          <li className={classes["nav-item"]}>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
