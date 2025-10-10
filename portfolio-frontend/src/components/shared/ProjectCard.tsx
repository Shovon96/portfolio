import Link from "next/link";


export interface IProjectCard {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    demoUrlFrontend: string;
    sourceCodeFrontend: string;
    sourceCodebackend: string;
}


export default function ProjectCard({ project }: { project: IProjectCard }) {
    const { title, description, imageUrl, demoUrlFrontend, sourceCodeFrontend, sourceCodebackend, id } = project;
    
    return (
        <div className="w-[325px] md:w-[350px] h-[420px] md:h-[440px] rounded-md border border-[#470742] overflow-hidden transition duration-500 hover:scale-[1.02] bg-[#470742]">
            <Link href={`/project/${id}`}>
                <img className="w-full px-3 pt-3 object-cover overflow-hidden" src={imageUrl} alt="" />
                <div className="bg-[#f1e5ff] px-5 pt-4">
                    <h2 className="text-black text-lg font-bold mb-1">
                        {title}
                    </h2>
                    <p className="text-black text-sm pb-1">
                        {description.length > 100
                            ? `${description.slice(0, 120)}...`
                            : description}
                    </p>
                </div>
            </Link>
            <div className="flex justify-between bg-[#f1e5ff] px-5 py-2 rounded-b-md">
                <Link href={sourceCodeFrontend} target="_blank" rel="noopener noreferrer" >
                    <button className="text-xs text-gray-900 border border-gray-400 px-2 py-1 rounded cursor-pointer">
                        Frontend Code
                    </button>
                </Link>
                <Link href={sourceCodebackend} target="_blank" rel="noopener noreferrer" >
                    <button className="text-xs text-gray-900 border border-gray-400 px-2 py-1 rounded cursor-pointer">
                        Backend Code
                    </button>
                </Link>
                <Link href={demoUrlFrontend} target="_blank" rel="noopener noreferrer" >
                    <button className="text-sm text-primary border border-primary shadow-gray-400 shadow-md px-2 py-1 rounded hover:bg-primary hover:text-white cursor-pointer transition duration-500">
                        Live Demo
                    </button>
                </Link>
            </div>
        </div>
    )
}
