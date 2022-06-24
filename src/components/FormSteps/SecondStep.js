import React, { useState, useEffect } from "react";

import Row from "../Row";
import RadioFields from "../RadioFields";
import Button from "../Button";
import Message from "../Message";

import {
  faArrowLeft,
  faArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import { useChangeHandler, useValidation } from "../../hooks";

const SecondStep = ({ data, getData, clickHandler }) => {
  const [stepData, setStepData] = useState(data);

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

  const { alert: workAlert, displayMessage: setWorkAlert } = useValidation();
  const { alert: activityAlert, displayMessage: setActivityAlert } =
    useValidation();
  const { alert: dietHelpAlert, displayMessage: setdietHelpAlert } =
    useValidation();
  const { alert: diseasesAlert, displayMessage: setDiseasesAlert } =
    useValidation();
  const { alert: suplementsAlert, displayMessage: setsuplementsAlert } =
    useValidation();

  const displayAlert = (setStateFn, message) => {
    setStateFn(message);
  };

  const validate = (e) => {
    e.preventDefault();

    const rules = [
      {
        name: work,
        minLength: 1,
        message: "Musisz zaznaczyć",
        setStateFn: setWorkAlert,
      },
      {
        name: activity,
        minLength: 1,
        message: "Musisz zaznaczyć",
        setStateFn: setActivityAlert,
      },
      {
        name: dietHelp,
        minLength: 1,
        message: "Musisz zaznaczyć",
        setStateFn: setdietHelpAlert,
      },
      {
        name: diseases,
        minLength: 1,
        message: "Musisz zaznaczyć",
        setStateFn: setDiseasesAlert,
      },
      {
        name: suplements,
        minLength: 1,
        message: "Musisz zaznaczyć",
        setStateFn: setsuplementsAlert,
      },
    ];

    rules.forEach((rule) => {
      const { name, minLength, setStateFn, message } = rule;
      if (name.length < minLength) {
        displayAlert(setStateFn, message);
      } else displayAlert(setStateFn, "");
    });

    if (work && activity && dietHelp && diseases && suplements) clickHandler(e);
  };

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
        {workAlert !== "" && (
          <Message icon={faCircleXmark}>{workAlert}</Message>
        )}
      </Row>
      <Row>
        <RadioFields
          fieldName="acitvity"
          title="Jak określisz swój poziom aktywności?"
          options={activityOptions}
          value={data.activity}
        />
        {activityAlert !== "" && (
          <Message icon={faCircleXmark}>{activityAlert}</Message>
        )}
      </Row>
      <Row>
        <RadioFields
          fieldName="dietHelp"
          title="Czy korzystałeś kiedyś z pomocy dietetyka?"
          options={dietHelpOptions}
          value={data.dietHelp}
        />
        {dietHelpAlert !== "" && (
          <Message icon={faCircleXmark}>{dietHelpAlert}</Message>
        )}
      </Row>
      <Row>
        <RadioFields
          fieldName="diseases"
          title="Czy chorujesz na coś?"
          options={diseasesOptions}
          value={data.diseases}
        />
        {diseasesAlert !== "" && (
          <Message icon={faCircleXmark}>{diseasesAlert}</Message>
        )}
      </Row>
      <Row>
        <RadioFields
          fieldName="suplements"
          title="Czy stosujesz jakąś suplementację?"
          options={suplementsOptions}
          value={data.suplements}
        />
        {suplementsAlert !== "" && (
          <Message icon={faCircleXmark}>{suplementsAlert}</Message>
        )}
      </Row>
      <Row type="button">
        <Button onClick={clickHandler} icon={faArrowLeft} id="prev" />
        <Button onClick={validate} icon={faArrowRight} id="next" />
      </Row>
    </>
  );
};

export default SecondStep;
