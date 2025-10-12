import BlogCard, { IBlog } from "@/components/shared/BlogCard";
import AddBlogModal from "./AddBlogModal";


export default async function Blogs() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
        cache: 'no-store'
    });
    const blogsData = await res.json();
    const admin = "Admin";
    // console.log(blogsData)
    return (
        <div className="py-12 px-4 w-full backdrop-blur-md dark:bg-gray-700/70">
            <div className="flex items-center justify-between gap-3 mb-8 pb-4 border-b border-primary">
                <span className="text-2xl md:text-4xl font-extrabold">Manage Blogs</span>
                <AddBlogModal />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    blogsData?.map((blog: IBlog) => (
                        <BlogCard key={blog?.id} blog={blog} admin={admin} />
                    ))
                }
            </div>
        </div>
    )
}
