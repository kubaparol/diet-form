import React, { useState } from "react";

import StyledDropdown from "./Dropdown.styled";

import CustomInput from "../CustomInput";
import Button from "../Button";

import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledDropdown {...props}>
      <span onClick={() => (open === false ? setOpen(true) : setOpen(false))}>
        <Button onClick={(e) => e.preventDefault()} icon={open === false ? faAngleDown : faAngleUp} />
      </span>
      <ul>
        {props.dropdownName}
        {props.items &&
          open &&
          props.items.map((item, index) => (
            <li key={index}>
              <CustomInput type={props.type} name={item.name} placeholder={item.title} addendum={item.add} value={item.value} onChange={item.onChange} />
            </li>
          ))}
      </ul>
    </StyledDropdown>
  );
};

export default Dropdown;
