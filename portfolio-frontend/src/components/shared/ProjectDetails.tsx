"use client";
import Image from "next/image";
import { IProjectCard } from "./ProjectCard";
import Link from "next/link";
import { ArrowBigLeft, CodeXml } from "lucide-react";


export default function ProjectDetails({ project }: { project: IProjectCard }) {
    if (!project) {
        return (
            <div className="py-20 text-center text-gray-500">Project not found.</div>
        );
    }

    const { title, description, imageUrl, demoUrlFrontend, sourceCodeFrontend, sourceCodebackend } = project;

    return (
        <section className="max-w-5xl mx-auto my-8 md:my-16">
            <button onClick={() => window.history.back()} className="flex items-center gap-2 px-2 py-1 text-white hover:bg-[#470742] transition duration-500 border-2 border-primary rounded-md cursor-pointer mb-4">
                <ArrowBigLeft /> Go Back
            </button>
            <div className="p-4 border-primary rounded-md bg-gray-800/60">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3">
                        {imageUrl && (
                            <div className="relative h-96 w-full md:w-80 overflow-hidden">
                                <Image
                                    src={imageUrl}
                                    alt={title}
                                    fill
                                    className="rounded-md object-cover shadow-md"
                                />
                            </div>
                        )}
                        <h1 className="text-3xl font-bold my-4 text-primary">{title}</h1>
                        <div className="flex justify-center items-center gap-2 py-2 rounded-b-md">
                            <Link href={sourceCodeFrontend} target="_blank" rel="noopener noreferrer" >
                                <button className="flex items-center gap-1 text-sm text-primary border font-bold shadow shadow-gray-400 border-primary px-3 py-2 rounded-md cursor-pointer hover:bg-primary hover:text-white transition duration-500">
                                    <CodeXml /> Frontend Code
                                </button>
                            </Link>
                            <Link href={sourceCodebackend} target="_blank" rel="noopener noreferrer" >
                                <button className="flex items-center gap-1 text-sm text-primary border font-bold shadow shadow-gray-400 border-primary px-3 py-2 rounded-md cursor-pointer hover:bg-primary hover:text-white transition duration-500">
                                    <CodeXml /> Backend Code
                                </button>
                            </Link>
                        </div>
                        <Link href={demoUrlFrontend} target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
                            <button className="w-full font-bold text-white hover:shadow-gray-700 mt-2 shadow-md px-3 py-2 rounded-lg bg-primary cursor-pointer transition duration-500 hover:scale-105">
                                Live Site
                            </button>
                        </Link>
                    </div>
                    {/* Description section */}
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-semibold my-4 text-white">Project Description</h2>
                        <p className="text-gray-300">{description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}