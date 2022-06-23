import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StyledButton from "./Button.styled";

const Button = (props) => {
  return (
    <StyledButton {...props}>
      {props.children}
      {props.icon ? <FontAwesomeIcon icon={props.icon} /> : null}
    </StyledButton>
  );
};

export default Button;
