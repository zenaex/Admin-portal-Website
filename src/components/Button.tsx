import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  showArrow?: boolean;
  variant?: 'primary' | 'dark' | 'outline';
  to?: string;
}

export function Button({
  children,
  showArrow = true,
  variant = 'primary',
  className = '',
  to,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: "bg-primary-green text-primary-black hover:bg-white",
    dark: "bg-primary-black text-white hover:bg-gray-800",
    outline: "bg-transparent border border-primary-black text-primary-black hover:bg-primary-black hover:text-white"
  };

  const commonClasses = `flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight className="h-4 w-4" strokeWidth={2.5} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={commonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={commonClasses}
      {...props}
    >
      {content}
    </button>
  );
}
