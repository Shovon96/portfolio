"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { IProjectCard } from "@/components/shared/ProjectCard";
import { useRouter } from "next/navigation";
import { Edit } from "lucide-react";

interface EditProjectModalProps {
    project: IProjectCard;
    onUpdate?: (updatedProject: any) => void;
}

export default function EditProjectModal({ project, onUpdate }: EditProjectModalProps) {
    const [formData, setFormData] = useState({
        title: project.title,
        description: project.description,
        imageUrl: project.imageUrl,
        demoUrlFrontend: project.demoUrlFrontend,
        sourceCodeFrontend: project.sourceCodeFrontend,
        sourceCodebackend: project.sourceCodebackend,
    });

    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${project.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to update project");

            const updated = await res.json();
            toast.success("Project updated successfully!");
            setOpen(false);
            if (onUpdate) onUpdate(updated);
            router.refresh();
        } catch (error: any) {
            toast.error(error.message || "Something went wrong while updating.");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="text-sm flex items-center justify-center gap-1 font-semibold text-gray-900 border px-4 py-2 rounded cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <Edit className="h-6 w-4" /> Edit Blog
                </button>
            </DialogTrigger>

            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>Edit Project</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                        <label className="text-sm font-semibold">Title</label>
                        <Input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter project title"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold">Description</label>
                        <Textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter project description"
                            className="h-32 overflow-y-auto resize-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold">Image URL</label>
                        <Input
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            placeholder="Enter project image URL"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold">Demo URL</label>
                        <Input
                            name="demoUrlFrontend"
                            value={formData.demoUrlFrontend}
                            onChange={handleChange}
                            placeholder="Enter live demo link"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold">Frontend Source Code</label>
                        <Input
                            name="sourceCodeFrontend"
                            value={formData.sourceCodeFrontend}
                            onChange={handleChange}
                            placeholder="Enter frontend GitHub repo link"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold">Backend Source Code</label>
                        <Input
                            name="sourceCodebackend"
                            value={formData.sourceCodebackend}
                            onChange={handleChange}
                            placeholder="Enter backend GitHub repo link"
                        />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/80 cursor-pointer text-white">
                        Update Project
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
