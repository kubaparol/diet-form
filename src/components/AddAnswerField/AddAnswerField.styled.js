import styled from "styled-components";

const StyledAddAnswerField = styled.div`
  margin-top: 25px;
  header {
    text-align: center;
  }
  p:nth-child(1) {
    color: red;
  }
  p:nth-child(2) {
    font-size: 1.3rem;
    color: #61677c;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
  }
  li {
    overflow: hidden;
    border: 0;
    outline: 0;
    font-size: 16px;
    border-radius: 30px;
    padding: 16px;
    background-color: #ebecf0;
    text-shadow: 1px 1px 0 #fff;
    color: #61677c;
    box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
    margin: 10px 0;
  }
  p {
    margin-right: 8px;
  }
`;

export default StyledAddAnswerField;
