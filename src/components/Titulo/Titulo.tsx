import React, { JSX } from "react";

interface TituloProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Titulo({ children, className = "", as = "h2" }: TituloProps) {
  const Tag = as; // Essa linha é segura agora com o tipo correto

  return (
    <Tag
      className={`text-[48px] sm:text-[64px] ff-SourGummy-bold sm:leading-15 leading-12 font-bold text-center text-[#10151C] ${className}`}
    >
      {children}
    </Tag>
  );
}
