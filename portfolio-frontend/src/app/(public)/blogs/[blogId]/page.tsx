import BlogDetails from "@/components/shared/BlogDetails";

export const generateMetadata = async ({ params }: { params: Promise<{ blogId: string }> }) => {
    const { blogId } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`);
    const blog = await res.json()

    return {
        title: blog?.title,
        description: blog?.content
    }
}


export default async function BlogDetailsPage({ params }: { params: Promise<{ blogId: string }> }) {

    const { blogId } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`);
    const blog = await res.json()
    // console.log(blog)

    return (
        <div>
            <BlogDetails key={blog?.id} blog={blog} />
        </div>
    )
}