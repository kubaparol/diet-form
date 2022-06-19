import React, { useState } from "react";

import StyledForm from "./Form.styled";

import Button from "../Button";
import CustomInput from "../CustomInput";
import Dropdown from "../Dropdown";
import InputRadioList from "../InputRadioList";
import AddItem from "../AddItem";
import InputRange from "../InputRange";
import InputCheckboxList from "../InputCheckboxList";

import { useChangeHandler } from "../../hooks";

const Form = () => {
  const [step, setStep] = useState(3);

  // firstStep
  const { value: firstName, onChange: onChangeFirstName, clear: firstNameInputClear } = useChangeHandler();
  const { value: lastName, onChange: onChangeLastName, clear: lastNameInputClear } = useChangeHandler();
  const { value: height, onChange: onChangeHeight, clear: heightInputClear } = useChangeHandler();
  const { value: weight, onChange: onChangeWeight, clear: weightInputClear } = useChangeHandler();
  const { value: target, onChange: onChangeTarget, clear: targetInputClear } = useChangeHandler();
  const [images, setImages] = useState([]);
  // dropdown measurments
  const { value: chest, onChange: onChangeChest, clear: chestInputClear } = useChangeHandler();
  const { value: bicepsL, onChange: onChangeBicepsL, clear: bicepsLInputClear } = useChangeHandler();
  const { value: bicepsR, onChange: onChangeBicepsR, clear: bicepsRInputClear } = useChangeHandler();
  const { value: belly, onChange: onChangeBelly, clear: bellyInputClear } = useChangeHandler();
  const { value: hips, onChange: onChangeHips, clear: hipsInputClear } = useChangeHandler();
  const { value: thighL, onChange: onChangeThighL, clear: thighLInputClear } = useChangeHandler();
  const { value: thighR, onChange: onChangeThighR, clear: thighRInputClear } = useChangeHandler();
  const { value: calfL, onChange: onChangeCalfL, clear: calfLInputClear } = useChangeHandler();
  const { value: calfR, onChange: onChangeCalfR, clear: calfRInputClear } = useChangeHandler();

  // secondStep
  const { value: work, onChange: onChangeWork, clear: workInputClear } = useChangeHandler();
  const { value: activity, onChange: onChangeActivity, clear: activityInputClear } = useChangeHandler();
  const { value: dietHelp, onChange: onChangeDietHelp, clear: dietHelpInputClear } = useChangeHandler();
  const { value: diseases, onChange: onChangeDiseases, clear: diseasesInputClear } = useChangeHandler();
  const { value: suplements, onChange: onChangeSuplements, clear: suplementsInputClear } = useChangeHandler();
  const [snaksRange, setSnaksRange] = useState("Często");
  const [waterRange, setWaterRange] = useState("Od 2 litrów do 3 litrów");

  // thirdStep
  const { value: meat, onChange: onChangeMeat, clear: meatInputClear } = useChangeHandler();
  const { value: dairy, onChange: onChangeDairy, clear: dairyInputClear } = useChangeHandler();
  const { value: drink, onChange: onChangeDrink, clear: drinkInputClear } = useChangeHandler();
  const [likedProducts, setLikedProducts] = useState([]);
  const [dislikedProducts, setDislikedProducts] = useState([]);
  const [likedVegetables, setLikedVegetables] = useState([]);
  const [dislikedVegetables, setDislikedVegetables] = useState([]);
  const [likedFruits, setLikedFruits] = useState([]);
  const [dislikedFruits, setDislikedFruits] = useState([]);

  //fourthStep
  const [mealsRange, setMealsRange] = useState("Od 4 do 5");
  const [moneyRange, setMoneyRange] = useState("Od 150 zł do 200 zł");
  const { value: meals, onChange: onChangeMeals, clear: mealsInputClear } = useChangeHandler();
  const [mealsMustBe, setMealsMustBe] = useState([]);

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
      { title: "Klatka piersiowa:", name: "chest", add: "cm", type: "number", value: chest, onChange: onChangeChest },
      { title: "Lewy biceps:", name: "bicepsL", add: "cm", type: "number", value: bicepsL, onChange: onChangeBicepsL },
      { title: "Prawy biceps:", name: "bicepsR", add: "cm", type: "number", value: bicepsR, onChange: onChangeBicepsR },
      { title: "Brzuch:", name: "belly", add: "cm", type: "number", value: belly, onChange: onChangeBelly },
      { title: "Biodra:", name: "hips", add: "cm", type: "number", value: hips, onChange: onChangeHips },
      { title: "Lewe udo:", name: "thighL", add: "cm", type: "number", value: thighL, onChange: onChangeThighL },
      { title: "Prawe udo:", name: "thighR", add: "cm", type: "number", value: thighR, onChange: onChangeThighR },
      { title: "Lewa łydka:", name: "calfL", add: "cm", type: "number", value: calfL, onChange: onChangeCalfL },
      { title: "Prawa łydka:", name: "calfR", add: "cm", type: "number", value: calfR, onChange: onChangeCalfR },
    ];
    const inputRadioItems = [
      { value: "loseWeight", name: "target", labelTitle: "Chcę schudnąć" },
      { value: "keepWeight", name: "target", labelTitle: "Chcę utrzymać wagę" },
      { value: "makeWeight", name: "target", labelTitle: "Chcę przytyć" },
    ];

    const getFile = (e) => {
      const file = e.target.files[0];
      if (file && file.type.includes("image")) {
        const reader = new FileReader();

        reader.onload = function (readerEvent) {
          const newImgSrc = readerEvent.target.result;
          setImages([...images, newImgSrc]);
        };
        reader.readAsDataURL(file);
      }
    };
    return (
      <>
        <CustomInput type="text" name="firstName" labelTitle="Imię:" value={firstName} onChange={onChangeFirstName} />
        <CustomInput type="text" name="lastName" labelTitle="Nazwisko:" value={lastName} onChange={onChangeLastName} />
        <CustomInput type="number" name="height" labelTitle="Wzrost:" addendum="cm" value={height} onChange={onChangeHeight} />
        <CustomInput type="number" name="weight" labelTitle="Waga:" addendum="kg" value={weight} onChange={onChangeWeight} />
        <Dropdown dropdownName="Pomiary ciała" items={dropdownItems} type="number" />
        <InputRadioList title="Cel" items={inputRadioItems} onChange={onChangeTarget} value={target} />
        <CustomInput type="file" onChange={getFile} />
        <ul>
          {images.map((image, index) => (
            <li key={index}>
              <img src={image} />
            </li>
          ))}
        </ul>
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
        <InputRadioList title="Jaki rodzaj pracy wykonujesz?" items={inputRadioWorkItems} onChange={onChangeWork} name={work} />
        <InputRadioList title="Jaki jest Twój poziom aktywności fizycznej?" items={inputRadioActivityItems} onChange={onChangeActivity} value={activity} />
        <InputRadioList title="Czy korzystałeś kiedyś z pomocy dietetyka?" items={inputRadioDietHelpItems} onChange={onChangeDietHelp} value={dietHelp} />
        <InputRadioList title="Czy chorujesz na coś?" items={inputRadioDiseasesItems} onChange={onChangeDiseases} name={diseases} />
        <InputRadioList title="Czy stosujesz jakąś suplementację?" items={inputRadioSuplementsItems} onChange={onChangeSuplements} value={suplements} />
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
    const snaksConditions = (e) => {
      const value = e.target.value;
      if (value < 25) setSnaksRange("Nigdy");
      if (value > 25) setSnaksRange("Od czasu do czasu");
      if (value > 50) setSnaksRange("Często");
      if (value > 75) setSnaksRange("Bardzo często");
    };
    const waterConditions = (e) => {
      const value = e.target.value;
      if (value < 25) setWaterRange("Poniżej 1 litra");
      if (value > 25) setWaterRange("Od 1 litra do 2 litrów");
      if (value > 50) setWaterRange("Od 2 litrów do 3 litrów");
      if (value > 75) setWaterRange("Powyżej 3 litrów");
    };
    return (
      <>
        <InputRadioList title="Czy jesz mięso i ryby?" items={inputRadioMeatItems} onChange={onChangeMeat} value={meat} />
        <InputRadioList title="Czy jesz nabiał?" items={inputRadioDairyItems} onChange={onChangeDairy} value={dairy} />
        <AddItem name="likedProducts" labelTitle="Jakie są Twoje ulubione produkty?" getItems={setLikedProducts} />
        <AddItem name="dislikedProducts" labelTitle="Czego nie lubisz jeść?" getItems={setDislikedProducts} />
        <AddItem name="likedVegetables" labelTitle="Jakie warzywa lubisz?" getItems={setLikedVegetables} />
        <AddItem name="dislikedVegetables" labelTitle="Jakich warzyw nie lubisz?" getItems={setDislikedVegetables} />
        <AddItem name="likedFruits" labelTitle="Jakie owoce lubisz?" getItems={setLikedFruits} />
        <AddItem name="dislikedFruits" labelTitle="Jakich owoców nie lubisz?" getItems={setDislikedFruits} />
        <InputRange labelTitle="Jak często sięgasz po przekąski?" min={0} max={100} step={1} onChange={snaksConditions} text={snaksRange} />
        <InputRadioList title="Co zazwyczaj pijesz w ciągu dnia?" items={inputRadioDrinkItems} onChange={onChangeDrink} value={drink} />
        <InputRange labelTitle="Ile pijesz wody w ciągu dnia?" min={0} max={100} step={1} onChange={waterConditions} text={waterRange} />
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

    const mealsConditions = (e) => {
      const value = e.target.value;
      if (value < 20) setMealsRange("Od 2 do 3");
      if (value > 20) setMealsRange("Od 3 do 4");
      if (value > 40) setMealsRange("Od 4 do 5");
      if (value > 60) setMealsRange("Od 5 do 6");
      if (value > 80) setMealsRange("Powyżej 6");
    };
    const moneyConditions = (e) => {
      const value = e.target.value;
      if (value < 25) setMoneyRange("Do 150 zł");
      if (value > 25) setMoneyRange("Od 150 zł do 200 zł");
      if (value > 50) setMoneyRange("Od 200 zł do 300 zł");
      if (value > 75) setMoneyRange("Powyżej 300 zł");
    };

    return (
      <>
        <InputRange labelTitle="Ile posiłków chcesz jeść w ciągu dnia?" min={0} max={100} step={1} onChange={mealsConditions} text={mealsRange} />
        <InputRadioList title="Jakie powinny być twoje posiłki?" items={inputRadioMealsItems} onChange={onChangeMeals} value={meals} />
        <AddItem name="mealsMustBe" labelTitle="Co musi się znaleźć w Twoim jadłospisie?" getItems={setMealsMustBe} />
        <InputRange labelTitle="Jaki budżet tygodniowo chcesz przeznaczać na jedzenie?" min={0} max={100} step={1} onChange={moneyConditions} text={moneyRange} />
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
