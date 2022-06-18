import styled from "styled-components";

const StyledLabel = styled.label.attrs((props) => ({
  htmlFor: `field-${props.fieldName}`,
}))``;

export default StyledLabel;
