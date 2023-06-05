import getFormattedDate from '@/lib/getFormattedDate'
import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'
import React from 'react'

type Props = {
    post: BlogPost
}

const BlogCard = ({ post }: Props) => {
    const { id, title, date, author, description, coverImage } = post
    const formattedDate = getFormattedDate(date)
    return (
        // <div className="items-center justify-stretch bg_secondary rounded-lg shadow-md p-6 drop-shadow-xl">
        //     <img
        //         src={coverImage}
        //         alt={title}
        //         className="w-full h-36 object-cover mb-4 rounded-lg"
        //     />
        //     <div className="mt-auto text-gray-300 text-sm flex gap-3">
        //         <p>{formattedDate}</p>
        //         <p>{author}</p>
        //     </div>
        //     <div className="flex flex-col">
        //         <Link href={`/posts/${id}`} className="text-2xl text-white mb-4 mt-2 font-bold">
        //             {title}
        //         </Link>
        //         <p className="text-white max-h-24 overflow-hidden">{description}</p>
        //     </div>
        // </div>


        <div className="items-center justify-stretch rounded-lg">
            <div className="relative overflow-hidden">
                <img
                    src={coverImage}
                    alt={title}
                    className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
                />
            </div>
            <div className="mt-auto text-gray-800 text-sm flex gap-3">
                <p>{formattedDate}</p>
                <p>{author}</p>
            </div>
            <div className="flex flex-col">
                <Link
                    href={`/posts/${id}`}
                    className="text-lg xl:text-2xl text-gray-800 mb-4 mt-2 font-bold"
                >
                    {title}
                </Link>
            </div>
        </div>
    )
}

const AllBLogs = () => {
    const posts = getSortedPostsData()
    return (
        <>
            {
                posts.map((post) => {
                    return <BlogCard key={post.id} post={post} />
                })
            }
        </>
    )
}
export default AllBLogs