import React from "react";
import Image from "src/components/common/atoms/image";
import StayTunedImg from "./StayTuned.svg";

const StayTuned = (props) => (
  <Image src={StayTunedImg} alt="StayTunedImg" {...props} />
);

export default StayTuned;
