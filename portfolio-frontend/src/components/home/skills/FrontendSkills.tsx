
export default async function FrontendSkills() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
        cache: "no-store"
    });
    const skills = await res.json();
    return (
        <div className="grid grid-cols-2 lg:grid-cols-7 md:grid-cols-4  gap-6 justify-center max-w-7xl mx-auto my-10">
            {skills.map((skill: any) => (
                <div key={skill.id} className="px-8 py-3 flex flex-col items-center gap-4 bg-gray-700 rounded-lg shadow-md shadow-primary border border-primary hover:scale-105 hover:shadow-lg transition-all duration-300">
                    <img className="w-12 h-12" src={skill.imageUrl} alt={skill.title} />
                    <p className="text-lg font-bold" style={{
                        WebkitTextStrokeWidth: "1px",
                        WebkitTextStrokeColor: "#e643a7",
                        WebkitTextFillColor: "white",
                    }}>
                        {skill.title}
                    </p>
                </div>
            ))}
        </div>

    )
}
