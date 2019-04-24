import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

/**
 * constatei que se não tiver o flex: 1 o Container não
 * fica com 100% de altura.
 *
 */
export const Container = styled.div`
  flex: 1; /* para pegar a lergura total da tela */
  display: flex;
`;
