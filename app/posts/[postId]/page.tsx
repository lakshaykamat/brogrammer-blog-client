import React from 'react'
import { getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'
type Props = {}

export const generateStaticParams = () =>{
    const posts = getSortedPostsData()

    return posts.map((post)=>({
        postId:post.id
    }))
}

export const generateMetadata = ({ params }: { params: { postId: string } }) => {

    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if(!post){
        return{
            title:'Post Not Found'
        }
    }

    return{
        title:post.title
    }
}

const page = async({ params }: { params: { postId: string } }) => {

    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const {title,date,author,coverImage,contentHtml} = await getPostData(postId)

    const pubDate = getFormattedDate(date)
    return (
        <main className="p-6 prose prose-base lg:prose-lg prose-slate dark:prose-invert mx-auto">
            <img className="rounded mt-12 w-full object-cover" src={coverImage}/>
            <h1 className="mt-12 lg:leading-snug">{title}</h1>
            <p className="mt-2">
                {pubDate}<span> | </span>{author}
            </p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/">← Back to home</Link>
                </p>
            </article>
        </main>
    )
}

export default page