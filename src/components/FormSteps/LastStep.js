import React from "react";
import { motion } from "framer-motion";

import { StyledLastStep } from "../../styled";

const LastStep = () => {
  return (
    <StyledLastStep>
      <motion.h2
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.2 }}
      >
        Formularz został wysłany!
      </motion.h2>
    </StyledLastStep>
  );
};

export default LastStep;
