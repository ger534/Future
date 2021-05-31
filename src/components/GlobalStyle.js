import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle `
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  lol {
    color: #999;
  }
  .makeStyles-paper-25 { 
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .MuiDrawer-paper { 
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .MuiPaper-rounded {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  `