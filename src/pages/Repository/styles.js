import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center; /** alinha horizontalmente ao center */
  align-items: center;
  height: 100vh; /** altura total da tela */
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column; /** alinha um item embaixo do outro */
  align-items: center; /** centraliza os itens */

  a {
    color: #e6b32a;
    font-size: 16px;
    text-decoration: none; /** tira o sublinhado do link */
  }

  img {
    width: 120px;
    border-radius: 50%; /** garante que a borda fique arredondada */
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4; /** aumenta a linha tradicional em 40% */
    text-align: center;
    max-width: 400px; /** pra não ocupar do começo ao final */
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px; /** distancia a lista do header */
  margin-top: 30px; /** quando adicionar borda, fica no centro entre a distância do margin e do padding */
  border-top: 1px solid #eee;
  list-style: none; /** tira os ícones de listagem */

  li {
    display: flex; /** alinha na horizontal (nesse caso?) */
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      /** aplica somente nos elementos que tem uma li anterior */
      margin-top: 10px;
    }

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1; /** ocupa todo o espaço possível */
      margin-left: 15px; /** distancia da imagem do usuário */

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            /** quando passa o mouse por cima */
            color: #e6b32a;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px; /** primeiro parâmetro é up-down e segundo é right-left */
          margin-left: 10px; /** distancia do elemento à esquerda */
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
