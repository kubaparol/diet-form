import React, { useState } from "react";

import StyledFormPanel from "./FormPanel.styled";

import FirstStep from "../FormSteps/FirstStep";
import SecondStep from "../FormSteps/SecondStep";
import ThirdStep from "../FormSteps/ThirdStep";
import FourthStep from "../FormSteps/FourthStep";
import FiveStep from "../FormSteps/FiveStep";

const FormPanel = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});

  const steps = [FirstStep, SecondStep, ThirdStep, FourthStep, FiveStep];
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
