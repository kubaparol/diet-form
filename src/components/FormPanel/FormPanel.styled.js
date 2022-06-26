import styled from "styled-components";

const StyledFormPanel = styled.section`
  padding: 10px;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media screen and (min-width: 1000px) {
    max-width: 1000px;
    margin: 0 auto;
  }
`;

export default StyledFormPanel;
