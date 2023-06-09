import BlogCard from '@/app/components/BlogCard'
import Loading from '@/app/loading'
import { fetchBlogsByCategory, fetchCategories } from '@/lib/fetchData'
import { removePercentEncoding } from '@/utils/removePercentEncoding'
import React from 'react'
import {Suspense} from 'react'

export async function generateStaticParams() {
  const blog = await fetchCategories()
  return blog.data.map((item) => {
      { categoryId: item.attributes.name }
  })
}
const CategoryPage = async({ params }: { params: { categoryId: string } }) => {
    const { categoryId } = params
    const categoryName = removePercentEncoding(categoryId)
    const data = await fetchBlogsByCategory(categoryName)
    const blogCards = data.data.map((item, index) => {
      return  <Suspense key={index} fallback={<Loading />}><BlogCard
          key={index}
          width="FULL"
          imgURL={item.attributes.coverImageURL}
          altTxt={item.attributes.title}
          creationDate={item.attributes.creation}
          author={item.attributes.author}
          slug={item.attributes.slug}
          title={item.attributes.title}
      />
      </Suspense>
  })
  return (
    <div className='m-12 xl:mx-48'>
            <h1 className='text-3xl xl:text-4xl font-bold'>{categoryName}</h1>
            <p className='my-3'>Each category focuses on a specific area, offering in-depth articles and resources to help you stay informed and enhance your skills. </p>
            <hr className='mb-3'/>
            <section className="grid grid-cols-1 justify-self-stretch sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* <div className='grid grid-cols-1 place-items-stretch justify-stretch md:grid-cols-2 xl:grid-cols-3 gap-3'>
                
            </div> */}
            { blogCards }
            </section>
        </div>
  )
}
export default CategoryPage