import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  showArrow?: boolean;
  variant?: 'primary' | 'dark' | 'outline';
}

export function Button({
  children,
  showArrow = true,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: "bg-primary-green text-primary-black hover:bg-white",
    dark: "bg-primary-black text-white hover:bg-gray-800",
    outline: "bg-transparent border border-primary-black text-primary-black hover:bg-primary-black hover:text-white"
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="h-4 w-4" strokeWidth={2.5} />}
    </button>
  );
}
