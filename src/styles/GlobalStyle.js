import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background: #FCFCFC;
    font-family: 'Raleway';
    &::-webkit-scrollbar { 
      display: none; 
    }
  }
`
