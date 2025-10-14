import ProjectDetails from "@/components/shared/ProjectDetails";

export const generateMetadata = async ({ params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`);
    const project = await res.json()

    return {
        title: project?.title,
        description: project?.content
    }
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ projectId: string }> }) {

    const { projectId } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`);
    const project = await res.json()
    // console.log(project)

    return (
        <div>
            <ProjectDetails key={project?.id} project={project} />
        </div>
    )
}