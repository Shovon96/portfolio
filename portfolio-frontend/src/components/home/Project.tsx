import ProjectCard, { IProjectCard } from "../shared/ProjectCard";
import SectionTitle from "../shared/SectionTitle";


export default async function Project() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    cache: 'no-store'
  });
  const projectsData = await res.json();
  console.log(projectsData)
  return (
    <div>
      <div className="flex items-center justify-center gap-3 my-12">
        <span className="h-[4px] mt-2 w-10 sm:w-16 md:w-42 bg-primary"></span>
        <span className="text-4xl md:text-5xl font-extrabold">Leatest</span>
        <span className="text-4xl md:text-5xl font-extrabold text-primary">Projects</span>
        <span className="h-[4px] mt-2 w-10 sm:w-16 md:w-42 bg-primary"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto my-8">
        {
          projectsData?.slice(0, 3)?.map((project: IProjectCard) => (
            <ProjectCard key={project?.id} project={project} />
          ))
        }
      </div>
    </div>
  )
}
