import React, { useState, useEffect } from "react";

import Row from "../Row";
import RadioFields from "../RadioFields";
import AddAnswerField from "../AddAnswerField";

import { useChangeHandler } from "../../hooks";

const ThirdStep = ({ data, getData }) => {
  const { value: meat, onChange: setMeat } = useChangeHandler(data.meat);
  const { value: dairy, onChange: setDairy } = useChangeHandler(data.dairy);
  const { value: drink, onChange: setDrink } = useChangeHandler(data.drink);

  const [likedProducts, setLikedProducts] = useState([]);
  const [dislikedProducts, setDislikedProducts] = useState([]);
  const [likedVegetables, setLikedVegetables] = useState([]);
  const [dislikedVegetables, setDislikedVegetables] = useState([]);
  const [likedFruits, setLikedFruits] = useState([]);
  const [dislikedFruits, setDislikedFruits] = useState([]);

  const [stepData, setStepData] = useState(data);

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
      </Row>
      <Row>
        <RadioFields
          fieldName="dairy"
          title="Czy jesz nabiał?"
          options={dairyOptions}
          value={dairy}
        />
      </Row>
      <Row>
        <RadioFields
          fieldName="drink"
          title="Co najczęściej pijesz?"
          options={drinkOptions}
          value={drink}
        />
      </Row>
      <Row>
        <AddAnswerField
          fieldName="likedProducts"
          title="Jakie są Twoje ulubione produkty?"
          getItems={setLikedProducts}
          value={data.likedProducts}
        />
      </Row>
      <Row>
        <AddAnswerField
          fieldName="dislikedProducts"
          title="Czego nie lubisz jeść?"
          getItems={setDislikedProducts}
          value={data.dislikedProducts}
        />
      </Row>
      <Row>
        <AddAnswerField
          fieldName="likedVegetables"
          title="Jakie są Twoje ulubione warzywa?"
          getItems={setLikedVegetables}
          value={data.likedVegetables}
        />
      </Row>
      <Row>
        <AddAnswerField
          fieldName="dislikedVegetables"
          title="Jakich warzyw nie lubisz?"
          getItems={setDislikedVegetables}
          value={data.dislikedVegetables}
        />
      </Row>
      <Row>
        <AddAnswerField
          fieldName="likedFruits"
          title="Jakie są Twoje ulubione owoce?"
          getItems={setLikedFruits}
          value={data.likedFruits}
        />
      </Row>
      <Row>
        <AddAnswerField
          fieldName="dislikedFruits"
          title="Jakich owoców nie lubisz?"
          getItems={setDislikedFruits}
          value={data.dislikedFruits}
        />
      </Row>
    </>
  );
};

export default ThirdStep;
