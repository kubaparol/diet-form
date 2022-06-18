import styled from "styled-components";

const StyledInput = styled.input.attrs(({ name, type }) => ({
  id: name ? `field-${name}` : null,
  type: type ? type : name,
}))``;

export default StyledInput;
