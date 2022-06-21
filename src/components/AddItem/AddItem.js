import React, { useEffect, useState } from "react";

import StyledAddItem from "./AddItem.styled";

import CustomInput from "../CustomInput";
import Button from "../Button";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddItem = (props) => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    props.getItems(items);
  });

  const clickHandler = (e) => {
    e.preventDefault();
    if (value !== "") {
      setItems([...items, value]);
      setValue("");
      props.deleteAlert();
    }
  };

  return (
    <>
      <StyledAddItem {...props}>
        <Button onClick={clickHandler} icon={faPlus} />
        <CustomInput type="text" name={props.name} labelTitle={props.labelTitle} onChange={(e) => setValue(e.target.value)} />
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </StyledAddItem>
      <p style={{ marginBottom: "20px", textAlign: "center", color: "red" }}>{props.alert}</p>
    </>
  );
};

export default AddItem;
