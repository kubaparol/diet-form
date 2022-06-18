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
    if (step < 3) setStep(step + 1);
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
        <CustomInput type="number" name="height" labelTitle="Wzrost:" addendum="cm" />
        <CustomInput type="number" name="weight" labelTitle="Waga:" addendum="kg" />
        <Dropdown dropdownName="Pomiary ciała" items={dropdownItems} type="number" />
        <InputRadioList title="Cel" items={inputRadioItems} />
        <CustomInput type="file" />
      </>
    );
  };

  const secondStep = () => {
    const inputRadioWorkItems = [
      { name: "physicalWork", labelTitle: "Praca fizyczna" },
      { name: "intellectualWork", labelTitle: "Praca umysłowa" },
    ];
    const inputRadioActivityItems = [
      { name: "lowActivity", labelTitle: "Niski" },
      { name: "moderateActivity", labelTitle: "Umiarkowany" },
      { name: "highActivity", labelTitle: "Wysoki" },
    ];
    const inputRadioDietHelpItems = [
      { name: "dietHelp", labelTitle: "Tak" },
      { name: "noDietHelp", labelTitle: "Nie" },
    ];
    const inputRadioDiseasesItems = [
      { name: "diseases", labelTitle: "Tak" },
      { name: "noDiseases", labelTitle: "Nie" },
    ];
    const inputRadioSuplementsItems = [
      { name: "suplements", labelTitle: "Tak" },
      { name: "noSuplements", labelTitle: "Nie" },
    ];

    return (
      <>
        <InputRadioList title="Jaki rodzaj pracy wykonujesz?" items={inputRadioWorkItems} />
        <InputRadioList title="Jaki jest Twój poziom aktywności fizycznej?" items={inputRadioActivityItems} />
        <InputRadioList title="Czy korzystałeś kiedyś z pomocy dietetyka?" items={inputRadioDietHelpItems} />
        <InputRadioList title="Czy chorujesz na coś?" items={inputRadioDiseasesItems} />
        <InputRadioList title="Czy stosujesz jakąś suplementację?" items={inputRadioSuplementsItems} />
      </>
    );
  };

  const thirdStep = () => {

  };

  return (
    <StyledForm>
      {step === 1 && firstStep()}
      {step === 2 && secondStep()}
      {step === 3 && thirdStep()}
      <Button onClick={prevStep}>Wstecz</Button>
      <Button onClick={nextStep}>Dalej</Button>
    </StyledForm>
  );
};

export default Form;
