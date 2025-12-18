"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddSkillModal() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        imageUrl: "",
        skillType: "",
    });

    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCategoryChange = (value: string) => {
        setFormData({ ...formData, skillType: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.imageUrl || !formData.skillType) {
            toast.error("Please fill all fields");
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/add-skill`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to add skill");

            toast.success("Skill added successfully!");
            setFormData({ title: "", imageUrl: "", skillType: "" });
            setOpen(false);
            router.refresh();
        } catch (error: any) {
            toast.error(error.message || "Something went wrong");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="text-sm flex items-center justify-center gap-1 font-semibold px-4 py-2 rounded cursor-pointer text-white bg-green-600 hover:bg-green-500">
                    <Plus className="h-6 w-4" /> Add Skill
                </button>
            </DialogTrigger>

            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Add New Skill</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    {/* Title */}
                    <div>
                        <label className="text-sm font-semibold">Skill Name</label>
                        <Input
                            name="title"
                            placeholder="Enter skill title (e.g., React, Node.js)"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="text-sm font-semibold">Image URL</label>
                        <Input
                            name="imageUrl"
                            placeholder="Enter skill image URL"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                        <label className="text-sm font-semibold">Category</label>
                        <Select onValueChange={handleCategoryChange} value={formData.skillType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Frontend">Frontend</SelectItem>
                                <SelectItem value="Backend">Backend</SelectItem>
                                <SelectItem value="Tools">Tools</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/80 text-white cursor-pointer">
                        Add Skill
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
