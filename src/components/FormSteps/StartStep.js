import React from "react";
import { motion } from "framer-motion";

import { StyledStartStep } from "../../styled";
import Button from "../Button";

const StartStep = ({ clickHandler }) => {
  return (
    <StyledStartStep>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Cześć!
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Wypełnij formularz, aby zrobić pierwszy krok w kierunku wymarzonej
        sylwetki!
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <Button onClick={clickHandler} id="next" id2="start">
          Zaczynamy!
        </Button>
      </motion.div>
    </StyledStartStep>
  );
};

export default StartStep;
