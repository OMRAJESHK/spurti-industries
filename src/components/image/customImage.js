import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const CustomImage = (props) => {
  return (
    <div>
      <Image
        src="public\vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
    </div>
  );
};

CustomImage.propTypes = {};

export default CustomImage;
