import React from "react";

import StyledNormalize from "../../styled";
import StyledApp from "./App.styled";

import FormPanel from "../FormPanel";

const App = () => {
  return (
    <>
      <StyledNormalize />
      <StyledApp>
        <FormPanel />
      </StyledApp>
    </>
  );
};

export default App;
