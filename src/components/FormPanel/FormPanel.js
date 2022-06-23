import React, { useState } from "react";

import StyledFormPanel from "./FormPanel.styled";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Row from "../Row";
import Button from "../Button";
import FirstStep from "../FormSteps/FirstStep";
import SecondStep from "../FormSteps/SecondStep";
import ThirdStep from "../FormSteps/ThirdStep";
import FourthStep from "../FormSteps/FourthStep";

const FormPanel = () => {
  const [step, setStep] = useState(1);

  const clickHandler = (e) => {
    const button = e.currentTarget.id;
    if (button === "prev" && step > 1) {
      setStep(step - 1);
    } else if (button === "next" && step < 4) {
      setStep(step + 1);
    } else return null;
  };

  return (
    <>
      <StyledFormPanel>
        <form>
          {step === 1 && <FirstStep />}
          {step === 2 && <SecondStep />}
          {step === 3 && <ThirdStep />}
          {step === 4 && <FourthStep />}
        </form>
      </StyledFormPanel>
      <Row type="button">
        <Button
          onClick={clickHandler}
          icon={faArrowLeft}
          id="prev"
          style={step === 1 ? { opacity: "0.2" } : null}
        />
        <Button
          onClick={clickHandler}
          icon={faArrowRight}
          id="next"
          style={step === 4 ? { opacity: "0.2" } : null}
        />
      </Row>
    </>
  );
};

export default FormPanel;
