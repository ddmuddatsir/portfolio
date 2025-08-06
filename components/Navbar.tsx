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
    { href: "/blog", label: "Blog" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex gap-8 text-md  ">
      {/* Hamburger button */}
      <button
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

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

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full flex flex-col gap-4 px-6 py-4 md:hidden backdrop-blur-md bg-white/10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              prefetch={true}
              onClick={() => setIsOpen(false)}
              className="text-gray-100 text-md w-full"
            >
              <span
                className={`${
                  pathname === href ? "text-indigo-300 font-semibold" : ""
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
