import React from "react";

import StyledProgressBar from "./ProgressBar.styled";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  return (
    <StyledProgressBar {...props}>
      <div>
        <span>{`${completed}%`}</span>
      </div>
    </StyledProgressBar>
  );
};

export default ProgressBar;
