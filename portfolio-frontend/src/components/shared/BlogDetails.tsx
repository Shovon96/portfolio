import Image from "next/image";
import { IBlog } from "./BlogCard";


export default async function BlogDetails({ blog }: { blog: IBlog }) {
    if (!blog) {
        return (
            <div className="py-20 text-center text-gray-500">Blog not found.</div>
        );
    }

    return (
        <main className="max-w-4xl mx-auto py-30 px-4">
            <h1 className="text-5xl font-bold mb-6">{blog?.title}</h1>

            <div className="flex items-center gap-4 mb-8">
                <Image
                    src="https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                    alt="Shovon"
                    width={48}
                    height={48}
                    className="rounded-full"
                />
                <div>
                    <p className="font-semibold">
                        {"Shovon"}{" "}
                        <span className="inline-block ml-1 text-blue-500">✔</span>
                    </p>
                    <p className="text-gray-500 text-sm">
                        {new Date(blog.publishedAt).toLocaleDateString()}
                    </p>
                </div>
            </div>

            {blog.imageUrl && (
                <div className="relative h-80 w-full overflow-hidden">
                    <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        fill
                        className="rounded-lg object-cover shadow-md"
                    />
                </div>
            )}

            <article className="prose prose-lg max-w-none">
                <p>{blog.content}</p>
            </article>
        </main>
    );
}