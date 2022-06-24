import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import StyledDropdown from "./Dropdown.styled";

import Row from "../Row";
import Label from "../Label";
import Field from "../Field";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledDropdown>
      <header>
        <p>{props.title}</p>
        <p>
          <FontAwesomeIcon
            onClick={open ? () => setOpen(false) : () => setOpen(true)}
            icon={open ? faAngleDown : faAngleRight}
          />
        </p>
      </header>
      {open
        ? props.options.map((option, index) => {
            return (
              <Row key={index}>
                <Label fieldName={option.fieldName}>{option.name}</Label>
                <Field
                  type={option.type ? option.type : option.fieldName}
                  name={option.fieldName}
                  value={option.value}
                  onChange={option.onChange}
                />
              </Row>
            );
          })
        : null}
    </StyledDropdown>
  );
};

export default Dropdown;
