import React from "react";
import Image from "src/components/common/atoms/image";
import DateFieldImg from "./DateField.png";

const DateField = (props) => (
  <Image src={DateFieldImg} alt="DateFieldImg" {...props} />
);

export default DateField;
