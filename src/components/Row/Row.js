import React from "react";

import StyledRow from "./Row.styled";

const Row = (props) => {
  return <StyledRow {...props}>{props.children}</StyledRow>;
};

export default Row;
