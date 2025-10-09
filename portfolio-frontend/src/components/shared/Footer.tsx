
"use client";
import { Locate, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
    return (
        <footer className="p-8 border-t bg-white/40 dark:bg-black/80 flex flex-col items-center justify-center">
            <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-primary mb-2">Fakhruddin Ahmed</h2>
                    <p className="text-sm text-foreground">
                        Strong fundamental knowledge in web development and building modern web experiences with Next.js, TypeScript, Tailwind, and scalable updated technologies.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><ScrollLink
                            to={"about"}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            spy={true}
                            className="cursor-pointer hover:text-[#e643a7] transition-colors"
                        >
                            About
                        </ScrollLink></li>
                        <li><Link href="/blogs" className="hover:text-primary transition-colors">Blogs</Link></li>
                        <li><Link href="/project" className="hover:text-primary transition-colors">Projects</Link></li>
                        <li><ScrollLink
                            to={"contact"}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            spy={true}
                            className="cursor-pointer hover:text-[#e643a7] transition-colors"
                        >
                            Contact
                        </ScrollLink></li>
                    </ul>
                </div>

                {/* Connect Me */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Conect Me</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="https://github.com/Shovon96" target="_blank" className="hover:text-primary transition-colors">GitHub</Link></li>
                        <li><Link href="https://www.linkedin.com/in/fakhruddin-ahmed-3a4b77252" target="_blank" className="hover:text-primary transition-colors">LinkedIn</Link></li>
                        <li>
                            <Link
                                href="https://wa.me/8801404346079"
                                target="_blank"
                                className="hover:text-primary transition-colors"
                            >
                                WhatsApp
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Hire Me */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact With Me:</h3>
                    <p className="text-sm mt-2 flex items-center gap-2">
                        <span className="text-primary"><Mail /></span>
                        <span className="font-semibold">Email:</span>{" "}
                        <p className="text-blue-500">fakhruddinshovon@gmail.com</p>
                    </p>
                    <p className="text-sm mt-2 flex items-center gap-2">
                        <span className="text-primary"><Phone /></span>
                        <span className="font-semibold">Phone:</span>{" "}
                        <p className="text-blue-500">+8801404346079</p>
                    </p>
                    <p className="text-sm mt-2 flex items-center gap-2">
                        <span className="text-primary"><Locate /></span>
                        <span className="font-semibold">Location:</span>{" "}
                        <span className="text-blue-500">Feni, Bangladesh</span>
                    </p>
                </div>
            </div>
            <div className="border-t border-foreground/40 w-full max-w-7xl px-4 pt-6">
                <p className="text-foreground text-lg font-bold text-center">Copyright © {new Date().getFullYear()} || by Fakhruddin - All right reserved.</p>
                <p className="text-foreground text-sm font-semibold mt-2 text-center">If you're admin, please login from here:
                    <Link href="/login" className="text-primary underline ml-1.5">Admin Login</Link>
                </p>
            </div>
        </footer>
    );
}
