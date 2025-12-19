/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { IBlog } from "./BlogCard";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export default function BlogDetails({ blog }: { blog: IBlog }) {
    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-400">Blog not found</h2>
                    <p className="text-gray-500 mt-2">The blog post you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = blog.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900/70 via-gray-800/70 to-gray-900/70">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
                {/* Back Button */}
                <button 
                    onClick={() => window.history.back()} 
                    className="group flex items-center gap-2 text-gray-300 hover:text-primary transition-all duration-300 mb-8 cursor-pointer border border-gray-700 hover:border-primary/50 px-3 py-2 rounded-lg"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="font-medium">Back to Blogs</span>
                </button>

                {/* Hero Image */}
                {blog.imageUrl && (
                    <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl border border-gray-700/50 mb-8 group">
                        <Image
                            src={blog.imageUrl}
                            alt={blog.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority
                        />
                    </div>
                )}

                {/* Title */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                        {blog.title}
                    </h1>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto">
                {/* Meta Info Card */}
                <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-8 shadow-2xl">
                    <div className="flex flex-wrap items-center gap-6">
                        {/* Author */}
                        <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/50">
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                                    alt="Shovon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold text-white">Shovon</p>
                                    <span className="text-primary text-xs">✓</span>
                                </div>
                                <p className="text-gray-400 text-sm">Author</p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-12 bg-gray-700" />

                        {/* Published Date */}
                        <div className="flex items-center gap-2 text-gray-300">
                            <Calendar className="w-5 h-5 text-primary" />
                            <div>
                                <p className="text-sm font-medium">
                                    {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                                <p className="text-xs text-gray-400">Published</p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-12 bg-gray-700" />

                        {/* Reading Time */}
                        <div className="flex items-center gap-2 text-gray-300">
                            <Clock className="w-5 h-5 text-primary" />
                            <div>
                                <p className="text-sm font-medium">{readingTime} min read</p>
                                <p className="text-xs text-gray-400">Estimated</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Content */}
                <article className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12 mb-12 shadow-xl">
                    <div className="prose prose-lg prose-invert max-w-none">
                        <div 
                            className="text-gray-300 leading-relaxed text-base md:text-lg"
                            dangerouslySetInnerHTML={{ 
                                __html: blog.content
                                    .replace(/\n\n/g, "</p><p class='mt-6'>")
                                    .replace(/\n/g, "<br/>")
                                    .replace(/^/, "<p class='mt-6'>")
                                    .replace(/$/, "</p>")
                            }} 
                        />
                    </div>
                </article>

                {/* Author Bio Card */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-8 mb-12">
                    <div className="flex items-start gap-6">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary/30 flex-shrink-0">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                                alt="Shovon"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-bold text-white">Shovon</h3>
                                <span className="text-primary text-sm">✓ Verified</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                Full-stack developer passionate about creating amazing web experiences. 
                                Sharing insights and knowledge through writing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            {/* Bottom Spacing */}
            <div className="h-16" />
            </div>
    );
}