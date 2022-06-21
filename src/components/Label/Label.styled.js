import styled, { css } from "styled-components";

const StyledLabel = styled.label.attrs((props) => ({
  htmlFor: `field-${props.fieldName}`,
}))`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${(props) =>
    props.inputType === "radio" &&
    css`
      flex-direction: row;
      justify-content: space-between;
      margin: 10px 15px;
    `};
`;

export default StyledLabel;
