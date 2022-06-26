import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 14px;
  padding: 16px;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
  color: #61677c;
  font-weight: bold;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  font-weight: 600;

  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }

  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
  ${(props) =>
    props.id2 === "send" &&
    css`
      color: green;
    `}
`;

export default StyledButton;
