import React from "react";

import Row from "../Row";
import RadioFields from "../RadioFields";

import { useChangeHandler } from "../../hooks";

const SecondStep = () => {
  const { value: work, onChange: setWork } = useChangeHandler();
  const { value: activity, onChange: setActivity } = useChangeHandler();
  const { value: dietHelp, onChange: setDietHelp } = useChangeHandler();
  const { value: diseases, onChange: setDiseases } = useChangeHandler();
  const { value: suplements, onChange: setSuplements } = useChangeHandler();

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
        />
      </Row>
      <Row>
        <RadioFields
          fieldName="acitvity"
          title="Jak określisz swój poziom aktywności?"
          options={activityOptions}
        />
      </Row>
      <Row>
        <RadioFields
          fieldName="dietHelp"
          title="Czy korzystałeś kiedyś z pomocy dietetyka?"
          options={dietHelpOptions}
        />
      </Row>
      <Row>
        <RadioFields
          fieldName="diseases"
          title="Czy chorujesz na coś?"
          options={diseasesOptions}
        />
      </Row>
      <Row>
        <RadioFields
          fieldName="suplements"
          title="Czy stosujesz jakąś suplementację?"
          options={suplementsOptions}
        />
      </Row>
    </>
  );
};

export default SecondStep;
