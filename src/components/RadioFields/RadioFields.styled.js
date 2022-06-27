import styled from "styled-components";

const StyledRadioFields = styled.div`
  display: flex;
  flex-direction: column;
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 30px;
  padding: 16px;
  background-color: ${(props) => props.theme.elementBcg};
  text-shadow: 1px 1px 0 ${(props) => props.theme.shadowFirstColor};
  margin-right: 8px;
  box-shadow: inset 2px 2px 5px ${(props) => props.theme.shadowSecondColor},
    inset -5px -5px 10px ${(props) => props.theme.shadowFirstColor};
  width: 100%;
  box-sizing: border-box;
  p {
    text-align: center;
    margin: 5px;
  }
  input {
    opacity: 0;
  }
  div {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & input:checked {
      & ~ label {
        box-shadow: inset 0.2rem 0.2rem 0.5rem
            ${(props) => props.theme.radioShadowFirstColor},
          inset -0.2rem -0.2rem 0.5rem
            ${(props) => props.theme.radioShadowSecondColor};
        &::after {
          background-color: ${(props) => props.theme.radioBcgAfter};
        }
      }
    }
    label {
      box-shadow: -5px -5px 20px ${(props) => props.theme.shadowFirstColor},
        5px 5px 20px ${(props) => props.theme.shadowSecondColor};
      background-color: ${(props) => props.theme.elementBcg};
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin: 0;
      &:active {
        box-shadow: inset 1px 1px 2px
            ${(props) => props.theme.shadowSecondColor},
          inset -1px -1px 2px ${(props) => props.theme.shadowFirstColor};
      }
      &:hover {
        box-shadow: -2px -2px 5px ${(props) => props.theme.shadowFirstColor},
          2px 2px 5px ${(props) => props.theme.shadowSecondColor};
      }
      &::after {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        background: ${(props) => props.theme.shadowSecondColor};
        border-radius: 50%;
        transition: 0.3s ease;
      }
    }
  }
`;

export default StyledRadioFields;
