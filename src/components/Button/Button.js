import React from "react";

import StyledButton from "./Button.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => {
  return (
    <StyledButton {...props}>
      {props.icon ? <FontAwesomeIcon icon={props.icon} /> : null}
      {props.children}
    </StyledButton>
  );
};

export default Button;
