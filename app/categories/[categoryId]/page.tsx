"use client"
import BlogCard from '@/app/components/BlogCard'
import CardSkeleton from '@/app/components/CardSkeleton'
import { fetchBlogsByCategory, fetchCategories } from '@/lib/fetchData'
import { removePercentEncoding } from '@/utils/removePercentEncoding'
import { useQuery } from '@tanstack/react-query'


const CategoryPage = ({ params }: { params: { categoryId: string } }) => {
    const { categoryId } = params
    const categoryName = removePercentEncoding(categoryId)
    // const data =  fetchBlogsByCategory(categoryName)
    const CATEGORIES = useQuery({
      queryKey: ["fetch_categoriesss"],
      queryFn: () => fetchBlogsByCategory(categoryName),
    });
     const blogCards = CATEGORIES.data && CATEGORIES.data.map((item, index) => {
       return( <BlogCard
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
  return (
    <div className='m-12 xl:mx-48'>
            <h1 className='text-3xl font-bold xl:text-4xl'>{categoryName}</h1>
            <p className='my-3'>Each category focuses on a specific area, offering in-depth articles and resources to help you stay informed and enhance your skills. </p>
            <hr className='mb-3'/>
            <section className="grid grid-cols-1 gap-6 justify-self-stretch sm:grid-cols-2 xl:grid-cols-3">
            { blogCards }
            </section>
        </div>
  )
}
export default CategoryPage