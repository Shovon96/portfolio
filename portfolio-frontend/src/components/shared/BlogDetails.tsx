import Image from "next/image";
import { IBlog } from "./BlogCard";


export default async function BlogDetails({ blog }: { blog: IBlog }) {
    if (!blog) {
        return (
            <div className="py-20 text-center text-gray-500">Blog not found.</div>
        );
    }

    return (
        <main className="max-w-4xl mx-auto my-12 md:my-20 p-8 border-primary rounded-md bg-gray-800">
            {blog.imageUrl && (
                <div className="relative h-96 w-full overflow-hidden">
                    <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        fill
                        className="rounded-lg object-cover shadow-md"
                    />
                </div>
            )}
            <h1 className="text-5xl font-bold my-6 text-white">{blog?.title}</h1>
            <article className="prose prose-lg max-w-none text-gray-300">
                <p>{blog.content}</p>
            </article>
            <div className="flex items-center gap-4 my-4">
                <Image
                    src="https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                    alt="Shovon"
                    width={48}
                    height={48}
                    className="rounded-full"
                />
                <div>
                    <p className="font-semibold text-gray-300">
                        {"Shovon"}{" "}
                        <span className="inline-block ml-1 bg-white rounded-full">✔</span>
                    </p>
                    <p className="text-gray-500 text-sm">
                        {new Date(blog.publishedAt).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </main>
    );
}