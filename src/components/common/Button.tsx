import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

type Size = "small" | "medium";

interface Props {
  size: Size;
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = ({ size, label, type, onClick, ...arg }: Props) => {
  return (
    <BaseButton
      size={size}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      type={type}
      onClick={onClick}
      {...arg}
    >
      {label}
    </BaseButton>
  );
};

const BaseButton = styled(motion.button)<{ size: Size }>`
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
