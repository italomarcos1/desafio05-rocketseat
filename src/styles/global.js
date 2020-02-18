import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * { /** o '*' atua em todos os elementos do HTML */
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    /** box-sizing faz com que todos os espaçamentos sejam somados com a largura do elemento */
    /** 280px de largura + 10 de padding não consome 300px, espreme o conteúdo em 260 (10px de cada lado) */
    }

    /** a página ocupa 100% da altura por padrão. por padrão o HTML ocupa apenas a altura do elemento */
    html, body, #root {
      min-height: 100%;
    }

     body {
      background: #e6b32a;
      -webkit-font-smoothing: antialiased !important; /** deixa a fonte sem serrilhado. o !important dá override no browser */
     }

     body, input, button {
       color: #222;
       font-size: 14px;
       font-family: Arial, Helvetica, sans-serif;
     }

     button{
       cursor: pointer;
     }
`;
