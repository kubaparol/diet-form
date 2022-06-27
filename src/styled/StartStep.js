import styled from "styled-components";

const StyledStartStep = styled.header`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  h2,
  h3,
  p {
    margin-bottom: 50px;
  }
  h3 {
    font-weight: 400;
  }
`;

export default StyledStartStep;
