"use client"

import EditBlogModal from "@/app/(dashboard)/dashboard/manage-blog/EditBlogModal";
import { Trash2 } from "lucide-react";
import Link from "next/link";


export interface IBlog {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    publishedAt: string;
}


export default function BlogCard({ blog, admin }: { blog: IBlog, admin?: string }) {
    const { title, content, imageUrl, publishedAt, id } = blog;

    const handleUpdate = (updatedBlog: any) => {
        console.log("Updated Blog:", updatedBlog);
    };

    return (
        <div className="w-[325px] md:w-[380px] h-fit rounded-md bg-[#f1e5ff] border border-[#470742] overflow-hidden">
            <Link href={`/blogs/${id}`}>
                <img className="w-full h-52 object-cover overflow-hidden" src={imageUrl} alt="" />
                <div className=" px-5 pt-4">
                    <h2 className="text-black text-lg font-bold mb-1 h-14">
                        {title.length > 60
                            ? `${title.slice(0, 60)}...`
                            : title
                        }
                    </h2>
                    <p className="text-gray-700 text-sm pb-1">
                        {content.length > 235
                            ? `${content.slice(0, 235)}....`
                            : content}
                    </p>
                </div>
            </Link>
            {admin !== "Admin" &&
                <div className="flex justify-between items-center px-5 py-2 rounded-b-md">
                    <p className="text-sm text-gray-700 italic">Published on: {new Date(publishedAt).toLocaleDateString()}</p>
                    <Link href={`/blogs/${id}`}>
                        <button className="text-sm text-gray-900 border border-primary px-3 py-1 rounded cursor-pointer hover:bg-primary/20 ">
                            Read More
                        </button>
                    </Link>
                </div>
            }
            {admin === "Admin" &&
                <div className="flex justify-between items-center px-5 py-2 rounded-b-md">
                    <EditBlogModal blog={blog} onUpdate={handleUpdate} />
                    <button className="text-sm flex items-center justify-center gap-1 font-semibold text-gray-900 border px-4 py-2 rounded cursor-pointer bg-red-400 hover:bg-red-500">
                        <Trash2 className="h-6 w-4" /> Delete Blog
                    </button>
                </div>
            }
        </div>
    )
}
