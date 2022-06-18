import React from "react";

import StyledInput from "./Input.styled";

import Label from "../Label";

const Input = (props) => {
  return (
    <Label fieldName={props.name}>
      {props.labelTitle}
      <StyledInput {...props}></StyledInput>
    </Label>
  );
};

export default Input;
