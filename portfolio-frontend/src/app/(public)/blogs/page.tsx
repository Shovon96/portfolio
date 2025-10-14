import BlogCard, { IBlog } from "@/components/shared/BlogCard";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

export const generateMetadata = async () => {
    return {
        title: "Blogs | Fakhruddin Ahmed",
        description:
            "Explore web development blogs, tips, and insights on modern technologies — written by Fakhruddin Ahmed.",
    }
}

export default async function BlogsPage() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
        cache: 'no-store'
    });
    const blogsData = await res.json();
    // console.log(blogsData)

    return (
        <div className="max-w-7xl mx-auto my-12 px-8">
            <div className="flex items-center mb-8">
                <Link href={"/"} className="flex items-center gap-2 px-2 py-1 text-white bg-[#470742] border-2 border-primary rounded-md cursor-pointer"><ArrowBigLeft /> Back</Link>
                <div className="flex-1 justify-start">
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-[4px] mt-2 w-10 sm:w-16 md:w-42 bg-primary"></span>
                        <span className="text-4xl md:text-5xl font-extrabold">Leatest</span>
                        <span className="text-4xl md:text-5xl font-extrabold text-primary">Blogs</span>
                        <span className="h-[4px] mt-2 w-10 sm:w-16 md:w-42 bg-primary"></span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    blogsData?.map((blog: IBlog) => (
                        <BlogCard key={blog?.id} blog={blog} />
                    ))
                }
            </div>
        </div>
    )
}
