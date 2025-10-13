"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Edit } from "lucide-react";
import { useRouter } from "next/navigation";

interface EditBlogModalProps {
    blog: {
        id: string;
        title: string;
        content: string;
        imageUrl?: string;
    };
    onUpdate: (updatedBlog: any) => void;
}

export default function EditBlogModal({ blog, onUpdate }: EditBlogModalProps) {
    const [formData, setFormData] = useState({
        title: blog.title,
        content: blog.content,
        imageUrl: blog.imageUrl || "",
    });

    const [open, setOpen] = useState(false);
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blog.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to update blog");

            const updated = await res.json();
            onUpdate(updated);
            toast.success("Blog updated successfully!");
            setOpen(false);
            router.refresh()
        } catch (error: any) {
            console.error(error);
            toast.error(error.message || "Error updating blog");
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
                    <DialogTitle>Edit Blog Post</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                        <label className="text-sm font-semibold">Title</label>
                        <Input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter blog title"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold">Content</label>
                        <Textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            placeholder="Write your blog content..."
                            className="h-48 overflow-y-auto resize-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold">Image URL</label>
                        <Input
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            placeholder="Enter image URL"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                        Update Blog
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
