'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { smoothScrollTo } from '@/utils/smoothScroll';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Testimonials', href: 'testimonials' },
  { name: 'Journey', href: 'journey' },
  { name: 'About', href: 'about' },
  { name: 'Programs', href: 'programs' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      smoothScrollTo(href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md ">
      <Container>
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center"
              onClick={(e) => handleNavClick(e, '/')}
            >
              <Image
                src="/images/sarah wellness.webp"
                alt="Sarah Wellness"
                width={150}
                height={40}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            <Button
              className="bg-primary-600 text-white hover:bg-primary-500"
              onClick={() => window.open('https://www.linkedin.com/in/varunkrishna90/', '_blank')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-neutral-600 hover:text-neutral-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  className="block px-3 py-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                className="w-full mt-4 bg-primary-600 text-white hover:bg-primary-500"
                onClick={() => {
                  window.open('https://www.linkedin.com/in/varunkrishna90/', '_blank');
                  setMobileMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
