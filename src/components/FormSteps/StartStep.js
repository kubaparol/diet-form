import React from "react";

import { StyledStartStep } from "../../styled";
import Button from "../Button";

const StartStep = ({ clickHandler }) => {
  return (
    <StyledStartStep>
      <h2>Cześć!</h2>
      <h3>
        Wypełnij formularz, aby zrobić pierwszy krok w kierunku wymarzonej
        sylwetki!
      </h3>
      <Button onClick={clickHandler} id="next" id2="start">
        Zaczynamy!
      </Button>
    </StyledStartStep>
  );
};

export default StartStep;
