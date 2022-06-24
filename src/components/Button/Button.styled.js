import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  ${(props) =>
    props.id === "send" &&
    css`
      font-size: 1.2rem;
      padding: 1px 10px;
      background: rgb(171, 205, 247);
      border-radius: 12px;
      box-shadow: 2px 2px 1px #cecece, -2px -2px 1px #ffffff;
      text-transform: uppercase;
    `}
`;

export default StyledButton;
