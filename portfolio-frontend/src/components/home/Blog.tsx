import Link from "next/link";
import CustomButton from "../shared/CustomButton";
import BlogCard, { IBlog } from "../shared/BlogCard";


export default async function Blogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
    cache: 'no-store'
  });
  const blogsData = await res.json();
  // console.log(blogsData)
  return (
    <div className="max-w-7xl mx-auto my-12 px-8">
      <div className="flex items-center justify-center gap-3 my-12">
        <span className="h-[4px] mt-2 w-10 sm:w-16 md:w-42 bg-primary"></span>
        <span className="text-4xl md:text-5xl font-extrabold">Leatest</span>
        <span className="text-4xl md:text-5xl font-extrabold text-primary">Blogs</span>
        <span className="h-[4px] mt-2 w-10 sm:w-16 md:w-42 bg-primary"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          blogsData?.slice(0, 3)?.map((blog: IBlog) => (
            <BlogCard key={blog?.id} blog={blog} />
          ))
        }
      </div>
      {/* {blogsData?.length > 3 && ( */}
          <Link href="/blog" className="flex justify-center pt-4">
            <CustomButton buttonText="See More" />
          </Link>
        {/*  )} */}
    </div>
  )
}
