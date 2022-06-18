import styled from "styled-components";

const StyledLabel = styled.label.attrs((props) => ({
  htmlFor: `field-${props.fieldName}`,
}))`
  display: block;
`;

export default StyledLabel;
