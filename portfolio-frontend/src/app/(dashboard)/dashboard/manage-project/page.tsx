import ProjectCard, { IProjectCard } from "@/components/shared/ProjectCard";
import AddProjectModal from "./AddProjectModal";


export default async function Blogs() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
        cache: 'no-store'
    });
    const projectsData = await res.json();
    console.log("project", projectsData)
    const admin = "Admin";

    return (
        <div className="py-12 px-4 w-full backdrop-blur-md dark:bg-gray-700/70">
            <div className="flex items-center justify-between gap-3 mb-8 pb-4 border-b border-primary">
                <span className="text-2xl md:text-4xl font-extrabold">Manage Projects</span>
                <AddProjectModal />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    projectsData?.map((project: IProjectCard) => (
                        <ProjectCard key={project?.id} project={project} admin={admin} />
                    ))
                }
            </div>
        </div>
    )
}
