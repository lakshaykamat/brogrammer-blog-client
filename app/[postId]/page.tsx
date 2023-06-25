import React from 'react'
import getFormattedDate from '@/utils/getFormattedDate'
import Link from 'next/link'
import MarkdownIt from 'markdown-it';
import NewsLetter from './components/NewsLetter'
import { fetchAllBlogs, fetchBlogContent } from '@/lib/fetchData'
import Image from 'next/image';
import {notFound} from 'next/navigation'

export const generateMetadata = async ({ params }: { params: { postId: string } }) => {
    const { postId } = params
    const post = await fetchBlogContent(postId)   

    if (post.length <= 0) {
        return {
            title: 'Post Not Found'
        }
    }
    const postData = post[0]
    const postTitle = postData.title
    return {
        title: postTitle,
        description: postData.description,
    }
}


const page = async ({ params }: { params: { postId: string } }) => {

    const { postId } = params
    const md = new MarkdownIt();
    const post = await fetchBlogContent(postId)
    if(post.length <= 0) return notFound()
    const { image, author, title, publishedAt, body } = post[0]
    const htmlContent = md.render(body)

    return (
        <main className="p-6 prose prose-base lg:prose-lg prose-slate dark:prose-invert flex flex-col lg:flex-row lg:mx-6 justify-between gap-6 max-w-full mx-auto sm:mx-12 md:mx-20">

            <article className='lg:max-w-[60%]'>
                <Image
                    src={image}
                    alt={title}
                    quality={100}
                    width={750}
                    height={650}
                />
                <h1 className="mt-12 lg:leading-snug">{title}</h1>
                <p className="mt-2">
                    {getFormattedDate(publishedAt)}<span> | </span>{author}
                </p>
                <section dangerouslySetInnerHTML={{ __html: htmlContent }} />
                <p>
                    <Link href="/">← Back to home </Link>
                </p>
            </article>

            <NewsLetter title={title} url={"$"} hastag=''/>

        </main>
    )
}

export default page