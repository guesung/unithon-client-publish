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
  padding: ${({ size }) => (size === "large" ? "1.4rem 1.6rem" : "1.3rem 1.6rem")};
  border: 0.1rem solid #d2d1d1;
  border-radius: 0.4rem;
  transition: border 0.2s;

  &:hover {
    border: 0.1rem solid #4473f5;
  }
  &:focus-within {
    border: 0.1rem solid #4473f5;
  }
`;

const BaseInput = styled.input<{ size: Size }>`
  width: 100%;
  font-size: ${({ size }) => (size === "large" ? "1.6rem" : "1.2rem")};
  font-weight: 400;
  color: #2d2d2d;
`;
