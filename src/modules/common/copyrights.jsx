import Flexbox from "@/components/flexbox/flexbox";
import React from "react";

const Copyrights = () => {
  return (
    <Flexbox
      justifyContent="center"
      styleProp={{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}
    >
      <p style={{ fontWeight: 600, fontSize: ".85rem" }}>
        {`© copyrights ${new Date().getFullYear()} Spurthi Industries | All Rights Reserved.`}
      </p>
    </Flexbox>
  );
};

export default Copyrights;
