import PropTypes from "prop-types";
import React from "react";

const Image = (props) => {
  const { src, alt, width, height, className, loading } = props;
  return (
    <img
      {...props}
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.string,
};

Image.defaultProps = {
  className: "",
  loading: "lazy",
};

export default Image;
