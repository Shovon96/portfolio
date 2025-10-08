import Link from "next/link";


export interface IBlog {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    publishedAt: string;
}


export default function BlogCard({ blog }: { blog: IBlog }) {
    const { title, content, imageUrl, publishedAt, id } = blog;

    return (
        <div className="w-[380px] h-[440px] rounded-md bg-[#f1e5ff] border border-[#470742] overflow-hidden">
            <Link href={`/project-details/${id}`}>
                <img className="w-full object-cover overflow-hidden" src={imageUrl} alt="" />
                <div className=" px-5 pt-4">
                    <h2 className="text-black text-lg font-bold mb-1">
                        {title.length > 60
                            ? `${title.slice(0, 60)}...`
                            : title
                        }
                    </h2>
                    <p className="text-gray-700 text-sm pb-1">
                        {content.length > 250
                            ? `${content.slice(0, 250)}....`
                            : content}
                    </p>
                </div>
            </Link>
            <div className="flex justify-between items-center px-5 py-2 rounded-b-md">
                <p className="text-sm text-gray-700 italic">Publised on:{new Date(publishedAt).toLocaleDateString()}</p>
                <Link href={"/blog-details"}>
                    <button className="text-sm text-gray-900 border border-primary px-3 py-1 rounded cursor-pointer hover:bg-primary/20 ">
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    )
}
