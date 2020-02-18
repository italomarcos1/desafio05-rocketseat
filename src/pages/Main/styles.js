import styled, { keyframes, css } from 'styled-components';

export const Title = styled.h1`
  font-size: 24px; /** tamanho da fonte */
  color: ${props =>
    props.error
      ? 'red'
      : '#e6b32a'}; /** arrow function com if ternario caso haja a prop error executa*/
  font-family: Arial, Helvetica, sans-serif;

  strong {
    /** tag encadeada. subtitulo do componente */
    color: #7159c1;
    font-size: 12px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex; /** pra fazer o flex funcionar */
  flex-direction: row; /** garante que input e botão fiquem um ao lado do outro. */
`;

export const Input = styled.input`
  flex: 1; /** faz ocupar todo o espaço possível */
  border: 2px solid ${props => (props.double ? '#f00' : '#e6b32a')}; /** borda do input em cor sólida */
  padding: 10px 15px; /** o primeiro parâmetro é pra up-down e o segundo pra laterais */
  border-radius: 4px; /** largura da borda */
  font-size: 16px;
`;

const rotate = keyframes` /** animação para rotacionar o icon. */
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  // pra conseguir retornar um objeto deve colocar parênteses por volta da chave, senão confunde com função
  type: 'submit', // pra não precisar passar a prop pelo componente, não polui código
  disabled: props.loading, // puxamos a propriedade loading do componente e chamamos de disabled
}))`
  background: #e6b32a;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center; /**  somando as 3 propriedades, todo conteúdo do botão sempre fica ao centro */
  align-items: center;

  &[disabled] {
    /** '&' se refere à este elemento. a prop entre chaves implica que só será aplicado na prop disabled */
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading && // condicional para a animação css funcionar apenas com o loading true.
    css`
      /** como poderia ser um conjunto de propriedades, usamos o css do styled-components */
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none; /** remove o ícone de listagem */
  margin-top: 30px; /** distancia a list do input */

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between; /** separa os elementos da li, um para cada extremo */
    align-items: center;

    & + li {
      /** & aplica referência. apenas no elemento atual que seja seguido por um li anterior. */
      border-top: 1px solid #eee;
    }
  }

  a {
    color: #e6b32a;
    text-decoration: none; /** tira o sublinhado do link */
  }
`;
