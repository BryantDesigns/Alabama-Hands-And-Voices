import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  label,
  onClick,
  variant = "primary",
  className,
  disabled = false,
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded font-medium text-sm transition";
  const variantStyles = {
    primary: "bg-hvorange-500 text-white hover:bg-hvorange-600",
    secondary: "bg-hvblue-500 text-white hover:bg-hvblue-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {label}
    </button>
  );
}
