import React from "react";

import { ThemeProvider } from "styled-components";
import { StyledNormalize, StyledGlobal, themeSettings } from "../../styled";
import StyledApp from "./App.styled";

import FormPanel from "../FormPanel";

const App = () => {
  return (
    <>
      <StyledNormalize />
      <StyledGlobal />
      <ThemeProvider theme={themeSettings}>
        <StyledApp>
          <FormPanel />
        </StyledApp>
      </ThemeProvider>
    </>
  );
};

export default App;
