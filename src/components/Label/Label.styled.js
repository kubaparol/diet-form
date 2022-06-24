import styled from "styled-components";

const StyledLabel = styled.label.attrs((props) => ({
  htmlFor: `field-${props.fieldName}`,
}))`
  margin: 15px 0;
  font-weight: 400;
  font-size: 1.05rem;
`;

export default StyledLabel;
