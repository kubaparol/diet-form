import React from "react";

import StyledInputRadioList from "./InputRadioList.styled";

import InputRadio from "../InputRadio";

const InputRadioList = (props) => {
  return (
    <StyledInputRadioList>
      {props.title}
      {props.items.map((item, index) => (
        <InputRadio key={index} name={item.name} labelTitle={item.labelTitle} />
      ))}
    </StyledInputRadioList>
  );
};

export default InputRadioList;
