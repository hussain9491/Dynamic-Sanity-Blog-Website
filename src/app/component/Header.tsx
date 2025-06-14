'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: If using Lucide icons
import Link from 'next/link'
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">Blogs and Articles</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-white">home</ Link>
          <Link href="/" className="mr-5 hover:text-white">about</Link>
          <Link href="/" className="mr-5 hover:text-white">blog</ Link>
          <Link href="/" className="mr-5 hover:text-white">contact</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-auto text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4">
          <Link href="/" className="block py-2 hover:text-white">home</ Link>
          <Link href="/" className="block py-2 hover:text-white">about</Link>
          <Link href="/" className="block py-2 hover:text-white">blog</ Link>
          <Link href="/" className="block py-2 hover:text-white">contact</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
