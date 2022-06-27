import styled from "styled-components";

const StyledDropdown = styled.div`
  border: 0;
  font-size: 16px;
  border-radius: 30px;
  padding: 16px;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 ${(props) => props.theme.shadowFirstColor};
  color: ${(props) => props.theme.fontColor};
  box-shadow: -5px -5px 20px ${(props) => props.theme.shadowFirstColor},
    5px 5px 20px ${(props) => props.theme.shadowSecondColor};
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    font-weight: 400;
  }
  p:nth-child(2) {
    font-size: 1.4rem;
    padding-right: 10px;
  }
`;

export default StyledDropdown;
