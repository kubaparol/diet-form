import React from "react";

import StyledForm from "./Form.styled";

import Input from "../Input";
import Button from "../Button";

const Form = () => {
  return (
    <StyledForm>
      <Input type="text" name="name" labelTitle="Imię" />
      <Input type="text" name="nazwisoko" labelTitle="Nazwisko" />
      <Button>Dalej</Button>
    </StyledForm>
  );
};

export default Form;
