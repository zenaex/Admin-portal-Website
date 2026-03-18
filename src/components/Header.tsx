import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import logo from '../assets/shared/logo.svg';

const navLinks = [
  { name: 'Products', path: '/products' },
  { name: 'Support', path: '/support' },
  { name: 'FAQ', path: '/FAQ' }
];

interface HeaderProps {
  variant?: 'light' | 'dark';
}

export function Header({ variant: explicitVariant }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // If no variant is explicitly passed, default to light only on the home page
  const variant = explicitVariant || (location.pathname === '/' ? 'light' : 'dark');

  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-primary-black' : 'text-text-white';
  const logoClass = isDark ? 'invert' : '';

  return (
    <header className={`absolute top-0 left-0 w-full z-50 pt-4 md:pt-10`}>
      <div className="mx-auto flex h-[45px] w-full max-w-[1440px] items-center justify-between px-8 md:px-12 lg:px-[110px]">
        {/* Logo */}
        <Link 
          to="/"
          className="flex items-center" 
          aria-label="Zenaex Home"
        >
          <img src={logo} alt="Zenaex" className={`h-5 w-auto ${logoClass}`} />
        </Link>

        {/* Mobile Nav Actions (Get Started + Burger) */}
        <div className="flex items-center gap-4 md:hidden">
          <Button to="/waitlist" variant="primary" className="!px-4 !py-2 !text-xs">Get Started</Button>
          <button
            className={`${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Nav + CTA */}
        <div className="hidden items-center gap-12 md:flex">
          <nav className="flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium ${textColor} transition-colors hover:text-primary-green`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Button to="/waitlist" variant="primary" className="!px-6 !py-2.5 !text-sm">Get Started</Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-primary-black/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-left text-base font-medium ${textColor} transition-colors hover:text-primary-green`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
