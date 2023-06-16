import BlogCard from '@/app/components/BlogCard'
import CardSkeleton from '@/app/components/CardSkeleton'
import { fetchBlogsByCategory, fetchCategories } from '@/lib/fetchData'
import { removePercentEncoding } from '@/utils/removePercentEncoding'
import React from 'react'
import {Suspense} from 'react'

// nnpm
const CategoryPage = async({ params }: { params: { categoryId: string } }) => {
    const { categoryId } = params
    const categoryName = removePercentEncoding(categoryId)
    const data = await fetchBlogsByCategory(categoryName)
    const blogCards = data.map((item, index) => {
      return( 
      <Suspense key={index} fallback={<CardSkeleton/>}><BlogCard
          key={index}
          width="FULL"
          imgURL={item.image}
          altTxt={item.title}
          creationDate={item.publishedAt}
          author={item.author}
          slug={item.slug}
          title={item.title}
      />
      </Suspense>
      )
  })
  return (
    <div className='m-12 xl:mx-48'>
            <h1 className='text-3xl xl:text-4xl font-bold'>{categoryName}</h1>
            <p className='my-3'>Each category focuses on a specific area, offering in-depth articles and resources to help you stay informed and enhance your skills. </p>
            <hr className='mb-3'/>
            <section className="grid grid-cols-1 justify-self-stretch sm:grid-cols-2 xl:grid-cols-3 gap-6">
            { blogCards }
            </section>
        </div>
  )
}
export default CategoryPage