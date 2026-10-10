"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Mail,
  Code2,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[92%] max-w-6xl -translate-x-1/2">
      <nav className="rounded-2xl border border-[#B9857C]/30 bg-[#1C0B12]/80 px-5 py-3 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-[#EFE1CE]"
          >
            <Code2 size={22} className="text-[#B9857C]" />

            <span className="font-serif text-lg font-semibold">
              Shweta Bharti
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-[#EFE1CE]/80 transition-colors duration-300 hover:text-[#B9857C]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/Shweta-Bharti-Resume.pdf"
              target = "_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#B9857C]/50 px-4 py-2 text-sm text-[#EFE1CE] transition-all duration-300 hover:border-[#B9857C] hover:bg-[#721D35] hover:text-white"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-[#EFE1CE] transition-colors hover:bg-[#42121F] lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-4 border-t border-[#B9857C]/20 pt-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-[#EFE1CE]/90 transition-colors hover:bg-[#42121F] hover:text-[#B9857C]"
                >
                  {link.name}
                </a>
              ))}

                  <a
                    href="/Shweta-Bharti-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg border border-[#B9857C]/50 px-3 py-2 text-[#EFE1CE] transition-colors hover:bg-[#42121F] hover:text-[#B9857C]"
                  >
                    Resume
                  </a>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}