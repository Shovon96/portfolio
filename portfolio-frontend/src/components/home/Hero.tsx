/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useTypewriter } from "use-typewriter-hook";
import CustomButton from "../shared/CustomButton";
import { Download, Code2, Sparkles, ArrowDownNarrowWide } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const targetText = ['Frontend Developer', 'Backend Developer', 'Fullstack Developer']
    const { textValue: typedText, wrapperClassName } = useTypewriter({
        targetText: targetText,
        typingDelayMillis: 50,
        loopDelay: 500,
        loop: true,
    });

    return (
        <div id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/40 to-transparent">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
                <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content Section */}
                    <div className="space-y-5 text-foreground order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span>Available for work</span>
                        </div>

                        {/* Greeting */}
                        <div className="space-y-2">
                            <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground flex items-center gap-2">
                                Hi, There
                                <span className="inline-block animate-wave">👋</span>
                            </h3>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                I'm{' '}
                                <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent animate-gradient">
                                    Fakhruddin Ahmed
                                </span>
                            </h1>
                        </div>

                        {/* Typewriter */}
                        <div className="flex items-center gap-3">
                            <Code2 className="w-12 h-12 text-primary flex-shrink-0" />
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                                <span className="text-muted-foreground">I'm a </span>
                                <span className={`text-primary ${wrapperClassName}`}>{typedText}</span>
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                            Welcome to my portfolio! I am a passionate and skilled{' '}
                            <span className="text-primary font-semibold">Full-Stack Web Developer</span>.
                            I'm always eager to learn new frameworks and technologies to keep myself updated with the latest market trends.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-6 pt-2">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-primary">1+</span>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Years of</p>
                                    <p className="font-semibold text-foreground">Experience</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-primary">14+</span>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Tech Stack</p>
                                    <p className="font-semibold text-foreground">Mastered</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="https://drive.google.com/file/d/1ORDMEyLnvzIqikqATy4FWKpfOTvHxWpc/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <button className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-lg cursor-pointer hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
                                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                                    <span>Get Resume</span>
                                </button>
                            </Link>

                            <ScrollLink
                                to="contact"
                                smooth={true}
                                offset={-80}
                                duration={500}
                                spy={true}
                                className="cursor-pointer"
                            >
                                <CustomButton buttonText="Hire Me" />
                            </ScrollLink>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative group">
                            {/* Animated Rings */}
                            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping-slow" />
                            <div className="absolute inset-4 rounded-full border-2 border-primary/20 animate-ping-slower" />

                            {/* Glow Effect */}
                            <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                            {/* Image Container */}
                            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                                <div className="absolute inset-0 rounded-full border-4 border-primary/50 shadow-2xl shadow-primary/20 group-hover:border-primary transition-all duration-500" />
                                <div className="relative w-full h-full rounded-full overflow-hidden">
                                    <Image
                                        src="https://i.ibb.co.com/0jgXw2Lk/Fakhruddin-Ahmed-bg-remove-image-8f100d2b8000-1.png"
                                        alt="Fakhruddin Ahmed"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gray-900/90 backdrop-blur-sm border border-primary/50 rounded-lg shadow-xl">
                                <p className="text-sm font-semibold text-primary">Full Stack Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-scroll" />
                </div>
            </div>
        </div>
    );
}
