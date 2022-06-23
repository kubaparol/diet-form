import styled from "styled-components";

const StyledFormPanel = styled.section`
  padding: 20px;
  background-color: #e8f0f9;
  border-radius: 12px;
  box-shadow: 2px 2px 1px #cecece, -2px -2px 1px #ffffff;
  border-radius: 25px;
  height: 85vh;
  overflow-y: scroll;

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
