import styled from "styled-components";

const StyledAddItem = styled.ul`
  padding: 15px 10px 15px 5px;
  border-radius: 20px;
  box-shadow: inset 5px 5px 5px #cbced1, inset -5px -5px 5px #ffffff;
  position: relative;
  padding: 10px;
  button {
    position: absolute;
    top: 42px;
    right: 22px;
    font-size: 20px;
  }
  li {
    margin-left: 20px;
    list-style: circle;
  }
`;

export default StyledAddItem;
