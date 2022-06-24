import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StyledButton from "./Button.styled";

const Button = (props) => {
  return (
    <StyledButton {...props}>
      {props.icon ? <FontAwesomeIcon icon={props.icon} /> : null}{" "}
      {props.children}
    </StyledButton>
  );
};

export default Button;
