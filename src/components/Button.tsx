import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  showArrow?: boolean;
}

export function Button({
  children,
  showArrow = true,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center gap-3 rounded-full bg-primary-green px-8 py-4 text-xl font-medium text-primary-black transition-colors hover:bg-white ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="h-6 w-6" strokeWidth={2} />}
    </button>
  );
}
