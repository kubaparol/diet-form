import styled from "styled-components";

const StyledCustomInput = styled.input.attrs(({ name, type }) => ({
  id: name ? `field-${name}` : null,
  type: type ? type : name,
}))``;

export default StyledCustomInput;
