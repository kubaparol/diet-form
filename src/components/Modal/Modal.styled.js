import styled from "styled-components";

export const StyledModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const StyledModalContainer = styled.div`
  width: 70%;
  height: 30%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(221, 230, 241);
  border-radius: 12px;
  box-shadow: 2px 2px 1px #cecece, -2px -2px 1px #ffffff;
  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;

export const StyledModalCloseBtnContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

export const StyledModalCloseBtn = styled.button`
  color: black;
  border: none;
  width: 35px;
  height: 35px;
  background-color: transparent;
  font-size: 1.3rem;
  cursor: pointer;
`;
export const StyleModalBody = styled.div`
  margin-bottom: 30px;
  font-size: 1.1rem;
  @media screen and (min-width: 1000px) {
    font-size: 1.2rem;
  }
`;
export const StyledModalFooter = styled.div``;

export const StyledModalCancelBtn = styled.button`
  color: black;
  margin: 7px;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: bold;
  background-color: rgb(171, 205, 247);
  font-size: 1.2rem;
  border-radius: 12px;
  box-shadow: 2px 2px 1px #cecece, -2px -2px 1px #ffffff;
  text-transform: uppercase;
  @media screen and (min-width: 600px) {
    margin: 14px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 1rem;
    cursor: pointer;
    transition: 0.2s;
    margin: 23px;
  }
`;

export const StyledModalContinueBtn = styled.button`
  color: black;
  margin: 7px;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: bold;
  background-color: #69e99e;
  @media screen and (min-width: 600px) {
    margin: 14px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 1rem;
    cursor: pointer;
    transition: 0.2s;
    margin: 23px;
  }
`;
