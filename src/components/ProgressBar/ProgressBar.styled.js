import styled from "styled-components";

const StyledProgressBar = styled.div`
  height: 25px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50px;
  margin: 10px;
  div {
    height: 100%;
    width: ${(props) => props.completed}%;
    background-color: ${(props) => props.bgcolor};
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: width 1s;
  }
  span {
    padding: 5px;
    color: white;
  }
`;

export default StyledProgressBar;
