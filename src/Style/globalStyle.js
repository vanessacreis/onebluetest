import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  	font-size: 62.5%;
	}

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,body{
    width: 100%;
    min-height: 100vh;
    overflow: overlay;
  }
`;

export const colors = {
  name: "colors",
  white: "#FCFCFC",
  black: "#0d0d0d",
  blue: "#007CC3",
  gray: "#F2F2F2",
  darkgray: "#929292",
};
