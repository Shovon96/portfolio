import Image from "next/image";

export default async function Tools() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
        cache: "no-store",
    });
    const skills = await res.json();

    const tools = skills?.filter((skill: any) => skill.skillType === "Tools");

    return (
        <div className="grid grid-cols-2 lg:grid-cols-7 md:grid-cols-4 gap-6 justify-center max-w-7xl mx-auto my-10 px-4">
            {tools && tools.length > 0 ? (
                tools.map((skill: any) => (
                    <div
                        key={skill.id}
                        className="px-8 py-3 flex flex-col items-center gap-4 bg-gray-700 rounded-lg shadow-md shadow-primary border border-primary hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                        <Image
                            width={48} height={48}
                            className="w-12 h-12"
                            src={skill.imageUrl}
                            alt={skill.title} />
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
                    No Tools Found!
                </p>
            )}
        </div>
    );
}
