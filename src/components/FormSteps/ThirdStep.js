import React, { useState } from "react";

import Row from "../Row";
import RadioFields from "../RadioFields";
import AddAnswerField from "../AddAnswerField";

import { useChangeHandler } from "../../hooks";

const ThirdStep = () => {
  const { value: meat, onChange: setMeat } = useChangeHandler();
  const { value: dairy, onChange: setDairy } = useChangeHandler();
  const { value: drink, onChange: setDrink } = useChangeHandler();

  const [likedProducts, setLikedProducts] = useState([]);
  const [dislikedProducts, setDislikedProducts] = useState([]);
  const [likedVegetables, setLikedVegetables] = useState([]);
  const [dislikedVegetables, setDislikedVegetables] = useState([]);
  const [likedFruits, setLikedFruits] = useState([]);
  const [dislikedFruits, setDislikedFruits] = useState([]);

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
        />
      </Row>
      <Row>
        <RadioFields
          fieldName="dairy"
          title="Czy jesz nabiał?"
          options={dairyOptions}
        />
      </Row>
      <Row>
        <RadioFields
          fieldName="drink"
          title="Co najczęściej pijesz?"
          options={drinkOptions}
        />
      </Row>
      <Row>
        <AddAnswerField
          fieldName="likedProducts"
          title="Jakie są Twoje ulubione produkty?"
          getItems={setLikedProducts}
        />
      </Row>
      <Row>
        <AddAnswerField
          fieldName="dislikedProducts"
          title="Czego nie lubisz jeść?"
          getItems={setDislikedProducts}
        />
      </Row>
      <Row>
        <AddAnswerField
          fieldName="likedVegetables"
          title="Jakie są Twoje ulubione warzywa?"
          getItems={setLikedVegetables}
        />
      </Row>
      <Row>
        <AddAnswerField
          fieldName="dislikedVegetables"
          title="Jakich warzyw nie lubisz?"
          getItems={setDislikedVegetables}
        />
      </Row>
      <Row>
        <AddAnswerField
          fieldName="likedFruits"
          title="Jakie są Twoje ulubione owoce?"
          getItems={setLikedFruits}
        />
      </Row>
      <Row>
        <AddAnswerField
          fieldName="dislikedFruits"
          title="Jakich owoców nie lubisz?"
          getItems={setDislikedFruits}
        />
      </Row>
    </>
  );
};

export default ThirdStep;
