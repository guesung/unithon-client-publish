import type { PropsWithChildren } from "react";
import styled from "styled-components";

type Variant = "webapp" | "web";

interface WebAppLayoutProps extends PropsWithChildren {
  transitionx?: string;
  innerbackgroundcolor?: string;
  outerbackgroundcolor?: string;
  leftSide?: React.ReactNode;
  variant?: Variant;
}

export default function WebAppLayout({
  children,
  innerbackgroundcolor = "#fff",
  outerbackgroundcolor = "#f8f9fa",
  transitionx = "0",
  leftSide,
  variant = "webapp",
}: WebAppLayoutProps) {
  return (
    <OuterWrapper outerbackgroundcolor={variant === "webapp" ? outerbackgroundcolor : "#fff"}>
      {leftSide}
      <InnerWrapper innerbackgroundcolor={innerbackgroundcolor} transitionx={transitionx} variant={variant}>
        {children}
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.div<{ outerbackgroundcolor: string }>`
  display: flex;
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  justify-content: center;
  background-color: ${props => props.outerbackgroundcolor};
`;

export const InnerWrapper = styled.div<{ innerbackgroundcolor: string; transitionx: string; variant: Variant }>`
  position: relative;
  min-height: 100vh;
  width: 100%;
  max-width: ${({ variant }) => (variant === "webapp" ? "400px" : undefined)};
  ${props =>
    `
      background-color: ${props.innerbackgroundcolor};
    `}
  color: #2D2D2D;
  padding-left: 3rem;
  padding-right: 3rem;
  transform: translateX(${props => props.transitionx});
`;
