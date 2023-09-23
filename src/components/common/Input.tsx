import { ChangeEvent, HTMLAttributes } from "react";
import { styled } from "styled-components";

type Size = "large" | "medium";

interface Props extends Omit<HTMLAttributes<HTMLInputElement>, "onChange"> {
  size: Size;
  value: string;
  onChange: (value: string) => void;
}

const Input = ({ size, value, onChange, ...arg }: Props) => {
  const handeChane = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Wrapper size={size}>
      <BaseInput size={size} value={value} onChange={handeChane} {...arg} />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div<{ size: Size }>`
  padding: ${({ size }) => (size === "large" ? "14px 16px" : "13px 16px")};
  border: 1px solid #d2d1d1;
  border-radius: 4px;
  transition: border 0.2s;

  &:hover {
    border: 1px solid #4473f5;
  }
  &:focus-within {
    border: 1px solid #4473f5;
  }
`;

const BaseInput = styled.input<{ size: Size }>`
  width: 100%;
  font-size: ${({ size }) => (size === "large" ? "16px" : "12px")};
  font-weight: 400;
  color: #2d2d2d;
`;
