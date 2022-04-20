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
`;

export const lightTheme = {
  body: "#f5f4f9",
  main: "#fff",

  tableThead: "#eeeeee",
  tableBorder: "#eeeeee",

  text: "#111",
  textLetter: "#111",

  error: "#fa5c5c",
  errorText: "#fff",
  default: "#2f98fa",

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

  text: "#EDEDED",
  textLetter: "#111",

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
