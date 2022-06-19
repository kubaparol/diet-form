import React, { useState } from "react";

import StyledInputRange from "./InputRange.styled";

import Label from "../Label";

const InputRange = (props) => {
  const [range, setRange] = useState("");

  const rangeHandler = (e) => {
    const value = e.target.value;
    if (value < 33) setRange("Rzadko");
    if (value >= 33 && value < 66) setRange("Od czasu do czasu");
    if (value >= 66 && value < 99) setRange("Często");
    if (value >= 99) setRange("Bardzo często");
  };
  return (
    <Label fieldName={props.name}>
      {props.labelTitle}
      <StyledInputRange {...props} type="range" min="0" max="99" step="33" onChange={rangeHandler} />
      <span>{range}</span>
    </Label>
  );
};

export default InputRange;
