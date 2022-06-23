import styled, { css } from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0;
  background: rgb(221, 230, 241);
  border-radius: 12px;
  box-shadow: 2px 2px 1px #cecece, -2px -2px 1px #ffffff;
  padding: 7.5px 20px;
  ${(props) =>
    props.type === "radio" &&
    css`
      flex-direction: row;
      align-items: center;
      background: transparent;
      box-shadow: none;
      margin: 2px 0;
    `};
  ${(props) =>
    props.type === "button" &&
    css`
      flex-direction: row;
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
      flex-direction: row;
    `};
`;

export default StyledRow;
