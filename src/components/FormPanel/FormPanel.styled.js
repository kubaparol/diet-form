import styled from "styled-components";

const StyledFormPanel = styled.section`
  padding-top: 30px;
  border: 1px solid red;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media ${(props) => props.theme.media.tablet} {
    max-width: 800px;
    margin: 0 auto;
  }
`;

export default StyledFormPanel;
