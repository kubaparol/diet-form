import styled, { css } from "styled-components";

const StyledRow = styled.div`
  margin: 20px auto;
  ${(props) =>
    props.type === "radio" &&
    css`
      background: transparent;
      box-shadow: none;
      margin: 2px 0;
    `};
  ${(props) =>
    props.type === "button" &&
    css`
      display: flex;
      justify-content: space-around;
      margin-top: 35px;
      @media screen and (min-width: 1000px) {
        max-width: 1000px;
        margin: 35px auto;
      }
    `};
  ${(props) =>
    props.type === "answer" &&
    css`
      margin: 0;
      display: flex;
      justify-content: space-between;
    `};
`;

export default StyledRow;
