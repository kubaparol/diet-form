import React, { useState } from "react";

import StyledAddItem from "./AddItem.styled";

import CustomInput from "../CustomInput";
import Button from "../Button";

const AddItem = (props) => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const clickHandler = (e) => {
    e.preventDefault();
    setItems([...items, value]);
    setValue("");
  };

  return (
    <StyledAddItem {...props}>
      <CustomInput
        type="text"
        name={props.name}
        labelTitle={props.labelTitle}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={clickHandler}>Dodaj</Button>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </StyledAddItem>
  );
};

export default AddItem;
