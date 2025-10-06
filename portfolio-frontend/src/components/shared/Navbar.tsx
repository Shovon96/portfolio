"use client";

import Link from "next/link";
import { useState } from "react";
import { Github, Menu, UserRound, X } from "lucide-react";
import ThemeToggle from "../theme-toggle";
import CustomButton from "./CustomButton";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linksDesktop = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/project", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }

  ];
  const linksMobile = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/project", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/login", label: "Login" }
  ];

  return (
    <nav className="w-full sticky top-0 z-50 border-b bg-white/40 backdrop-blur-md dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* GitHub Link */}
          <Link
            href="https://github.com/Shovon96"
          ><CustomButton icon={Github} buttonText="Github"></CustomButton>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {linksDesktop.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${isActive
                    ? "underline underline-offset-4 text-[#e643a7]"
                    : "text-muted-foreground hover:text-primary"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Link className="hidden md:flex space-x-6" href="/login"><CustomButton icon={UserRound} buttonText="Login"></CustomButton></Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white/95 dark:bg-black/95 backdrop-blur">
          <div className="flex flex-col space-y-2 p-4">
            {linksMobile.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
