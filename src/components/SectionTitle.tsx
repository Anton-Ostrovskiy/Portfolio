import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
${font({ family: "'Poppins', sans-serif", weight: 700, color: `${theme.colors.font}`, lineHeight: 1.2069, Fmax: 48, Fmin: 36 })}
    text-align: center;
    /* color: ${theme.colors.font}; */
    margin-bottom: 50px;
`