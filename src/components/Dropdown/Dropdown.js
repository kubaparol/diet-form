import React, { useState } from "react";

import StyledDropdown from "./Dropdown.styled";

import Input from "../Input";
import Button from "../Button";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledDropdown {...props}>
      <ul>
        {props.dropdownName}
        <span onClick={() => (open === false ? setOpen(true) : setOpen(false))}>
          <Button onClick={(e) => e.preventDefault()}>
            {open === false ? "Rozwiń" : "Zwiń"}
          </Button>
        </span>
        {props.items &&
          open &&
          props.items.map((item, index) => (
            <li key={index}>
              <Input
                type={props.type}
                name={item.name}
                labelTitle={item.title}
                addendum={item.add}
              />
            </li>
          ))}
        {open && <Button>Zapisz</Button>}
      </ul>
    </StyledDropdown>
  );
};

export default Dropdown;
