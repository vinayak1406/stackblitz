'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/ThemeToggler';
import { useTheme } from 'next-themes';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!mounted) return null;

  return (
    <nav className="p-4 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className={`text-2xl font-bold flex items-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          <Calendar className="mr-2" />
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Date Recurrence
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`hover:underline ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <ModeToggle />
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <ul className="pt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`block py-2 hover:underline ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="py-2">
                <ModeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
