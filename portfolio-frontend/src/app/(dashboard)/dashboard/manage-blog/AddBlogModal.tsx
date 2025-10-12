"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Plus } from "lucide-react";

export default function AddBlogModal() {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        imageUrl: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/create-blog`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Failed to add blog");

            toast.success("Blog added successfully!");
            setFormData({ title: "", content: "", imageUrl: "" });
            window.dispatchEvent(new Event("blogUpdated"));
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="text-sm flex items-center justify-center gap-1 font-semibold px-4 py-2 rounded cursor-pointer text-white bg-green-600 hover:bg-green-500">
                    <Plus className="h-6 w-4" /> Add Blog
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Add a New Blog</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
                    <div>
                        <label className="text-sm font-medium">Title</label>
                        <Input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter blog title"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Content</label>
                        <Textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            placeholder="Write your content..."
                            // rows={12}
                            className="md:h-[250px]"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Image URL</label>
                        <Input
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            placeholder="https://example.com/image.jpg"
                            required
                        />
                    </div>

                    <Button type="submit" className="mt-3 cursor-pointer font-semibold text-white">
                        Add Blog
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
