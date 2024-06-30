import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#ffffff',
  pink: '#E66767',
  transparent: 'transparent',
  pinkLight: '#FFEBD9',
  black: '#000000',
  red: '#ff0000',
  green: '#008000'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalCss = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
 }

 body {
    background-color: ${colors.white};
    color: ${colors.pink};

    .container {
        max-width: 1024px;
        margin: 0 auto;

     @media (max-width: ${breakpoints.tablet}){
      width: 100%;
    }   
    }
 }

`

export default GlobalCss
