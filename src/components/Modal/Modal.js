import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import {
  StyledModalBackground,
  StyledModalContainer,
  StyledModalCloseBtnContainer,
  StyledModalCloseBtn,
  StyleModalBody,
  StyledModalFooter,
  StyledModalCancelBtn,
  StyledModalContinueBtn,
} from "./Modal.styled";

const Modal = (props) => {
  const { setState, text, onTrue } = props;
  return (
    <StyledModalBackground>
      <StyledModalContainer>
        <StyledModalCloseBtnContainer>
          <StyledModalCloseBtn onClick={() => setState(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </StyledModalCloseBtn>
        </StyledModalCloseBtnContainer>
        <StyleModalBody>
          <p>{text}</p>
        </StyleModalBody>
        <StyledModalFooter>
          <StyledModalCancelBtn onClick={() => setState(false)}>
            Zamknij
          </StyledModalCancelBtn>
        </StyledModalFooter>
      </StyledModalContainer>
    </StyledModalBackground>
  );
};

export default Modal;
