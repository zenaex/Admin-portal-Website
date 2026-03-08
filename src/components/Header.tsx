import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import logo from '../assets/logo.svg';

const navLinks = ['Products', 'Support', 'FAQ'];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-10">
      <div className="mx-auto flex h-[45px] max-w-[1220px] items-center justify-between px-6 lg:px-0">
        {/* Logo */}
        <a href="/" aria-label="Zenaex Home">
          <img src={logo} alt="Zenaex" className="h-5 w-auto" />
        </a>

        {/* Desktop Nav + CTA (right-aligned together) */}
        <div className="hidden items-center gap-12 md:flex">
          <nav className="flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-text-white transition-colors hover:text-primary-green"
              >
                {link}
              </a>
            ))}
          </nav>
          <Button className="!px-6 !py-2.5 !text-sm">Get Started</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-text-white md:hidden"
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
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-base font-medium text-text-white transition-colors hover:text-primary-green"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <Button className="mt-2 w-full !text-sm">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
