import styled from "styled-components";

export const Container = styled.div`
  height: 42px;
  line-height: 42px;
  padding: 0 20px;
  color: rgba(
    0,
    0,
    0,
    0.6
  ); /* preto com opacidade menor, dessa forma a fonte vai ser sempre um pouco mais escura que o fundo */
  background: #f55a5a;
  margin: 20px 0 10px;
  font-size: 13px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between; /* para que o texto fique à esquerda e o ícone fechar à direita */
  align-items: center; /* pois texto e ícone não terão o mesmo tamanho */

  button {
    border: 0;
    background: transparent;

    img {
      height: 14px;
    }
  }
`;
