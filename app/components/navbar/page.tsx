'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between px-5 py-3">
      <div className="flex items-center flex-shrink-0 text-2xl mr-6">
        <span>Logo</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-blue-500 border-blue-500 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link href="/" className={`link ${pathname === '/' ? 'active' : ''} block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-white mr-4`}>
            Home
          </Link>
          <Link href="/about" className={`link ${pathname === '/about' ? 'active' : ''} block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-white mr-4`}>
            About
          </Link>
          <Link href="/contact" className={`link ${pathname === '/contact' ? 'active' : ''} block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-white`}>
            Contact
          </Link>
        </div>
        <div>
          <Link 
          className="btn btn-primary text-white rounded-lg mt-4 w-26 sm:w-34 bg-transparent"
          href='/SignIn'
          >login</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
