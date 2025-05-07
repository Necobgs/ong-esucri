// src/components/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-black text-white text-base ff-SourGummy-bold py-3.5 px-6 rounded-full hover:bg-gray-800 transition" ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;