import { createGlobalStyle } from 'styled-components'

export const cores = {
  white: '#ffffff',
  pink: '#E66767',
  transparent: 'transparent',
  pinkLight: '#FFEBD9'
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
    background-color: ${cores.white};
    color: ${cores.pink};

    .container {
        max-width: 1024px;
        margin: 0 auto;
    }
 }

`

export default GlobalCss
