import React, { useState } from "react";

import StyledForm from "./Form.styled";

import Button from "../Button";
import CustomInput from "../CustomInput";
import Dropdown from "../Dropdown";
import InputRadioList from "../InputRadioList";
import AddItem from "../AddItem";
import InputRange from "../InputRange";
import InputCheckboxList from "../InputCheckboxList";

const Form = () => {
  const [step, setStep] = useState(1);

  const prevStep = (e) => {
    e.preventDefault();
    if (step !== 1) setStep(step - 1);
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (step < 4) setStep(step + 1);
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
      { value: "loseWeight", name: "weight", labelTitle: "Chcę schudnąć" },
      { value: "keepWeight", name: "weight", labelTitle: "Chcę utrzymać wagę" },
      { value: "makeWeight", name: "weight", labelTitle: "Chcę przytyć" },
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
      { value: "physicalWork", name: "work", labelTitle: "Praca fizyczna" },
      { value: "intellectualWork", name: "work", labelTitle: "Praca umysłowa" },
    ];
    const inputRadioActivityItems = [
      { value: "lowActivity", name: "activity", labelTitle: "Niski" },
      { value: "moderateActivity", name: "activity", labelTitle: "Umiarkowany" },
      { value: "highActivity", name: "activity", labelTitle: "Wysoki" },
    ];
    const inputRadioDietHelpItems = [
      { value: "dietHelp", name: "dietHelp", labelTitle: "Tak" },
      { value: "noDietHelp", name: "dietHelp", labelTitle: "Nie" },
    ];
    const inputRadioDiseasesItems = [
      { value: "diseases", name: "diseases", labelTitle: "Tak" },
      { value: "noDiseases", name: "diseases", labelTitle: "Nie" },
    ];
    const inputRadioSuplementsItems = [
      { value: "suplements", name: "suplements", labelTitle: "Tak" },
      { value: "noSuplements", name: "suplements", labelTitle: "Nie" },
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
    const inputRadioMeatItems = [
      { value: "meatAndFish", name: "meat", labelTitle: "Tak" },
      { value: "onlyMeat", name: "meat", labelTitle: "Tylko mięso" },
      { value: "onlyFish", name: "meat", labelTitle: "Tylko ryby" },
      { value: "noMeatAndFish", name: "meat", labelTitle: "Nie" },
    ];
    const inputRadioDairyItems = [
      { value: "dairy", name: "dairy", labelTitle: "Tak" },
      { value: "noDairy", name: "dairy", labelTitle: "Nie" },
    ];
    const inputRadioDrinkItems = [
      { value: "dairy", name: "dairy", labelTitle: "Woda" },
      { value: "juice", name: "dairy", labelTitle: "Soki" },
      { value: "carbonatedBeverage", name: "dairy", labelTitle: "Napoje gazowane" },
    ];
    return (
      <>
        <InputRadioList title="Czy jesz mięso i ryby?" items={inputRadioMeatItems} />
        <InputRadioList title="Czy jesz nabiał?" items={inputRadioDairyItems} />
        <AddItem name="likedProducts" labelTitle="Jakie są Twoje ulubione produkty?" />
        <AddItem name="dislikedProducts" labelTitle="Czego nie lubisz jeść?" />
        <AddItem name="likedVegetables" labelTitle="Jakie warzywa lubisz?" />
        <AddItem name="unlikedVegetables" labelTitle="Jakich warzyw nie lubisz?" />
        <AddItem name="likedFruits" labelTitle="Jakie owoce lubisz?" />
        <AddItem name="unlikedFruits" labelTitle="Jakich owoców nie lubisz?" />
        <InputRange labelTitle="Jak często sięgasz po przekąski?" />
        <InputRadioList title="Co zazwyczaj pijesz w ciągu dnia?" items={inputRadioDrinkItems} />
        <InputRange labelTitle="Ile pijesz wody w ciągu dnia?" />
      </>
    );
  };

  const fourthStep = () => {
    const inputRadioMealsItems = [
      { value: "quick", name: "meals", labelTitle: "Szybkie" },
      { value: "filling", name: "meals", labelTitle: "Sycące" },
      { value: "easy", name: "meals", labelTitle: "Łatwe w przygotowaniu" },
      { value: "cheap", name: "meals", labelTitle: "Cheap" },
    ];
    const inputCheckboxCookwareItems = [
      { value: "cooker", name: "cookware", labelTitle: "Kuchenka" },
      { value: "kettle", name: "cookware", labelTitle: "Czajnik" },
      { value: "freezer", name: "cookware", labelTitle: "Zamrażarka" },
      { value: "toasker", name: "cookware", labelTitle: "Toster" },
      { value: "mixer", name: "cookware", labelTitle: "Mikser" },
      { value: "pressureCooker", name: "cookware", labelTitle: "Szybkowar" },
      { value: "microwave", name: "cookware", labelTitle: "Mikrofalówka" },
    ];
    return (
      <>
        <InputRange labelTitle="Ile posiłków chcesz jeść w ciągu dnia?" />
        <InputRadioList title="Jakie powinny być twoje posiłki?" items={inputRadioMealsItems} />
        <AddItem name="mealsMustBe" labelTitle="Co musi się znaleźć w Twoim jadłospisie?" />
        <InputRange labelTitle="Jaki budżet chcesz przeznaczyć na jedzenie?" />
        <InputCheckboxList title="Jakim sprzętem kuchennym dysponujesz?" items={inputCheckboxCookwareItems} />
      </>
    );
  };

  return (
    <StyledForm>
      {step === 1 && firstStep()}
      {step === 2 && secondStep()}
      {step === 3 && thirdStep()}
      {step === 4 && fourthStep()}
      <Button onClick={prevStep}>Wstecz</Button>
      <Button onClick={nextStep}>Dalej</Button>
    </StyledForm>
  );
};

export default Form;
