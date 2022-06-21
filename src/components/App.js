import React from "react";

import StyledNormalize from "../styled";
import StyledApp from "./App.styled";

import Form from "./Form";

const App = () => {
  return (
    <>
      <StyledNormalize />
      <StyledApp>
        <Form />
      </StyledApp>
    </>
  );
};

export default App;
