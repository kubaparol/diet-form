import React, { useState } from "react";

import StyledForm from "./Form.styled";

import Button from "../Button";
import CustomInput from "../CustomInput";
import Dropdown from "../Dropdown";
import InputRadioList from "../InputRadioList";

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
    const dropdownItems = [
      { title: "Klatka piersiowa:", name: "chest", add: "cm", type: "number" },
      { title: "Lewy biceps:", name: "bicepsL", add: "cm", type: "number" },
      { title: "Prawy biceps:", name: "bicepsR", add: "cm", type: "number" },
      { title: "Brzuch:", name: "belly", add: "cm", type: "number" },
      { title: "Biodra:", name: "hips", add: "cm", type: "number" },
      { title: "Lewe udo:", name: "thighL", add: "cm", type: "number" },
      { title: "Prawe udo:", name: "thighR", add: "cm", type: "number" },
      { title: "Lewa łydka:", name: "calfL", add: "cm", type: "number" },
      { title: "Prawa łydka:", name: "calfR", add: "cm", type: "number" },
    ];
    const inputRadioItems = [
      { name: "loseWeight", labelTitle: "Chcę schudnąć" },
      { name: "keepWeight", labelTitle: "Chcę utrzymać wagę" },
      { name: "makeWeight", labelTitle: "Chcę przytyć" },
    ];
    return (
      <>
        <CustomInput type="text" name="firstName" labelTitle="Imię:" />
        <CustomInput type="text" name="lastName" labelTitle="Nazwisko:" />
        <CustomInput
          type="number"
          name="height"
          labelTitle="Wzrost:"
          addendum="cm"
        />
        <CustomInput
          type="number"
          name="weight"
          labelTitle="Waga:"
          addendum="kg"
        />
        <Dropdown
          dropdownName="Pomiary ciała"
          items={dropdownItems}
          type="number"
        />
        <InputRadioList title="Cel" items={inputRadioItems} />
        <CustomInput type="file" />
      </>
    );
  };
  const secondStep = () => {
    return (
      <>
        <CustomInput type="text" name="name" labelTitle="2Imię:" />
        <CustomInput type="text" name="nazwisko" labelTitle="2Nazwisko:" />
        <CustomInput type="text" name="email" labelTitle="2E-mail:" />
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
