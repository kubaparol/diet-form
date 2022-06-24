import React, { useEffect, useState } from "react";

import Row from "../Row";
import Label from "../Label";
import Field from "../Field";
import Dropdown from "../Dropdown";
import RadioFields from "../RadioFields";

import { useChangeHandler } from "../../hooks";

const FirstStep = ({ data, getData }) => {
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
      name: "Łydka",
      type: "number",
      value: calf,
      onChange: setCalf,
    },
  ];
  const targetOptions = [
    { name: "Chcę schudnąć", value: "lose", onChange: setTarget },
    { name: "Chcę utrzymać wagę", value: "keep", onChange: setTarget },
    { name: "Chcę przytyć", value: "make", onChange: setTarget },
  ];

  return (
    <>
      <Row>
        <Label fieldName="firstName">Imię</Label>
        <Field name="firstName" value={firstName} onChange={setFirstName} />
      </Row>
      <Row>
        <Label fieldName="lastName">Nazwisko</Label>
        <Field name="lastName" value={lastName} onChange={setLastName} />
      </Row>
      <Row>
        <Label fieldName="height">Wzrost</Label>
        <Field
          type="number"
          name="height"
          value={height}
          onChange={setHeight}
        />
      </Row>
      <Row>
        <Label fieldName="waga">Waga</Label>
        <Field type="number" name="waga" value={weight} onChange={setWeight} />
      </Row>
      <Row>
        <Dropdown title="Pomiary ciała" options={dropdownOptions} />
      </Row>
      <Row>
        <RadioFields
          fieldName="target"
          title="Jaki jest Twój cel?"
          options={targetOptions}
          value={data.target}
        />
      </Row>
    </>
  );
};

export default FirstStep;
