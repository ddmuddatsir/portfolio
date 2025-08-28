"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    // { href: "/blog", label: "Blog" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative flex items-center justify-between">
      {/* Desktop menu */}
      <div className="hidden md:flex gap-8 text-md">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            prefetch={true}
            className="relative group"
          >
            <span
              className={`${
                pathname === href ? "text-indigo-200" : "text-gray-500"
              } group-hover:text-indigo-600 transition-colors`}
            >
              {label}
            </span>
            {pathname === href && (
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-indigo-600 transition-all duration-200" />
            )}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger button */}
      <button
        className={`md:hidden fixed top-4 right-4 z-50 p-3 rounded-xl border border-gray-700/30 transition-all duration-300 ${
          isOpen
            ? "bg-gray-900/90 backdrop-blur-md hover:bg-gray-800/90 hover:border-gray-600/50"
            : ""
        }`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X size={18} className="text-gray-200" />
        ) : (
          <Menu size={18} className="text-gray-200" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile menu */}
          <div className="fixed top-4 right-4 w-64 bg-gray-950/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl z-40 md:hidden transform transition-all duration-300 ease-out">
            <div className="p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-800/50">
                <h3 className="text-sm font-medium text-gray-300">
                  Navigation
                </h3>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    prefetch={true}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 text-sm rounded-xl transition-all duration-200 ${
                      pathname === href
                        ? "text-white font-medium bg-blue-950/30 border border-blue-800/30"
                        : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/30"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
