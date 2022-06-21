import styled from "styled-components";

const StyledInputRange = styled.input.attrs(({ name, value }) => ({
  name: name ? name : null,
  value: value ? value : name,
}))`
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: red;
`;

export default StyledInputRange;
