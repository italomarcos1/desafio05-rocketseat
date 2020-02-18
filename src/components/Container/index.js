import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px; /** largura máxima */
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 0 20px rgba(0, 0, 0, 0.1); /** 0 do eixo x 0 do y, 20 de blur. preto com 10% de opacity */
  padding: 30px; /** espaçamento interno */
  margin: 80px auto; /** auto define margem automática nas laterais. mantém centralizado na tela */

  h1 {
    display: flex;
    font-size: 20px;
    flex-direction: row; /** alinha os elementos pela linha */
    align-items: center; /** os itens ficam na mesma centralização */
  }

  svg {
    margin-right: 10px; /** o ícone é um svg, distancia ele do texto. */
  }
`;

export default Container;
