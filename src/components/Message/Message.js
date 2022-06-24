import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StyledMessage from "./Message.styled";

const Message = (props) => {
  return (
    <StyledMessage {...props}>
      {props.icon ? <FontAwesomeIcon icon={props.icon} /> : null}{" "}
      {props.children}
    </StyledMessage>
  );
};

export default Message;
