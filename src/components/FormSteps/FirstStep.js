import React from "react";

import Row from "../Row";
import Label from "../Label";
import Field from "../Field";
import Dropdown from "../Dropdown";
import RadioFields from "../RadioFields";

import { useChangeHandler } from "../../hooks";

const FirstStep = () => {
  const { value: firstName, onChange: setFirstName } = useChangeHandler();
  const { value: lastName, onChange: setLastName } = useChangeHandler();
  const { value: height, onChange: setHeight } = useChangeHandler();
  const { value: weight, onChange: setWeight } = useChangeHandler();

  const { value: biceps, onChange: setBiceps } = useChangeHandler();
  const { value: belly, onChange: setBelly } = useChangeHandler();
  const { value: hips, onChange: setHips } = useChangeHandler();
  const { value: thigh, onChange: setThigh } = useChangeHandler();
  const { value: calf, onChange: setCalf } = useChangeHandler();

  const { value: target, onChange: setTarget } = useChangeHandler();

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
        />
      </Row>
    </>
  );
};

export default FirstStep;
