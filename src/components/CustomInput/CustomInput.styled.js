import styled, { css } from "styled-components";

const StyledCustomInput = styled.input.attrs(({ name, type }) => ({
  id: name ? `field-${name}` : null,
  type: type ? type : name,
}))`
  background: none;
  font-size: 18px;
  color: #555;
  padding: 15px 10px 15px 5px;
  border-radius: 20px;
  box-shadow: inset 5px 5px 5px #cbced1, inset -5px -5px 5px #ffffff;
  border: none;
  outline: none;
`;

export default StyledCustomInput;
