import { styled } from "styled-components";

type Size = "small" | "medium";

interface Props {
  size: Size;
  label: string;
}

const Button = ({ size, label }: Props) => {
  return <BaseButton size={size}>{label}</BaseButton>;
};

const BaseButton = styled.button<{ size: Size }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${({ size }) => (size === "medium" ? "14px" : "6px")};
  font-size: ${({ size }) => (size === "medium" ? "16px" : "10px")};
  font-weight: 600;
  color: #fff;
  background-color: #4473f5;
  border-radius: 4px;
`;

export default Button;
