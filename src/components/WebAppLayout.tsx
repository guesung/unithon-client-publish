import type { PropsWithChildren } from "react";
import styled from "styled-components";

interface WebAppLayoutProps extends PropsWithChildren {
  backgroundcolor?: string;
}

export default function WebAppLayout({ children, backgroundcolor = "#fff" }: WebAppLayoutProps) {
  return (
    <OuterWrapper>
      <InnerWrapper backgroundcolor={backgroundcolor}>{children}</InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  justify-content: center;
  overflow-y: scroll;
  background-color: #f8f9fa;
`;

const InnerWrapper = styled.div<{ backgroundcolor: string }>`
  position: relative;
  min-height: 100vh;
  width: 100%;
  max-width: 400px;
  ${props =>
    `
      background-color: ${props.backgroundcolor};
    `}
  color: #2D2D2D;
  padding-left: 3rem;
  padding-right: 3rem;
`;
