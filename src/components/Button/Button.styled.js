import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 14px;
  padding: 16px;
  background-color: ${(props) => props.theme.elementBcg};
  text-shadow: 1px 1px 0 ${(props) => props.theme.shadowFirstColor};
  color: ${(props) => props.theme.fontColor};
  font-weight: bold;
  box-shadow: -5px -5px 20px ${(props) => props.theme.shadowFirstColor},
    5px 5px 20px ${(props) => props.theme.shadowSecondColor};
  transition: all 0.2s ease-in-out;
  font-weight: 600;

  &:hover {
    box-shadow: -2px -2px 5px ${(props) => props.theme.shadowFirstColor},
      2px 2px 5px ${(props) => props.theme.shadowSecondColor};
  }

  &:active {
    box-shadow: inset 1px 1px 2px ${(props) => props.theme.shadowSecondColor},
      inset -1px -1px 2px ${(props) => props.theme.shadowFirstColor};
  }
  ${(props) =>
    props.id2 === "send" &&
    css`
      color: green;
    `}
  ${(props) =>
    props.id2 === "start" &&
    css`
      background-color: ${(props) => props.theme.buttonStartBcg};
      text-shadow: none;
      color: ${(props) => props.theme.buttonStartColor};
    `}
`;

export default StyledButton;
