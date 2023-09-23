import { HTMLAttributes } from "react";
import styled from "styled-components";

export default function Badge({
  active,
  children,
  ...props
}: { active?: boolean; children: React.ReactNode } & HTMLAttributes<HTMLSpanElement>) {
  return (
    <StyledBadge active={active} {...props}>
      {children}
    </StyledBadge>
  );
}

const StyledBadge = styled.span<{ active?: boolean }>`
  padding: 0.2rem 1.2rem;
  border-radius: 1rem;
  font-weight: 500;
  // @TODO: colors should be defined in theme
  ${props =>
    props.active
      ? `
          background-color: #f2f4fb;
          color: #4473f5;
        `
      : `
          background-color: #f2f2f2;
          color: #585858;
        `}
`;
