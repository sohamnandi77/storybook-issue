import React from "react";
import Image from "src/components/common/atoms/image";
import DoodleTransparentBackgroundImg from "./DoodleTransparentBackground.png";

const DoodleTransparentBackground = (props) => (
  <Image
    src={DoodleTransparentBackgroundImg}
    alt="DoodleTransparentBackgroundImg"
    {...props}
  />
);

export default DoodleTransparentBackground;
