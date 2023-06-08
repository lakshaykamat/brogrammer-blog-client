import { fetchBlogsByCategory } from '@/lib/fetchData'
import Link from 'next/link'
import React from 'react'
import BlogCard from './BlogCard'

type Props={
    key:number
    name:string
}
const Category = async ({name} : Props):Promise<React.JSX.Element> => {
    const blogs = await fetchBlogsByCategory(name)
    const blogCards = blogs.data.map((item, index) => {
        return <BlogCard
            key={index}
            width="FULL"
            imgURL={item.attributes.coverImageURL}
            altTxt={item.attributes.title}
            creationDate={item.attributes.creation}
            author={item.attributes.author}
            slug={item.attributes.slug}
            title={item.attributes.title}
        />
    })
    return (
        <section className='animate p-6 md:mx-16 xl:mx-24 mb-12'>
            <div className='flex justify-between my-3'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <Link href={"/"} className='underline text-sky-600'>View all post</Link>
            </div>
            <hr className='my-3' />
            <div className='grid grid-cols-1 place-items-stretch justify-stretch md:grid-cols-2 xl:grid-cols-3 gap-3'>
                { blogCards }
            </div>
        </section>
    )
}
export default Category