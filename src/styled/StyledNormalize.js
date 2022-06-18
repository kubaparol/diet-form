import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const StyledNormalize = createGlobalStyle`
    ${normalize}

    * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    }
`;

export default StyledNormalize;
