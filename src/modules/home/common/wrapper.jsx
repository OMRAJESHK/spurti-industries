import React from "react";
import classes from "../home.module.css";
import Flexbox from "@/components/flexbox/flexbox";

const Wrapper = ({ children, classProp = "" }) => {
  return (
    <Flexbox
      gap={20}
      classProp={`${classProp ? classProp : ""} ${classes["wrapper"]}`}
    >
      {children}
    </Flexbox>
  );
};

export default Wrapper;
