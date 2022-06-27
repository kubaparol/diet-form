import React, { useState } from "react";

import StyledFormPanel from "./FormPanel.styled";

import ProgressBar from "../ProgressBar";
import StartStep from "../FormSteps/StartStep";
import FirstStep from "../FormSteps/FirstStep";
import SecondStep from "../FormSteps/SecondStep";
import ThirdStep from "../FormSteps/ThirdStep";
import FourthStep from "../FormSteps/FourthStep";
import LastStep from "../FormSteps/LastStep";

const FormPanel = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});

  const steps = [
    StartStep,
    FirstStep,
    SecondStep,
    ThirdStep,
    FourthStep,
    LastStep,
  ];
  const CurrentStep = steps[step];

  const clickHandler = (e) => {
    const button = e.currentTarget.id;
    e.preventDefault();
    if (button === "prev" && step >= 1) {
      setStep(step - 1);
    } else if (button === "next" && step < steps.length - 1) {
      setStep(step + 1);
    } else return null;
    console.log(data);
  };

  const getData = (newData) => {
    setData({ ...data, ...newData });
  };

  return (
    <>
      {step !== steps.length - 1 && step !== 0 ? (
        <ProgressBar bgcolor="#ae1100" completed={step * 25} />
      ) : null}
      <StyledFormPanel>
        <form>
          {
            <CurrentStep
              data={data}
              getData={getData}
              clickHandler={clickHandler}
            />
          }
        </form>
      </StyledFormPanel>
    </>
  );
};

export default FormPanel;
