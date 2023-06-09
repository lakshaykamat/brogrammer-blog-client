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

    

    if (post.data.length <= 0) {
        return {
            title: 'Post Not Found'
        }
    }
    const postData = post.data[0]
    const postTitle = postData.attributes.title
    return {
        title: postTitle
    }
}
export async function generateStaticParams() {
    const blog = await fetchAllBlogs()
    return blog.data.map((item) => {
        { postId: item.attributes.slug }
    })
}
const page = async ({ params }: { params: { postId: string } }) => {

    const { postId } = params
    const md = new MarkdownIt();
    const post = await fetchBlogContent(postId)
    if(post.data.length <= 0) return notFound()
    const { coverImageURL, author, title, creation, content } = post.data[0].attributes
    const htmlContent = md.render(content)

    return (
        <main className="p-6 prose prose-base lg:prose-lg prose-slate dark:prose-invert flex flex-col lg:flex-row lg:mx-6 justify-between gap-6 max-w-full mx-auto sm:mx-12 md:mx-20">

            <article className='lg:max-w-[60%]'>
                <Image
                    src={coverImageURL}
                    alt={title}
                    quality={100}
                    width={750}
                    height={650}
                />
                <h1 className="mt-12 lg:leading-snug">{title}</h1>
                <p className="mt-2">
                    {getFormattedDate(creation)}<span> | </span>{author}
                </p>
                <section dangerouslySetInnerHTML={{ __html: htmlContent }} />
                <p>
                    <Link href="/">← Back to home </Link>
                </p>
            </article>

            <NewsLetter />

        </main>
    )
}

export default page