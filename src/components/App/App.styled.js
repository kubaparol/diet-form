import styled from "styled-components";

const StyledApp = styled.main`
  padding: 23px 10px;
  background-color: ${(props) => props.theme.mainBcg};
  min-height: 100vh;
  overflow: hidden;
`;

export default StyledApp;
