import React from "react";

import StyledCustomInput from "./CustomInput.styled";

import Label from "../Label";

const CustomInput = (props) => {
  return (
    <Label fieldName={props.name}>
      {props.labelTitle}
      <StyledCustomInput {...props}></StyledCustomInput>
      {props.addendum}
    </Label>
  );
};

export default CustomInput;
