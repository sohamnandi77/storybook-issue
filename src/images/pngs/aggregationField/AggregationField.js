import React from "react";
import Image from "src/components/common/atoms/image";
import AggregationFieldImg from "./AggregationField.png";

const AggregationField = (props) => (
  <Image src={AggregationFieldImg} alt="AggregationFieldImg" {...props} />
);

export default AggregationField;
