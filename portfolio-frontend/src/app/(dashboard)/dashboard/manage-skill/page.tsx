import AddSkillModal from "./AddSkillModal";

export default async function FrontendSkills() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
        cache: "no-store",
    });
    const skills = await res.json();

    return (
        <div className="py-12 px-4 w-full backdrop-blur-md dark:bg-gray-700/70">
            <div className="flex items-center justify-between gap-3 mb-8 pb-4 border-b border-primary">
                <span className="text-2xl md:text-4xl font-extrabold">Manage Projects</span>
                <AddSkillModal />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-7 md:grid-cols-4 gap-6 justify-center my-10 px-4 h-fit">
                {skills.length > 0 ? (
                    skills.map((skill: any) => (
                        <div
                            key={skill.id}
                            className="px-8 py-3 flex flex-col items-center gap-4 bg-gray-700 rounded-lg shadow-md shadow-primary border border-primary hover:scale-105 hover:shadow-lg transition-all duration-300"
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
