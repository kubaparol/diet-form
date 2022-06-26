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
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
  margin-right: 8px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  &:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
  ${(props) =>
    props.type === "radio" &&
    css`
      box-shadow: none;
      margin-bottom: 0;
    `};
`;

export default StyledField;
