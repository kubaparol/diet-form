import React from "react";

import { StyledNormalize, StyledGlobal } from "../../styled";
import StyledApp from "./App.styled";

import FormPanel from "../FormPanel";

const App = () => {
  return (
    <>
      <StyledNormalize />
      <StyledGlobal />
      <StyledApp>
        <FormPanel />
      </StyledApp>
    </>
  );
};

export default App;
