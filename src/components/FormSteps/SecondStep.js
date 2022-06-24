import React, { useState, useEffect } from "react";

import Row from "../Row";
import RadioFields from "../RadioFields";

import { useChangeHandler } from "../../hooks";

const SecondStep = ({ data, getData }) => {
  const { value: work, onChange: setWork } = useChangeHandler(data.work);
  const { value: activity, onChange: setActivity } = useChangeHandler(
    data.activity
  );
  const { value: dietHelp, onChange: setDietHelp } = useChangeHandler(
    data.dietHelp
  );
  const { value: diseases, onChange: setDiseases } = useChangeHandler(
    data.diseases
  );
  const { value: suplements, onChange: setSuplements } = useChangeHandler(
    data.suplements
  );

  const [stepData, setStepData] = useState(data);

  useEffect(() => {
    getData(stepData);
  }, [stepData]);

  useEffect(() => {
    setStepData({ work, activity, dietHelp, diseases, suplements });
  }, [work, activity, dietHelp, diseases, suplements]);

  const workOptions = [
    { name: "Praca fizyczna", value: "physical", onChange: setWork },
    { name: "Praca umysłowa", value: "intellectual", onChange: setWork },
  ];
  const activityOptions = [
    { name: "Niski", value: "low", onChange: setActivity },
    { name: "Umiarkowany", value: "moderate", onChange: setActivity },
    { name: "Wysoki", value: "high", onChange: setActivity },
  ];
  const dietHelpOptions = [
    { name: "Tak", value: "yes", onChange: setDietHelp },
    { name: "Nie", value: "no", onChange: setDietHelp },
  ];
  const diseasesOptions = [
    { name: "Tak", value: "yes", onChange: setDiseases },
    { name: "Nie", value: "no", onChange: setDiseases },
  ];
  const suplementsOptions = [
    { name: "Tak", value: "yes", onChange: setSuplements },
    { name: "Nie", value: "no", onChange: setSuplements },
  ];

  return (
    <>
      <Row>
        <RadioFields
          fieldName="work"
          title="Jaki rodzaj pracy wykonujesz?"
          options={workOptions}
          value={data.work}
        />
      </Row>
      <Row>
        <RadioFields
          fieldName="acitvity"
          title="Jak określisz swój poziom aktywności?"
          options={activityOptions}
          value={data.activity}
        />
      </Row>
      <Row>
        <RadioFields
          fieldName="dietHelp"
          title="Czy korzystałeś kiedyś z pomocy dietetyka?"
          options={dietHelpOptions}
          value={data.dietHelp}
        />
      </Row>
      <Row>
        <RadioFields
          fieldName="diseases"
          title="Czy chorujesz na coś?"
          options={diseasesOptions}
          value={data.diseases}
        />
      </Row>
      <Row>
        <RadioFields
          fieldName="suplements"
          title="Czy stosujesz jakąś suplementację?"
          options={suplementsOptions}
          value={data.suplements}
        />
      </Row>
    </>
  );
};

export default SecondStep;
