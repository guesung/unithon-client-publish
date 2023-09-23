import styled from "styled-components";

export const Spacing = styled.div<{ size: number }>`
  height: ${({ size }) => size * 0.1}rem;
`;
