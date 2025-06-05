import React, { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`bg-[#000000] text-white text-base ff-SourGummy-bold py-3.5 px-6 rounded-full hover:bg-gray-800 transition ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
