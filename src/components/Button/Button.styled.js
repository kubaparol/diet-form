import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  ${(props) =>
    props.id2 === "send" &&
    css`
      color: green;
    `}
`;

export default StyledButton;
