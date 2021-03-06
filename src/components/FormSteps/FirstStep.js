import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Row from "../Row";
import Label from "../Label";
import Field from "../Field";
import Dropdown from "../Dropdown";
import RadioFields from "../RadioFields";
import Button from "../Button";
import Message from "../Message";

import {
  faArrowLeft,
  faArrowRight,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

import { useChangeHandler, useValidation } from "../../hooks";

const FirstStep = ({ data, getData, clickHandler }) => {
  const [stepData, setStepData] = useState(data);

  const { value: firstName, onChange: setFirstName } = useChangeHandler(
    data.firstName
  );
  const { value: lastName, onChange: setLastName } = useChangeHandler(
    data.lastName
  );
  const { value: height, onChange: setHeight } = useChangeHandler(data.height);
  const { value: weight, onChange: setWeight } = useChangeHandler(data.weight);
  const { value: biceps, onChange: setBiceps } = useChangeHandler(data.biceps);
  const { value: belly, onChange: setBelly } = useChangeHandler(data.belly);
  const { value: hips, onChange: setHips } = useChangeHandler(data.hips);
  const { value: thigh, onChange: setThigh } = useChangeHandler(data.thigh);
  const { value: calf, onChange: setCalf } = useChangeHandler(data.calf);
  const { value: target, onChange: setTarget } = useChangeHandler(data.target);

  const { alert: fNAlert, displayMessage: setFNAlert } = useValidation();
  const { alert: lNAlert, displayMessage: setLNAlert } = useValidation();
  const { alert: hAlert, displayMessage: setHAlert } = useValidation();
  const { alert: wAlert, displayMessage: setWAlert } = useValidation();
  const { alert: tAlert, displayMessage: setTAlert } = useValidation();

  const displayAlert = (setStateFn, message) => {
    setStateFn(message);
  };

  const validate = (e) => {
    e.preventDefault();

    const rules = [
      {
        name: firstName,
        minLength: 3,
        message: "Min. 3 znaki",
        setStateFn: setFNAlert,
      },
      {
        name: lastName,
        minLength: 3,
        message: "Min. 3 znaki",
        setStateFn: setLNAlert,
      },
      {
        name: height,
        minLength: 2,
        message: "Podaj prawid??owy wzrost",
        setStateFn: setHAlert,
      },
      {
        name: weight,
        minLength: 1,
        message: "Podaj prawid??ow?? wag??",
        setStateFn: setWAlert,
      },
      {
        name: target,
        minLength: 1,
        message: "Musisz zaznaczy??",
        setStateFn: setTAlert,
      },
    ];

    rules.forEach((rule) => {
      const { name, minLength, setStateFn, message } = rule;
      if (name.length < minLength) {
        displayAlert(setStateFn, message);
      } else displayAlert(setStateFn, "");
    });

    if (
      firstName.length > 2 &&
      lastName.length > 2 &&
      height.length > 2 &&
      weight.length > 1 &&
      target
    )
      clickHandler(e);
  };

  useEffect(() => {
    getData(stepData);
  }, [stepData]);

  useEffect(() => {
    setStepData({
      firstName,
      lastName,
      height,
      weight,
      biceps,
      belly,
      hips,
      thigh,
      calf,
      target,
    });
  }, [
    firstName,
    lastName,
    height,
    weight,
    biceps,
    belly,
    hips,
    thigh,
    calf,
    target,
  ]);

  const dropdownOptions = [
    {
      fieldName: "biceps",
      name: "Biceps",
      type: "number",
      value: biceps,
      onChange: setBiceps,
    },
    {
      fieldName: "belly",
      name: "Brzuch",
      type: "number",
      value: belly,
      onChange: setBelly,
    },
    {
      fieldName: "hips",
      name: "Biodra",
      type: "number",
      value: hips,
      onChange: setHips,
    },
    {
      fieldName: "thigh",
      name: "Udo",
      type: "number",
      value: thigh,
      onChange: setThigh,
    },
    {
      fieldName: "calf",
      name: "??ydka",
      type: "number",
      value: calf,
      onChange: setCalf,
    },
  ];
  const targetOptions = [
    { name: "Chc?? schudn????", value: "lose", onChange: setTarget },
    { name: "Chc?? utrzyma?? wag??", value: "keep", onChange: setTarget },
    { name: "Chc?? przyty??", value: "make", onChange: setTarget },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1 }}
    >
      <Row>
        <Label fieldName="firstName" />
        <Field
          placeholder="Imi??"
          name="firstName"
          value={firstName}
          onChange={setFirstName}
          onKeyUp={
            firstName.length <= 2
              ? () => setFNAlert("Min. 3 znaki")
              : () => setFNAlert("")
          }
        />
        {fNAlert !== "" && (
          <Message icon={faExclamationTriangle}>{fNAlert}</Message>
        )}
      </Row>
      <Row>
        <Label fieldName="lastName" />
        <Field
          placeholder="Nazwisko"
          name="lastName"
          value={lastName}
          onChange={setLastName}
          onKeyUp={
            lastName.length <= 2
              ? () => setLNAlert("Min. 3 znaki")
              : () => setLNAlert("")
          }
        />
        {lNAlert !== "" && (
          <Message icon={faExclamationTriangle}>{lNAlert}</Message>
        )}
      </Row>
      <Row>
        <Label fieldName="height" />
        <Field
          placeholder="Wzrost"
          type="number"
          name="height"
          value={height}
          onChange={setHeight}
          onKeyUp={
            height.length <= 2
              ? () => setHAlert("Podaj prawid??owy wzrost")
              : () => setHAlert("")
          }
        />
        {hAlert !== "" && (
          <Message icon={faExclamationTriangle}>{hAlert}</Message>
        )}
      </Row>
      <Row>
        <Label fieldName="waga" />
        <Field
          placeholder="Waga"
          type="number"
          name="waga"
          value={weight}
          onChange={setWeight}
          onKeyUp={
            weight.length <= 1
              ? () => setWAlert("Podaj prawid??ow?? wag??")
              : () => setWAlert("")
          }
        />
        {wAlert !== "" && (
          <Message icon={faExclamationTriangle}>{wAlert}</Message>
        )}
      </Row>
      <Row>
        <Dropdown title="Pomiary cia??a" options={dropdownOptions} />
      </Row>
      <Row>
        <RadioFields
          fieldName="target"
          title="Jaki jest Tw??j cel?"
          options={targetOptions}
          value={data.target}
        />
        {tAlert !== "" && (
          <Message icon={faExclamationTriangle}>{tAlert}</Message>
        )}
      </Row>
      <Row type="button">
        <Button
          onClick={clickHandler}
          icon={faArrowLeft}
          id="prev"
          style={{ opacity: "0.2" }}
        />
        <Button onClick={validate} icon={faArrowRight} id="next" />
      </Row>
    </motion.div>
  );
};

export default FirstStep;
