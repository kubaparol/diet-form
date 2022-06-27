import styled, { css } from "styled-components";

const StyledField = styled.input.attrs(({ name, type }) => ({
  id: name ? `field-${name}` : null,
  type: type ? type : name,
}))`
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 30px;
  padding: 16px;
  background-color: ${(props) => props.theme.elementBcg};
  text-shadow: 1px 1px 0 ${(props) => props.theme.shadowFirstColor};
  margin-right: 8px;
  box-shadow: inset 2px 2px 5px ${(props) => props.theme.shadowSecondColor},
    inset -5px -5px 10px ${(props) => props.theme.shadowFirstColor};
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  &:focus {
    box-shadow: inset 1px 1px 2px ${(props) => props.theme.shadowSecondColor},
      inset -1px -1px 2px ${(props) => props.theme.shadowFirstColor};
  }
  ${(props) =>
    props.type === "radio" &&
    css`
      box-shadow: none;
      margin-bottom: 0;
    `};
`;

export default StyledField;
