import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import logo from '../assets/shared/logo.svg';

const navLinks = ['Products', 'Support', 'FAQ'];

interface HeaderProps {
  variant?: 'light' | 'dark';
  onNavigate?: (page: 'home' | 'products') => void;
}

export function Header({ variant = 'light', onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-primary-black' : 'text-text-white';
  const logoClass = isDark ? 'invert' : '';

  return (
    <header className={`absolute top-0 left-0 w-full z-50 pt-10`}>
      <div className="mx-auto flex h-[45px] w-full max-w-[1440px] items-center justify-between px-8 md:px-12 lg:px-[110px]">
        {/* Logo */}
        <button 
          onClick={() => onNavigate?.('home')} 
          className="flex items-center" 
          aria-label="Zenaex Home"
        >
          <img src={logo} alt="Zenaex" className={`h-5 w-auto ${logoClass}`} />
        </button>

        {/* Desktop Nav + CTA (right-aligned together) */}
        <div className="hidden items-center gap-12 md:flex">
          <nav className="flex items-center gap-12">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  if (link === 'Products') {
                    onNavigate?.('products');
                  }
                }}
                className={`text-sm font-medium ${textColor} transition-colors hover:text-primary-green`}
              >
                {link}
              </button>
            ))}
          </nav>
          <Button variant="primary" className="!px-6 !py-2.5 !text-sm">Get Started</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`${textColor} md:hidden`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-primary-black/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  if (link === 'Products') {
                    onNavigate?.('products');
                  }
                  setMobileOpen(false);
                }}
                className={`text-left text-base font-medium ${textColor} transition-colors hover:text-primary-green`}
              >
                {link}
              </button>
            ))}
            <Button variant="primary" className="mt-2 w-full !text-sm">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
