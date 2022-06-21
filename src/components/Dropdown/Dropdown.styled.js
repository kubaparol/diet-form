import styled from "styled-components";

const StyledDropdown = styled.div`
  padding: 15px 10px 15px 5px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: inset 5px 5px 5px #cbced1, inset -5px -5px 5px #ffffff;
  position: relative;
  button {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  li {
    margin: 10px;
  }
`;

export default StyledDropdown;
