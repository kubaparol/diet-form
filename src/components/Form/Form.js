import React, { useState } from "react";

import StyledForm from "./Form.styled";

import Button from "../Button";
import Input from "../Input";

const Form = () => {
  const [step, setStep] = useState(1);

  const prevStep = (e) => {
    e.preventDefault();
    if (step !== 1) setStep(step - 1);
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (step < 2) setStep(step + 1);
  };

  const firstStep = () => {
    return (
      <>
        <Input type="text" name="firstName" labelTitle="Imię:" />
        <Input type="text" name="lastName" labelTitle="Nazwisko:" />
        <Input type="number" name="height" labelTitle="Wzrost:" addendum="cm" />
        <Input type="number" name="weight" labelTitle="Waga:" addendum="kg" />
      </>
    );
  };
  const secondStep = () => {
    return (
      <>
        <Input type="text" name="name" labelTitle="2Imię:" />
        <Input type="text" name="nazwisko" labelTitle="2Nazwisko:" />
        <Input type="text" name="email" labelTitle="2E-mail:" />
      </>
    );
  };

  return (
    <StyledForm>
      {step === 1 && firstStep()}
      {step === 2 && secondStep()}
      <Button onClick={prevStep}>Wstecz</Button>
      <Button onClick={nextStep}>Dalej</Button>
    </StyledForm>
  );
};

export default Form;
