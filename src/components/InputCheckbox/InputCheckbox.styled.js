import styled from "styled-components";

const StyledInputCheckbox = styled.input.attrs(({ name, value }) => ({
  name: name ? name : null,
  value: value ? value : name,
}))``;

export default StyledInputCheckbox;
