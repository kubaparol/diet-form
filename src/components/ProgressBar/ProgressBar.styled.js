import styled from "styled-components";

const StyledProgressBar = styled.div`
  height: 25px;
  width: 100%;
  font-size: 16px;
  border-radius: 30px;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
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
    color: white;
  }
`;

export default StyledProgressBar;
