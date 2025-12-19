/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { IProjectCard } from "./ProjectCard";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Globe } from "lucide-react";

export default function ProjectDetails({ project }: { project: IProjectCard }) {
    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-400">Project not found</h2>
                    <p className="text-gray-500 mt-2">The project you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    const { title, description, imageUrl, demoUrlFrontend, sourceCodeFrontend, sourceCodebackend, technologies } = project;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900/70 via-gray-800/70 to-gray-900/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {/* Back Button */}
                <button 
                    onClick={() => window.history.back()} 
                    className="group flex items-center gap-2 text-gray-300 hover:text-primary transition-all duration-300 mb-8 cursor-pointer border border-gray-700 hover:border-primary/50 px-3 py-2 rounded-lg"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="font-medium">Back to Projects</span>
                </button>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Image and Actions */}
                    <div className="space-y-6">
                        {/* Project Image */}
                        {imageUrl && (
                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl border border-gray-700/50 group">
                                <Image
                                    src={imageUrl}
                                    alt={title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="space-y-4">
                            {/* Live Demo Button */}
                            <Link 
                                href={demoUrlFrontend} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="block"
                            >
                                <button className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                                    <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                    <span>View Live Demo</span>
                                    <ExternalLink className="w-4 h-4 opacity-70" />
                                </button>
                            </Link>

                            {/* Source Code Buttons */}
                            <div className="grid grid-cols-2 gap-4">
                                <Link 
                                    href={sourceCodeFrontend} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <button className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium px-4 py-3 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                                        <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                        <span className="text-sm">Frontend</span>
                                    </button>
                                </Link>
                                <Link 
                                    href={sourceCodebackend} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <button className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium px-4 py-3 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                                        <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                        <span className="text-sm">Backend</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Project Info */}
                    <div className="space-y-8">
                        {/* Title */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                                {title}
                            </h1>
                            <div className="h-1 w-20 bg-primary rounded-full" />
                        </div>

                        {/* Technologies */}
                        <div className="space-y-3">
                            <h2 className="text-lg font-semibold text-gray-300 uppercase tracking-wider">
                                Tech Stack
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {technologies?.map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className="px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-primary font-medium rounded-lg text-sm hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-white">
                                About This Project
                            </h2>
                            <div className="prose prose-invert max-w-none">
                                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                    {description}
                                </p>
                            </div>
                        </div>

                        {/* Additional Info Card */}
                        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <ExternalLink className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Open Source</h3>
                                    <p className="text-gray-400 text-sm">
                                        This project is open source. Feel free to explore the code and contribute!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}