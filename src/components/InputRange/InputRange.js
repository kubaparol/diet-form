import React from "react";

import StyledInputRange from "./InputRange.styled";

import Label from "../Label";

const InputRange = (props) => {
  return (
    <Label fieldName={props.name}>
      {props.labelTitle}
      <StyledInputRange {...props} type="range" />
      <span style={{ textAlign: "center", marginBottom: "15px" }}>{props.text}</span>
    </Label>
  );
};

export default InputRange;
