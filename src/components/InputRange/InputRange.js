import React, { useState } from "react";

import StyledInputRange from "./InputRange.styled";

import Label from "../Label";

const InputRange = (props) => {
  return (
    <Label fieldName={props.name}>
      {props.labelTitle}
      <StyledInputRange {...props} type="range" />
      <span>{props.text}</span>
    </Label>
  );
};

export default InputRange;
