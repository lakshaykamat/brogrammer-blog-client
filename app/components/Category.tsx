"use client"
import Link from 'next/link'
import React from 'react'
import BlogCard from './BlogCard'
import { Suspense } from 'react'
import {CategoryParent, CategorySkeleton} from './CategorySkeleton'
import Skeleton from 'react-loading-skeleton'
import { useQuery } from '@tanstack/react-query'
import { fetchBlogByCategory } from '@/lib'
type Props = {
    name: string
}
const Category = ({ name }: Props) => {
  const THEBLOG = useQuery({
    queryKey: ["fetch_all_categories_name",name],
    queryFn: () => fetchBlogByCategory(name),
  });
    if(THEBLOG.data){
        console.log(THEBLOG)
    }
    return (
        <section className='p-6 mb-12 animate md:mx-16 xl:mx-24'>
            <div className='flex justify-between my-3'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <Link href={`/categories/${name}`} className='underline text-sky-600'>View all post</Link>
            </div>
            <hr className='my-3' />
            <section className="grid grid-cols-1 gap-6 justify-self-stretch sm:grid-cols-2 xl:grid-cols-3">
                {
                    THEBLOG.data ? THEBLOG.data.data.map((item, index) => {
                        return(
                            <BlogCard
                                key={index}
                                width="FULL"
                                imgURL={item.attributes.image}
                                altTxt={item.attributes.title}
                                creationDate={item.attributes.publish}
                                author={item.attributes.author}
                                slug={item.attributes.slug}
                                title={item.attributes.title}
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