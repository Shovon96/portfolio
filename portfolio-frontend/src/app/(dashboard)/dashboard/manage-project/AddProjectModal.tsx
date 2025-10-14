"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

export default function AddProjectModal() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imageUrl: "",
        demoUrlFrontend: "",
        sourceCodeFrontend: "",
        sourceCodebackend: "",
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/create-project`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to add project");

            const data = await res.json();
            toast.success("Project added successfully!");
            setFormData({
                title: "",
                description: "",
                imageUrl: "",
                demoUrlFrontend: "",
                sourceCodeFrontend: "",
                sourceCodebackend: "",
            });

            router.refresh();
        } catch (error: any) {
            toast.error(error.message || "Something went wrong");
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="text-sm flex items-center justify-center gap-1 font-semibold px-4 py-2 rounded cursor-pointer text-white bg-green-600 hover:bg-green-500">
                    <Plus className="h-6 w-4" /> Add Blog
                </button>
            </DialogTrigger>

            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>Add New Project</DialogTitle>
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
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold">Demo/Live URL</label>
                        <Input
                            name="demoUrlFrontend"
                            value={formData.demoUrlFrontend}
                            onChange={handleChange}
                            placeholder="Enter live demo link"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold">Frontend Source Code</label>
                        <Input
                            name="sourceCodeFrontend"
                            value={formData.sourceCodeFrontend}
                            onChange={handleChange}
                            placeholder="Enter frontend GitHub repo link"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold">Backend Source Code</label>
                        <Input
                            name="sourceCodebackend"
                            value={formData.sourceCodebackend}
                            onChange={handleChange}
                            placeholder="Enter backend GitHub repo link"
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/80 text-white">
                        Add Project
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
