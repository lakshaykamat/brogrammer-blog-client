"use client"
import { fetchBlogsByCategory } from '@/lib/fetchData'
import Link from 'next/link'
import React from 'react'
import BlogCard from './BlogCard'
import { Suspense } from 'react'
import {CategoryParent, CategorySkeleton} from './CategorySkeleton'
import Skeleton from 'react-loading-skeleton'
import { useQuery } from '@tanstack/react-query'
import { getBlogsByCategory } from '@/lib/getBlogByCategory'
type Props = {
    name: string
}
const Category = ({ name }: Props) => {
  const THEBLOG = useQuery({
    queryKey: ["fetch_all_categories_namw",name],
    queryFn: () => getBlogsByCategory(name),
  });
    
    return (
        <section className='p-6 mb-12 animate md:mx-16 xl:mx-24'>
            <div className='flex justify-between my-3'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <Link href={`/categories/${name}`} className='underline text-sky-600'>View all post</Link>
            </div>
            <hr className='my-3' />
            <section className="grid grid-cols-1 gap-6 justify-self-stretch sm:grid-cols-2 xl:grid-cols-3">
                {
                    THEBLOG.data ? THEBLOG.data.map((item, index) => {
                        return(
                            <BlogCard
                                key={index}
                                width="FULL"
                                imgURL={item.image}
                                altTxt={item.title}
                                creationDate={item.publishedAt}
                                author={item.author}
                                slug={item.slug}
                                title={item.title}
                            />
                        )
                    })
                    :
                    <CategoryParent/>
                }
            </section>
        </section>
    )
}
export default Category