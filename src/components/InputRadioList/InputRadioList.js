import React from "react";

import StyledInputRadioList from "./InputRadioList.styled";

import InputRadio from "../InputRadio";

const InputRadioList = (props) => {
  return (
    <>
      <StyledInputRadioList {...props}>
        {props.title}
        {props.items.map((item, index) => (
          <InputRadio key={index} name={item.name} labelTitle={item.labelTitle} value={item.value} onChange={props.onChange} checked={props.value === item.value ? true : false} />
        ))}
      </StyledInputRadioList>
      <p style={{ marginBottom: "20px", textAlign: "center", color: "red" }}>{props.alert}</p>
    </>
  );
};

export default InputRadioList;
