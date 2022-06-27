import styled from "styled-components";

const StyledProgressBar = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  height: 25px;
  width: 90%;
  font-size: 16px;
  border-radius: 30px;
  box-shadow: -5px -5px 20px ${(props) => props.theme.shadowFirstColor},
    5px 5px 20px ${(props) => props.theme.shadowSecondColor};
  background-color: ${(props) => props.theme.elementBcg};
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
  @media ${(props) => props.theme.media.tablet} {
    max-width: 800px;
  }
`;

export default StyledProgressBar;
