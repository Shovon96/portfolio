"use client"
import { Trash2 } from "lucide-react";
import AddSkillModal from "./AddSkillModal";
import EditSkillModal from "./EditSkillModal";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {

    const [skills, setSkills] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
                credentials: "include",
                cache: "no-store"
            });
            const json = await res.json();
            setSkills(json);
        };

        fetchData();
        router.refresh();
    }, []);

    // delete skill
    const handleDelete = async (id: string) => {
        try {
            const confirmDelete = confirm("Are you sure you want to delete this skill?");
            if (!confirmDelete) return;

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skill/${id}`, {
                method: "DELETE",
                credentials: "include",
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to delete skill");
            }
            toast.success("Skill deleted successfully!");
            router.refresh();
        } catch (error: any) {
            toast.error(error.message || "Something went wrong while deleting");
        }
    };

    return (
        <div className="py-12 px-4 w-full backdrop-blur-md dark:bg-gray-700/70">
            <div className="flex items-center justify-between gap-3 mb-8 pb-4 border-b border-primary">
                <span className="text-2xl md:text-4xl font-extrabold">Manage skills</span>
                <AddSkillModal />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-6 justify-center my-10 px-4 h-fit">
                {skills.length > 0 ? (
                    skills?.map((skill: any) => (
                        <div
                            key={skill.id}
                            className="px-5 py-3 flex flex-col items-center gap-4 bg-gray-700 rounded-lg shadow-md shadow-primary border border-primary hover:scale-105 hover:shadow-lg transition-all duration-300"
                        >
                            <img className="w-12 h-12" src={skill.imageUrl} alt={skill.title} />
                            <p
                                className="text-lg font-bold"
                                style={{
                                    WebkitTextStrokeWidth: "1px",
                                    WebkitTextStrokeColor: "#e643a7",
                                    WebkitTextFillColor: "white",
                                }}
                            >
                                {skill.title}
                            </p>
                            <div className="flex justify-between w-full">
                                <EditSkillModal skill={skill} />
                                <button onClick={() => handleDelete(skill?.id)} className="text-red-400 hover:bg-[#470742]/60 transition duration-500 border border-red-400 rounded-md px-2 py-1 cursor-pointer">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-2xl font-bold text-center col-span-full">
                        No Skills Found! You Need to Add a Skill.
                    </p>
                )}
            </div>
        </div>
    );
}
