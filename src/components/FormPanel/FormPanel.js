import React, { useState } from "react";

import StyledFormPanel from "./FormPanel.styled";

import {
  faArrowLeft,
  faArrowRight,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "../Modal";
import Row from "../Row";
import Button from "../Button";
import FirstStep from "../FormSteps/FirstStep";
import SecondStep from "../FormSteps/SecondStep";
import ThirdStep from "../FormSteps/ThirdStep";
import FourthStep from "../FormSteps/FourthStep";

const FormPanel = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const steps = [FirstStep, SecondStep, ThirdStep, FourthStep];
  const CurrentStep = steps[step];

  const clickHandler = (e) => {
    const button = e.currentTarget.id;
    if (button === "prev" && step >= 1) {
      setStep(step - 1);
    } else if (button === "next" && step < steps.length - 1) {
      setStep(step + 1);
    } else return null;
  };

  const getData = (newData) => {
    setData({ ...data, ...newData });
  };

  const sendHandler = () => {
    const errors = [];
    for (const key in data) {
      if (data[key].length === 0) errors.push("error");
    }
    if (errors !== 0) setOpenModal(true);
  };

  const AlertModal = () => {
    return (
      <Modal
        setState={setOpenModal}
        text="Uzupełnij wszystkie dane!"
        type="alert"
      />
    );
  };

  // console.log(data);

  return (
    <>
      <StyledFormPanel>
        <form>{<CurrentStep data={data} getData={getData} />}</form>
      </StyledFormPanel>
      <Row type="button">
        <Button
          onClick={clickHandler}
          icon={faArrowLeft}
          id="prev"
          style={step === 0 ? { opacity: "0.2" } : null}
        />
        {step === steps.length - 1 ? (
          <Button onClick={sendHandler} icon={faPaperPlane} id="send">
            Prześlij
          </Button>
        ) : null}
        <Button
          onClick={clickHandler}
          icon={faArrowRight}
          id="next"
          style={step === steps.length - 1 ? { opacity: "0.2" } : null}
        />
      </Row>
      {openModal && <AlertModal />}
    </>
  );
};

export default FormPanel;
