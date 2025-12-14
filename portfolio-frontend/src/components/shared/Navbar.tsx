"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import { Github, Menu, UserRound, X } from "lucide-react";
import ThemeToggle from "../theme-toggle";
import CustomButton from "./CustomButton";
import { usePathname, useRouter } from "next/navigation";
// import profileLogo from "../../../public/fakhruddin-portfolio-logo-image90843 (1).png";
// import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);

  // user role handle
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/me`, {
        credentials: "include",
        cache: "no-store"
      });
      const json = await res.json();
      setUser(json);
    };

    fetchData();
    window.addEventListener("userUpdated", fetchData);
    return () => window.removeEventListener("userUpdated", fetchData);
  }, []);
  // console.log(user)
  const userRole = user?.Role;

  // logout handle
  const logout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/logout`, {
      method: "POST",
      credentials: "include",
      cache: "no-store"
    });
    window.dispatchEvent(new Event("userUpdated"));
  };

  const linksDesktop = [
    { href: "home", label: "Home" },
    { href: "about", label: "About Me" },
    { href: "projects", label: "Projects" },
    { href: "blogs", label: "Blogs" },
    { href: "contact", label: "Contact" }
  ];

  const linksMobile = [
    { href: "home", label: "Home" },
    { href: "about", label: "About Me" },
    { href: "projects", label: "Projects" },
    { href: "blogs", label: "Blogs" },
    { href: "contact", label: "Contact" },
    // { href: "/login", label: "Login" }
  ];

  const router = useRouter();

  const handleSectionClick = (sectionId: string) => {
    if (pathname !== "/") {
      sessionStorage.setItem("scrollToSection", sectionId);
      router.push("/");
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
    setIsOpen?.(false);
  };

  const handlePageClick = (href: string) => {
    router.push(href);
    setIsOpen?.(false);
  };
  const name = "</ FA>"

  return (
    <nav className="w-full sticky top-0 z-50 border-b bg-white/40 backdrop-blur-md dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <p className="text-primary font-extrabold text-4xl text-shadow-lg/70 text-shadow-purple-400 bg-transparent">{name}</p>
          {/* <Image
            src={profileLogo}
            alt="Logo"
            width={300}
            height={80}
            className="cursor-pointer w-52 h-8 md:w-72 md:h-10"
            onClick={() => handlePageClick("/")}
          /> */}
          {/* Desk top Links */}
          <div className="hidden md:flex space-x-6">
            {linksDesktop.map((link) => {
              return (
                <ScrollLink
                  to={link.href}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  key={link.href}
                  spy={true}
                  activeClass="text-[#e643a7] underline underline-offset-4"
                  className="cursor-pointer hover:text-[#e643a7] transition-colors"
                >
                  {link.label}
                </ScrollLink>
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
            <div className="hidden md:flex">
              {user ? (
                userRole === "ADMIN" ? (
                  <Link href="/dashboard" className="hidden md:flex space-x-6">
                    <CustomButton buttonText="Dashboard" />
                  </Link>
                ) : userRole === "USER" ? (
                  <button onClick={logout} className="hidden md:flex space-x-6">
                    <CustomButton buttonText="Logout" />
                  </button>
                ) : <Link
                  href="https://github.com/Shovon96"
                ><CustomButton icon={Github} buttonText="Github"></CustomButton>
                </Link>
              ) : (
                <Link
                  href="https://github.com/Shovon96"
                ><CustomButton icon={Github} buttonText="Github"></CustomButton>
                </Link>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white/95 dark:bg-black/95 backdrop-blur">
          <div className="flex flex-col space-y-3 p-4">
            {linksMobile?.map((link) =>
              link.href.startsWith("/") ? (
                <button
                  key={link.href}
                  onClick={() => handlePageClick(link.href)}
                  className="cursor-pointer text-left hover:text-[#e643a7] transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleSectionClick(link.href)}
                  className="cursor-pointer text-left hover:text-[#e643a7] transition-colors"
                >
                  {link.label}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
