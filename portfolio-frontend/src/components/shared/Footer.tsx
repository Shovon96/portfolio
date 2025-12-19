"use client";

import { MapPin, Mail, Phone, ArrowUp, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { href: "/", label: "Home", isScroll: false },
        { href: "about", label: "About", isScroll: true },
        { href: "/blogs", label: "Blogs", isScroll: false },
        { href: "/project", label: "Projects", isScroll: false },
        { href: "contact", label: "Contact", isScroll: true }
    ];

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/Shovon96",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            )
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/fakhruddin-ahmed-3a4b77252",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/8801404346079",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            )
        }
    ];

    const contactInfo = [
        {
            icon: <Mail className="w-4 h-4" />,
            label: "Email",
            value: "fakhruddinshovon@gmail.com",
            link: "mailto:fakhruddinshovon@gmail.com"
        },
        {
            icon: <Phone className="w-4 h-4" />,
            label: "Phone",
            value: "+88 01404346079",
            link: "tel:+8801404346079"
        },
        {
            icon: <MapPin className="w-4 h-4" />,
            label: "Location",
            value: "Feni, Bangladesh",
            link: null
        }
    ];

    return (
        <footer className="relative bg-gradient-to-t from-gray-900/80 via-gray-800/40 to-transparent overflow-hidden">

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                                Fakhruddin Ahmed
                            </span>
                        </h2>
                        <p className="text-sm leading-relaxed text-white">
                            Full Stack Developer with strong fundamental knowledge in web development, building modern web experiences with Next.js, TypeScript, Tailwind, and scalable technologies.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <div className="w-1 h-6 bg-primary rounded-full" />
                            Quick Links
                        </h3>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    {link.isScroll ? (
                                        <ScrollLink
                                            to={link.href}
                                            smooth={true}
                                            offset={-80}
                                            duration={500}
                                            spy={true}
                                            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                                            {link.label}
                                        </ScrollLink>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <div className="w-1 h-6 bg-primary rounded-full" />
                            Get In Touch
                        </h3>
                        <div className="space-y-3">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="group flex items-start gap-3 text-sm"
                                >
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary mt-0.5">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground mb-0.5">{info.label}</p>
                                        {info.link ? (
                                            <Link
                                                href={info.link}
                                                className="text-foreground hover:text-primary transition-colors"
                                            >
                                                {info.value}
                                            </Link>
                                        ) : (
                                            <p className="text-foreground">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Follow With */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <div className="w-1 h-6 bg-primary rounded-full" />
                            Follow With Me
                        </h3>
                        {/* Social Links */}
                        <div className="flex gap-3 pt-2">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-2.5 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-lg text-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 text-xs text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                        {social.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                        {/* Newsletter */}
                        <div className="mt-4">
                            <h4 className="text-sm font-semibold text-muted-foreground mb-2">Connect Queckly</h4>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-transparent border border-gray-700/50 rounded-lg px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                                <button
                                    type="submit"
                                    className="ml-2 bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary rounded-lg transition-all duration-300"
                                >
                                    <ArrowRight className="w-4 h-4 text-primary hover:text-white" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700/50 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <p className="text-sm text-center md:text-left text-white">
                            © {new Date().getFullYear()} Fakhruddin Ahmed. All rights reserved.
                        </p>
                            <button
                            onClick={scrollToTop}
                            className="group p-2 bg-primary hover:bg-primary/20 cursor-pointer border border-primary/30 hover:border-primary rounded-lg transition-all duration-300 animate-bounce mr-44"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="w-4 h-4 text-white transition-colors" />
                        </button>
                        <div className="flex items-center gap-4">
                            <Link
                                href="/login"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                Admin Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
