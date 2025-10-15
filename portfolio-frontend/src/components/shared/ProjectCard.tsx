/* eslint-disable react/no-unescaped-entities */
"use client";

import EditProjectModal from "@/app/(dashboard)/dashboard/manage-project/EditProjectModal";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export interface IProjectCard {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    demoUrlFrontend: string;
    sourceCodeFrontend: string;
    sourceCodebackend: string;
}


export default function ProjectCard({ project, admin }: { project: IProjectCard, admin?: string }) {

    const { title, description, imageUrl, demoUrlFrontend, sourceCodeFrontend, sourceCodebackend, id } = project;

    const router = useRouter();

    // delete Project
    const handleDelete = async (id: string) => {
        try {
            const confirmDelete = confirm("Are you sure you want to delete this project?");
            if (!confirmDelete) return;

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
                method: "DELETE",
                credentials: "include",
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to delete project");
            }
            toast.success("Project deleted successfully!");
            router.refresh();
        } catch (error: any) {
            toast.error(error.message || "Something went wrong while deleting");
        }
    };

    return (
        <div className="w-[325px] md:w-[350px] h-fit rounded-md border border-[#470742] overflow-hidden transition duration-500 hover:scale-[1.04] bg-[#470742]">
            <Link href={`/project/${id}`}>
                <img className="w-full h-60 px-3 pt-3 object-cover overflow-hidden" src={imageUrl} alt="" />
                <div className="bg-[#f1e5ff] px-5 pt-2">
                    <h2 className="text-black text-lg font-bold mb-1 h-14">
                        {title.length > 60 ? `${title.slice(0, 60)}...` : title}
                    </h2>
                    <p className="text-black text-sm pb-1 h-18">
                        {description.length > 100
                            ? `${description.slice(0, 120)}...`
                            : description}
                    </p>
                </div>
            </Link>
            {admin === "Admin" ? (
                <div className="flex justify-between items-center px-5 py-1 rounded-b-md bg-[#f1e5ff] h-14">
                    <EditProjectModal project={project} />
                    <button onClick={() => handleDelete(id)} className="text-sm flex items-center justify-center gap-1 font-semibold text-gray-900 border px-4 py-2 rounded cursor-pointer bg-red-400 hover:bg-red-500">
                        <Trash2 className="h-6 w-4" /> Delete Project
                    </button>
                </div>
            ) :
                <div className="flex justify-between bg-[#f1e5ff] px-5 py-2 rounded-b-md h-14">
                    <Link href={sourceCodeFrontend} target="_blank" rel="noopener noreferrer" >
                        <button className="text-xs text-gray-900 border border-gray-400 px-2 py-1 rounded cursor-pointer">
                            Frontend Code
                        </button>
                    </Link>
                    <Link href={sourceCodebackend} target="_blank" rel="noopener noreferrer" >
                        <button className="text-xs text-gray-900 border border-gray-400 px-2 py-1 rounded cursor-pointer">
                            Backend Code
                        </button>
                    </Link>
                    <Link href={demoUrlFrontend} target="_blank" rel="noopener noreferrer" >
                        <button className="text-sm text-primary border border-primary shadow-gray-400 shadow-md px-2 py-1 rounded hover:bg-primary hover:text-white cursor-pointer transition duration-500">
                            Live Demo
                        </button>
                    </Link>
                </div >
            }
        </div >
    )
}
