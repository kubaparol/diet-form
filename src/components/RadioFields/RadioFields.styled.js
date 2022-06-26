import styled from "styled-components";

const StyledRadioFields = styled.div`
  display: flex;
  flex-direction: column;
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 30px;
  padding: 16px;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
  margin-right: 8px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
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
        box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7,
          inset -0.2rem -0.2rem 0.5rem #ffffff;
        &::after {
          background-color: #ae1100;
        }
      }
    }
    label {
      box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
      background-color: #ebecf0;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin: 0;
      &:active {
        box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
      }
      &:hover {
        box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
      }
      &::after {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        background: #babecc;
        border-radius: 50%;
        transition: 0.3s ease;
      }
    }
  }
`;

export default StyledRadioFields;
