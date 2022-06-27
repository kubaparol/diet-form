import styled from "styled-components";

const StyledFormPanel = styled.section`
  padding: 10px;

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
