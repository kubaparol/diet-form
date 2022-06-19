import React from "react";

import StyledInputCheckboxList from "./InputCheckboxList.styled";

import InputCheckbox from "../InputCheckbox";

const InputCheckboxList = (props) => {
  return (
    <StyledInputCheckboxList>
      {props.title}
      {props.items.map((item, index) => (
        <InputCheckbox key={index} name={item.name} labelTitle={item.labelTitle} />
      ))}
    </StyledInputCheckboxList>
  );
};

export default InputCheckboxList;
