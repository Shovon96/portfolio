"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Edit } from "lucide-react";

interface Skill {
    id: number;
    title: string;
    imageUrl: string;
    skillType: string;
}

interface EditSkillModalProps {
    skill: Skill;
    onUpdate?: (updatedSkill: any) => void;
}

export default function EditSkillModal({ skill, onUpdate }: EditSkillModalProps) {
    const [formData, setFormData] = useState({
        title: skill.title,
        imageUrl: skill.imageUrl,
        skillType: skill.skillType,
    });

    const [open, setOpen] = useState(false);
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSkillTypeChange = (value: string) => {
        setFormData({ ...formData, skillType: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skill/${skill.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to update skill");

            const updated = await res.json();
            toast.success("Skill updated successfully!");
            setOpen(false);
            if (onUpdate) onUpdate(updated);
            router.refresh();
        } catch (err: any) {
            toast.error(err.message || "Something went wrong");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="text-yellow-500 hover:bg-[#470742]/60 transition duration-500 border border-yellow-500 rounded-md px-2 py-1 cursor-pointer">
                    <Edit size={16} />
                </button>
            </DialogTrigger>

            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Edit Skill</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                        <label className="text-sm font-semibold">Skill Title</label>
                        <Input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter skill title"
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
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold">Skill Type</label>
                        <Select value={formData.skillType} onValueChange={handleSkillTypeChange}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select skill type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Frontend">Frontend</SelectItem>
                                <SelectItem value="Backend">Backend</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/80 text-white cursor-pointer">
                        Update Skill
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
