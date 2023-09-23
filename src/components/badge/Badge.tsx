import { HTMLAttributes } from "react";
import styled from "styled-components";

export default function Badge({
  selected,
  children,
  ...props
}: { selected?: boolean; children: React.ReactNode } & HTMLAttributes<HTMLSpanElement>) {
  return (
    <StyledBadge selected={selected} {...props}>
      {children}
    </StyledBadge>
  );
}

const StyledBadge = styled.span<{ selected?: boolean }>`
  padding: 0.2rem 1.2rem;
  border-radius: 1rem;
  font-weight: 500;
  // @TODO: colors should be defined in theme
  ${props =>
    props.selected
      ? `
          background-color: #f2f4fb;
          color: #4473f5;
        `
      : `
          background-color: #f2f2f2;
          color: #585858;
        `}
`;
