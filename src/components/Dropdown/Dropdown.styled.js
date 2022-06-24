import styled from "styled-components";

const StyledDropdown = styled.div`
  width: 100%;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
  }
  p:nth-child(2) {
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export default StyledDropdown;
