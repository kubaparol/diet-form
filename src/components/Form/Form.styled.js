import styled from "styled-components";

const StyledForm = styled.form`
  background-color: #bbb;
  min-height: 80vh;
  padding: 20px 35px;
  border-radius: 35px;
  background: #ecf0f3;
  box-shadow: -6px -6px 6px rgba(255, 255, 255, 0.8), 6px 6px 6px rgba(0, 0, 0, 0.2);
  ol {
    background: none;
    font-size: 18px;
    color: #555;
    padding: 15px 10px 15px 5px;
    margin-bottom: 20px;
    border-radius: 20px;
    box-shadow: inset 5px 5px 5px #cbced1, inset -5px -5px 5px #ffffff;
    display: flex;
    flex-wrap: wrap;
  }
  li img {
    width: 80px;
    height: 50px;
    border-radius: 10px;
    margin: 0 5px;
  }
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  max-width: 200px;
  font-size: 30px;
`;

export { StyledForm, StyledRow };
