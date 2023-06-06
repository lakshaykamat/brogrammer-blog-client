import React from 'react'
import { getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'
import { BsFacebook, BsInstagram, BsTwitch, BsTwitter, BsWhatsapp } from 'react-icons/bs'
type Props = {}

export const generateStaticParams = () => {
    const posts = getSortedPostsData()

    return posts.map((post) => ({
        postId: post.id
    }))
}

export const generateMetadata = ({ params }: { params: { postId: string } }) => {

    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title
    }
}

const page = async ({ params }: { params: { postId: string } }) => {

    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const { title, date, author, coverImage, contentHtml } = await getPostData(postId)

    const pubDate = getFormattedDate(date)
    return (
        <main className="p-6 prose prose-base lg:prose-lg prose-slate dark:prose-invert flex flex-col lg:flex-row lg:mx-6 justify-between gap-6 max-w-full mx-auto sm:mx-12 md:mx-20">
            
            <article className='lg:max-w-[60%]'>
            <img className="rounded mt-12 w-full object-cover" src={coverImage} />
            <h1 className="mt-12 lg:leading-snug">{title}</h1>
            <p className="mt-2">
                {pubDate}<span> | </span>{author}
            </p>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/">← Back to home</Link>
                </p>
            </article>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-xl text-slate-200 font-bold mb-3">Subscribe to Our Newsletter</h2>
                    <p className="text-slate-300 mb-6">
                        Stay up to date with the latest articles, news, and updates from our blog.
                    </p>
                    <form className="flex flex-col md:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full md:w-64 py-2 px-4 rounded-l-md mb-2 md:mb-0 focus:outline-none"
                            required
                        />
                        <button
                        type="submit"
                        className="bg-sky-500 dark:bg-[#0D567A] dark:hover:bg-[#0a4360] hover:bg-sky-600 text-white px-4 py-2 rounded-r-md  focus:outline-none focus:ring focus:border-red-300"
                    >
                        Subscribe
                    </button>
                    </form>
                    <div className='flex gap-3 mt-6'>
                        <span className='text-xl'>Share On</span>
                        <BsInstagram className='w-6 h-6'/>
                        <BsFacebook className='w-6 h-6'/>
                        <BsWhatsapp className='w-6 h-6'/>
                        <BsTwitter className='w-6 h-6'/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page