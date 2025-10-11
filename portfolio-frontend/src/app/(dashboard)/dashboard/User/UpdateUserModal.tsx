"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface UpdateInfoModalProps {
    user: any;
    onUserUpdated?: () => void;
}

export default function UpdateUserModal({ user, onUserUpdated }: UpdateInfoModalProps) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(user || {});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/update`, {
                method: "PATCH",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const json = await res.json();

            if (res.ok) {
                setOpen(false);
                onUserUpdated?.();
                toast.success("User updated successfully");
                window.dispatchEvent(new Event("userUpdated"));
            } else {
                toast.error(json.message || "Update failed");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong!");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="ml-8 bg-gray-700 hover:bg-gray-800 text-white border cursor-pointer font-semibold px-3">
                    Update Info
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Update Your Information</DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-3 mt-2">
                    <Input
                        name="name"
                        // value={formData?.name || ""}
                        onChange={handleChange}
                        defaultValue={user?.name || ""}
                        placeholder="Your Name"
                    />
                    <Input
                        name="email"
                        defaultValue={user?.email || ""}
                        onChange={handleChange}
                        placeholder="Your Email"

                    />
                    <Input
                        name="location"
                        defaultValue={user?.location || ""}
                        onChange={handleChange}
                        placeholder="Your Adress"
                    />
                    <Input
                        name="facebook"
                        defaultValue={user?.facebook}
                        onChange={handleChange}
                        placeholder="Facebook URL"
                    />
                    <Input
                        name="linkedin"
                        defaultValue={user?.linkedin || ""}
                        onChange={handleChange}
                        placeholder="LInkedIn URL"
                    />
                    <Input
                        name="github"
                        defaultValue={user?.github || ""}
                        onChange={handleChange}
                        placeholder="Github URL"
                    />
                    <Input
                        name="twitter"
                        defaultValue={user?.twitter || ""}
                        onChange={handleChange}
                        placeholder="Twitter URL"
                    />
                    <Textarea
                        name="bio"
                        defaultValue={user?.bio || ""}
                        onChange={handleChange}
                        placeholder="Short Bio..."
                    />
                </div>

                <DialogFooter className="mt-4">
                    <Button onClick={handleUpdate} className="bg-primary text-white cursor-pointer">
                        Save Changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
