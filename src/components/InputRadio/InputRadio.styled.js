import styled from "styled-components";

const StyledInputRadio = styled.input.attrs(({ name, value }) => ({
  name: name ? name : null,
  value: value ? value : name,
}))``;

export default StyledInputRadio;
