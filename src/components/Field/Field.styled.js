import styled, { css } from "styled-components";

const StyledField = styled.input.attrs(({ name, type }) => ({
  id: name ? `field-${name}` : null,
  type: type ? type : name,
}))`
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  background: rgb(221, 230, 241);
  border-radius: 12px;
  box-shadow: inset 3px 2px 1px #cecece, inset -3px -2px 1px #ffffff;
  ${(props) =>
    props.type === "radio" &&
    css`
      margin-bottom: 0;
    `}
`;

export default StyledField;
