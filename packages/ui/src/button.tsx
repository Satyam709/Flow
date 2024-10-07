"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: ()=>void
}

export const Button = ({ children, className,onClick }: ButtonProps) => {
  return (
    <button
      className={"bg-button-primary px-2 py-1 font-semibold text-button-text hover:bg-button-hover  rounded-sm "+ className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
