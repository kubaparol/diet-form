import React, { useState, useEffect } from "react";

import Row from "../Row";
import RadioFields from "../RadioFields";

import { useChangeHandler } from "../../hooks";

const FourthStep = ({ data, getData }) => {
  const { value: quantityMeals, onChange: setQuantityMeals } = useChangeHandler(
    data.quantityMeals
  );
  const { value: typeMeals, onChange: setTypeMeals } = useChangeHandler(
    data.typeMeals
  );
  const { value: money, onChange: setMoney } = useChangeHandler(data.money);

  const [stepData, setStepData] = useState(data);

  useEffect(() => {
    getData(stepData);
  }, [stepData]);

  useEffect(() => {
    setStepData({ quantityMeals, typeMeals, money });
  }, [quantityMeals, typeMeals, money]);

  const quantityMealsOptions = [
    { name: "Od 2 do 3", value: "2-3", onChange: setQuantityMeals },
    { name: "Od 3 do 4", value: "3-4", onChange: setQuantityMeals },
    { name: "Od 4 do 5", value: "4-5", onChange: setQuantityMeals },
    { name: "Powyżej 5", value: "5+", onChange: setQuantityMeals },
  ];
  const typeMealsOptions = [
    { name: "Szybkie", value: "quick", onChange: setTypeMeals },
    { name: "Sycące", value: "filling", onChange: setTypeMeals },
    { name: "Łatwe w przygotowaniu", value: "easy", onChange: setTypeMeals },
    { name: "Tanie", value: "cheap", onChange: setTypeMeals },
  ];
  const moneyOptions = [
    { name: "Do 150 zł", value: "150", onChange: setMoney },
    { name: "Od 150 zł do 200 zł", value: "150-200", onChange: setMoney },
    { name: "Od 200 zł do 300 zł", value: "200-300", onChange: setMoney },
    { name: "Powyżej 300 zł", value: "300+", onChange: setMoney },
  ];

  return (
    <>
      <Row>
        <RadioFields
          fieldName="quantityMeals"
          title="Ile posiłów chcesz jeść w ciągu dnia?"
          options={quantityMealsOptions}
          value={quantityMeals}
        />
      </Row>
      <Row>
        <RadioFields
          fieldName="typeMeals"
          title="Jakie powinny być Twoje posiłki?"
          options={typeMealsOptions}
          value={typeMeals}
        />
      </Row>
      <Row>
        <RadioFields
          fieldName="money"
          title="Ile chcesz wydawać tygodniowo na jedzenie?"
          options={moneyOptions}
          value={money}
        />
      </Row>
    </>
  );
};

export default FourthStep;
