import React from "react";

import StyledInputRadio from "./InputRadio.styled";

import Label from "../Label";

const InputRadio = (props) => {
  return (
    <Label fieldName={props.name}>
      {props.labelTitle}
      <StyledInputRadio {...props} type="radio" />
    </Label>
  );
};

export default InputRadio;
