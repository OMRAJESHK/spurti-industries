import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Flexbox from "../flexbox/flexbox";
import classes from "./customImage.module.css";
import Loader from "../loader/loader";
import NotFound from "../../../assets/svg/notFound";

const CustomImage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const {
    src = "",
    alt = "Placeholder Image",
    width = 50,
    height = 50,
    classProp = "",
    onLoad = () => {},
    onError = () => {},
    styleProp = {},
    ...restProps
  } = props;

  const onImageLoad = () => {
    setIsLoading(false);
    setIsError(false);
    onLoad();
  };
  const onImageError = () => {
    setIsLoading(false);
    setIsError(true);

    onError();
  };

  const PlaceHolderImage = () => (
    <Flexbox
      justifyContent="center"
      alignItems="center"
      styleProp={{ height: "100%" }}
    >
      <NotFound width={500} height={300} />
    </Flexbox>
  );

  return (
    <div className={classes["image-container"]}>
      {isLoading && <Loader height="100%" />}
      <Image
        aria-label={alt}
        className={`${classProp && classProp}`}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={onImageLoad}
        onError={onImageError}
        style={{
          ...styleProp,
        }}
        {...restProps}
      />
      {isError && <PlaceHolderImage />}
    </div>
  );
};

CustomImage.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  alt: PropTypes.string,
  classProp: PropTypes.string,
  styleProp: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  restProps: PropTypes.object,
};

export default CustomImage;
