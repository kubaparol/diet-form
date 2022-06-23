import styled from "styled-components";

const StyledAddAnswerField = styled.div`
  header {
    text-align: center;
  }
  p:nth-child(1) {
    color: red;
  }
  p:nth-child(2) {
    margin-bottom: 10px;
    font-size: 1.3rem;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
  }
`;

export default StyledAddAnswerField;
