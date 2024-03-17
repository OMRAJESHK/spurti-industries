import React from "react";
import PropTypes from "prop-types";
import { usePathname } from "next/navigation";
import classes from "./navbar.module.css";
import Link from "next/link";

const NavItem = ({ path = "/", label = "" }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${classes["nav-item"]} ${
        pathname === path && classes["active-link"]
      }`}
      href={path}
    >
      {label}
    </Link>
  );
};

NavItem.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
};

export default NavItem;
