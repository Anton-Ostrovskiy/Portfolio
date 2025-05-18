import { Button } from './../components/Button';
import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
import { section } from 'motion/react-client';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: Poppins;
  src: url(./assets/fonts/Poppins-Bold.eot?) format("eot"),
        url(./assets/fonts/Poppins-Bold.woff2) format("woff2"),
        url(./assets/fonts/Poppins-Bold.ttf) format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: Poppins;
  src: url(./assets/fonts/Poppins-Light.eot?) format("eot"),
        url(./assets/fonts/Poppins-Light.woff2) format("woff2"),
        url(./assets/fonts/Poppins-Light.ttf) format("truetype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: Poppins;
  src: url(./assets/fonts/Poppins-Medium.eot?) format("eot"),
        url(./assets/fonts/Poppins-Medium.woff2) format("woff2"),
        url(./assets/fonts/Poppins-Medium.ttf) format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: Poppins;
  src: url(./assets/fonts/Poppins-Regular.eot?) format("eot"),
        url(./assets/fonts/Poppins-Regular.woff2) format("woff2"),
        url(./assets/fonts/Poppins-Regular.ttf) format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: Poppins;
  src: url(./assets/fonts/Poppins-SemiBold.eot?) format("eot"),
        url(./assets/fonts/Poppins-SemiBold.woff2) format("woff2"),
        url(./assets/fonts/Poppins-SemiBold.ttf) format("truetype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: DMSans;
  src: url(./assets/fonts/DMSans-Bold.eot?) format("eot"),
        url(./assets/fonts/DMSans-Bold.woff2) format("woff2"),
        url(./assets/fonts/DMSans-Bold.ttf) format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: DMSans;
  src: url(./assets/fonts/DMSans-Medium.eot?) format("eot"),
        url(./assets/fonts/DMSans-Medium.woff2) format("woff2"),
        url(./assets/fonts/DMSans-Medium.ttf) format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: DMSans;
  src: url(./assets/fonts/DMSans-Regular.eot?) format("eot"),
        url(./assets/fonts/DMSans-Regular.woff2) format("woff2"),
        url(./assets/fonts/DMSans-Regular.ttf) format("truetype");
  font-weight: 400;
  font-style: normal;
}

*,
 *::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:${theme.colors.font};
}

a{
    text-decoration: none;
    color:${theme.colors.font};
}

ul {
    list-style: none;
}

button {
  background-color: unset;
  border: none;
}

section {
  padding: 100px 0;
}
`