import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, 
  *:after, 
  *:before{
    box-sizing: border-box;
  }

  body {
    position: relative;

    overflow-x: hidden;
    min-width: 320px;

    font-size: 16px;
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito', sans-serif;

    background-color: ${({ theme }) => theme.body};
  }

  /* clears the ‘X’ from Internet Explorer */
  input[type=search]::-ms-clear { display: none; width : 0; height: 0; }
  input[type=search]::-ms-reveal { display: none; width : 0; height: 0; }
  /* clears the ‘X’ from Chrome */
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }
`;

export const lightTheme = {
  body: "#f5f4f9",
  main: "#fff",

  tableThead: "#eeeeee",
  tableBorder: "#eeeeee",

  greyLight: "#f9fafbd8",
  greyLightHover: "#e6e6e6d7",

  text: "#111",
  textLetter: "#111",

  downColor: "#ea3943",
  upColor: "#16c784",

  error: "#fa5c5c",
  errorText: "#fff",
  default: "#2f98fa",
  defaultAlpha: "#2f98faa9",

  focus: "#2f98fa",
  border: "#e2e2e2",

  borderHover: "#bebebe",
  placeholder: "#808080",
  placeholderHover: "#7a7a7a",

  btnMode: "#171717",

  linkMode: "#202020",
  linkModeHover: "#141414d5",
};

export const darkTheme = {
  body: "#444444",
  main: "#171717",

  tableThead: "#00000049",
  tableBorder: "#eeeeee94",

  greyLight: "#ffff",
  greyLightHover: "#e6e6e6",

  text: "#EDEDED",
  textLetter: "#111",

  downColor: "#ea3943",
  upColor: "#16c784",

  error: "#DA0037",
  errorText: "#fff",
  default: "#2f98fa",

  focus: "#2f98fa",
  border: "#e2e2e2",
  borderHover: "#bebebe",
  placeholder: "#808080",
  placeholderHover: "#7a7a7a",

  btnMode: "#fff",
};
