import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StyledMessage from "./Message.styled";

const Message = (props) => {
  return (
    <StyledMessage {...props}>
      {props.icon ? (
        <i>
          <FontAwesomeIcon icon={props.icon} />
        </i>
      ) : null}{" "}
      {props.children}
    </StyledMessage>
  );
};

export default Message;
