import React from "react";

import StyledInput from "./Input.styled";

import Label from "../Label";

const Input = (props) => {
  return (
    <Label fieldName={props.name}>
      {props.labelTitle}
      <StyledInput {...props}></StyledInput>
      {props.addendum}
    </Label>
  );
};

export default Input;
