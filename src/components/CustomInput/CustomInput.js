import React from "react";

import StyledCustomInput from "./CustomInput.styled";

import Label from "../Label";

const CustomInput = (props) => {
  return (
    <Label fieldName={props.name} inputType={props.inputType}>
      {props.labelTitle}
      <StyledCustomInput {...props}></StyledCustomInput>
      <span style={{ marginBottom: "20px", textAlign: "center", color: "red" }}>{props.alert}</span>
    </Label>
  );
};

export default CustomInput;
