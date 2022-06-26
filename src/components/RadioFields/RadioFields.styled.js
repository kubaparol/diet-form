import styled from "styled-components";

const StyledRadioFields = styled.div`
  display: flex;
  flex-direction: column;
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
      }
    }
    label {
      box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin: 0;
      &:hover {
        &::after {
          background-color: #6d5dfc;
        }
      }
      &::after {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        background: #9baacf;
        border-radius: 50%;
        transition: 0.3s ease;
      }
    }
  }
`;

export default StyledRadioFields;
