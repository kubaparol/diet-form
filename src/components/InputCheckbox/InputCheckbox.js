import React from "react";

import StyledInputCheckbox from "./InputCheckbox.styled";

import Label from "../Label";

const InputCheckbox = (props) => {
  return (
    <Label fieldName={props.name}>
      {props.labelTitle}
      <StyledInputCheckbox {...props} type="checkbox" />
    </Label>
  );
};

export default InputCheckbox;
