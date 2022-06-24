import React, { useState, useEffect } from "react";

import Row from "../Row";
import RadioFields from "../RadioFields";
import AddAnswerField from "../AddAnswerField";

import Button from "../Button";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useChangeHandler, useValidation } from "../../hooks";

const ThirdStep = ({ data, getData, clickHandler }) => {
  const [stepData, setStepData] = useState(data);

  const { value: meat, onChange: setMeat } = useChangeHandler(data.meat);
  const { value: dairy, onChange: setDairy } = useChangeHandler(data.dairy);
  const { value: drink, onChange: setDrink } = useChangeHandler(data.drink);

  const [likedProducts, setLikedProducts] = useState([]);
  const [dislikedProducts, setDislikedProducts] = useState([]);
  const [likedVegetables, setLikedVegetables] = useState([]);
  const [dislikedVegetables, setDislikedVegetables] = useState([]);
  const [likedFruits, setLikedFruits] = useState([]);
  const [dislikedFruits, setDislikedFruits] = useState([]);

  const { alert: meatAlert, displayMessage: setMeatAlert } = useValidation();
  const { alert: dairyAlert, displayMessage: setDairyAlert } = useValidation();
  const { alert: drinkAlert, displayMessage: setDrinkAlert } = useValidation();

  const { alert: likedProductsAlert, displayMessage: setLikedProductsAlert } =
    useValidation();
  const {
    alert: dislikedProductsAlert,
    displayMessage: setDislikedProductsAlert,
  } = useValidation();
  const {
    alert: likedVegetablesAlert,
    displayMessage: setLikedVegetablesAlert,
  } = useValidation();
  const {
    alert: dislikedVegetablesAlert,
    displayMessage: setDislikedVegetablesAlert,
  } = useValidation();
  const { alert: likedFruitsAlert, displayMessage: setLikedFruitsAlert } =
    useValidation();
  const { alert: dislikedFruitsAlert, displayMessage: setDislikedFruitsAlert } =
    useValidation();

  const displayAlert = (setStateFn, message) => {
    setStateFn(message);
  };

  const validate = (e) => {
    e.preventDefault();

    const rules = [
      {
        name: meat,
        minLength: 1,
        message: "Musisz zaznaczyć",
        setStateFn: setMeatAlert,
      },
      {
        name: dairy,
        minLength: 1,
        message: "Musisz zaznaczyć",
        setStateFn: setDairyAlert,
      },
      {
        name: drink,
        minLength: 1,
        message: "Musisz zaznaczyć",
        setStateFn: setDrinkAlert,
      },
      {
        name: likedProducts,
        minLength: 1,
        message: "Dodaj ulubione produkty",
        setStateFn: setLikedProductsAlert,
      },
      {
        name: dislikedProducts,
        minLength: 1,
        message: "Dodaj nielubiane produkty",
        setStateFn: setDislikedProductsAlert,
      },
      {
        name: likedVegetables,
        minLength: 1,
        message: "Dodaj ulubione warzywa",
        setStateFn: setLikedVegetablesAlert,
      },
      {
        name: dislikedVegetables,
        minLength: 1,
        message: "Dodaj nielubiane warzywa",
        setStateFn: setDislikedVegetablesAlert,
      },
      {
        name: likedFruits,
        minLength: 1,
        message: "Dpdaj lubiane owoce",
        setStateFn: setLikedFruitsAlert,
      },
      {
        name: dislikedFruits,
        minLength: 1,
        message: "Dodaj nielubiane owoce",
        setStateFn: setDislikedFruitsAlert,
      },
    ];

    rules.forEach((rule) => {
      const { name, minLength, setStateFn, message } = rule;
      if (name.length < minLength) {
        displayAlert(setStateFn, message);
      } else displayAlert(setStateFn, "");
    });
    console.log(likedProducts.length);
    if (
      meat &&
      dairy &&
      drink &&
      likedProducts.length > 0 &&
      dislikedProducts.length > 0 &&
      likedVegetables.length > 0 &&
      dislikedVegetables.length > 0 &&
      likedFruits.length > 0 &&
      dislikedFruits.length > 0
    )
      clickHandler(e);
  };

  useEffect(() => {
    getData(stepData);
  }, [stepData]);

  useEffect(() => {
    setStepData({
      meat,
      dairy,
      drink,
      likedProducts,
      dislikedProducts,
      likedVegetables,
      dislikedVegetables,
      likedFruits,
      dislikedFruits,
    });
  }, [
    meat,
    dairy,
    drink,
    likedProducts,
    dislikedProducts,
    likedVegetables,
    dislikedVegetables,
    likedFruits,
    dislikedFruits,
  ]);

  const meatOptions = [
    { name: "Tak", value: "yes", onChange: setMeat },
    { name: "Tylko mięso", value: "onlyMeat", onChange: setMeat },
    { name: "Tylko ryby", value: "onlyFish", onChange: setMeat },
    { name: "Nie", value: "no", onChange: setMeat },
  ];
  const dairyOptions = [
    { name: "Tak", value: "yes", onChange: setDairy },
    { name: "Nie", value: "no", onChange: setDairy },
  ];
  const drinkOptions = [
    { name: "Woda", value: "water", onChange: setDrink },
    { name: "Soki", value: "juicy", onChange: setDrink },
    { name: "Napoje gazowane", value: "gas", onChange: setDrink },
  ];

  return (
    <>
      <Row>
        <RadioFields
          fieldName="meat"
          title="Czy jesz mięso i ryby?"
          options={meatOptions}
          value={meat}
        />
        <p>{meatAlert}</p>
      </Row>
      <Row>
        <RadioFields
          fieldName="dairy"
          title="Czy jesz nabiał?"
          options={dairyOptions}
          value={dairy}
        />
        <p>{dairyAlert}</p>
      </Row>
      <Row>
        <RadioFields
          fieldName="drink"
          title="Co najczęściej pijesz?"
          options={drinkOptions}
          value={drink}
        />
        <p>{drinkAlert}</p>
      </Row>
      <Row>
        <AddAnswerField
          fieldName="likedProducts"
          title="Jakie są Twoje ulubione produkty?"
          getItems={setLikedProducts}
          value={data.likedProducts}
          setAlert={setLikedProductsAlert}
        />
        <p>{likedProductsAlert}</p>
      </Row>
      <Row>
        <AddAnswerField
          fieldName="dislikedProducts"
          title="Czego nie lubisz jeść?"
          getItems={setDislikedProducts}
          value={data.dislikedProducts}
          setAlert={setDislikedProductsAlert}
        />
        <p>{dislikedProductsAlert}</p>
      </Row>
      <Row>
        <AddAnswerField
          fieldName="likedVegetables"
          title="Jakie są Twoje ulubione warzywa?"
          getItems={setLikedVegetables}
          value={data.likedVegetables}
          setAlert={setLikedVegetablesAlert}
        />
        <p>{likedVegetablesAlert}</p>
      </Row>
      <Row>
        <AddAnswerField
          fieldName="dislikedVegetables"
          title="Jakich warzyw nie lubisz?"
          getItems={setDislikedVegetables}
          value={data.dislikedVegetables}
          setAlert={setDislikedVegetablesAlert}
        />
        <p>{dislikedVegetablesAlert}</p>
      </Row>
      <Row>
        <AddAnswerField
          fieldName="likedFruits"
          title="Jakie są Twoje ulubione owoce?"
          getItems={setLikedFruits}
          value={data.likedFruits}
          setAlert={setLikedFruitsAlert}
        />
        <p>{likedFruitsAlert}</p>
      </Row>
      <Row>
        <AddAnswerField
          fieldName="dislikedFruits"
          title="Jakich owoców nie lubisz?"
          getItems={setDislikedFruits}
          value={data.dislikedFruits}
          setAlert={setDislikedFruitsAlert}
        />
        <p>{dislikedFruitsAlert}</p>
      </Row>
      <Row type="button">
        <Button onClick={clickHandler} icon={faArrowLeft} id="prev" />
        <Button onClick={validate} icon={faArrowRight} id="next" />
      </Row>
    </>
  );
};

export default ThirdStep;
