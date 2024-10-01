'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Github, Heart } from 'lucide-react';

export default function Footer() {
  const { theme } = useTheme();

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`p-4 transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gray-800 text-white'
          : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Date Recurrence</h2>
            <p className="text-sm mt-1">Simplifying your scheduling needs</p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-4">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>© {currentYear} Date Recurrence. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Your
            Team
          </p>
        </div>
      </div>
    </footer>
  );
}
