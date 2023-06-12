import { fetchBlogsByCategory } from '@/lib/fetchData'
import Link from 'next/link'
import React from 'react'
import BlogCard from './BlogCard'
import { Suspense } from 'react'
import {CategorySkeleton} from './CategorySkeleton'
import Skeleton from 'react-loading-skeleton'
type Props = {
    key: number
    name: string
}
const Category = async ({ name }: Props): Promise<React.JSX.Element> => {
    const blogs = await fetchBlogsByCategory(name)
    const blogCards = blogs.data.map((item, index) => {
        return(
        <Suspense key={index} fallback={<CategorySkeleton/>}>
            <BlogCard
                width="FULL"
                imgURL={item.attributes.coverImageURL}
                altTxt={item.attributes.title}
                creationDate={item.attributes.creation}
                author={item.attributes.author}
                slug={item.attributes.slug}
                title={item.attributes.title}
            /></Suspense>
        )
    })
    return (
        <section className='animate p-6 md:mx-16 xl:mx-24 mb-12'>
            <div className='flex justify-between my-3'>
                <h1 className='text-2xl font-bold'>{name || <Skeleton/>}</h1>
                <Link href={`/categories/${name}`} className='underline text-sky-600'>View all post</Link>
            </div>
            <hr className='my-3' />
            <section className="grid grid-cols-1 justify-self-stretch sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {blogCards}
            </section>
        </section>
    )
}
export default Category