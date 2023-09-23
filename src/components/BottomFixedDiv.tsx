import { PropsWithChildren } from "react";
import styled from "styled-components";

interface BottomFixedDivProps {}
export default function BottomFixedDiv({ children }: PropsWithChildren) {
  return <BottomFixedDivWrapper>{children}</BottomFixedDivWrapper>;
}

const BottomFixedDivWrapper = styled.div`
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 2rem;
`;
