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
    ${(props) => props.theme.fontColor}
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
    background-color: ${(props) => props.theme.elementBcg};
    text-shadow: 1px 1px 0 ${(props) => props.theme.shadowFirstColor};
    color: ${(props) => props.theme.fontColor};
    box-shadow: -5px -5px 20px ${(props) => props.theme.shadowFirstColor},
      5px 5px 20px ${(props) => props.theme.shadowSecondColor};
    margin: 10px 0;
  }
  p {
    margin-right: 8px;
    color: ${(props) => props.theme.fontColor};
  }
  @media ${(props) => props.theme.media.tablet} {
    p {
      cursor: pointer;
    }
    li {
      transition: 0.1s;
    }
    li:hover {
      background-color: #d7d9de;
      text-shadow: none;
    }
  }
`;

export default StyledAddAnswerField;
