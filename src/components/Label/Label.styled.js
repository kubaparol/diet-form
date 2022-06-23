import styled from "styled-components";

const StyledLabel = styled.label.attrs((props) => ({
  htmlFor: `field-${props.fieldName}`,
}))`
  margin: 15px 0;
`;

export default StyledLabel;
