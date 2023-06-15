import NewsletterForm from './components/NewsLetterForm';
import { fetchAllBlogs, fetchCategories } from '@/lib/fetchData';
import CTA from './components/CTA';
import BlogCard from './components/BlogCard';
import Category from './components/Category';
import JoinCommunity from './components/JoinCommunity';
import { Suspense } from 'react'
import { CategoryParent} from './components/CategorySkeleton'
import CardSkeleton from './components/CardSkeleton';

const Home = async () => {

  const posts = await fetchAllBlogs()
  const catgories = await fetchCategories()
  // useEffect(() => {
  //   // Initialize ScrollReveal
  //   ScrollReveal().reveal('.animate', {
  //     // Animation options and settings
  //     duration: 1000,
  //     distance: '20px',
  //     easing: 'ease',
  //     // More configuration options...
  //   });
  // }, []);
  // useEffect(() => {
  //   // Initialize ScrollReveal
  //   ScrollReveal().reveal('.animate2', {
  //     // Animation options and settings
  //     duration: 2000,
  //     distance: '30px',
  //     easing: 'ease',
  //     // More configuration options...
  //   });
  // }, []);
  // useEffect(() => {
  //   // Initialize ScrollReveal
  //   ScrollReveal().reveal('.animate3', {
  //     // Animation options and settings
  //     duration: 3000,
  //     distance: '40px',
  //     easing: 'ease',
  //     // More configuration options...
  //   });
  // }, []);

  return (
    <div>

      <CTA categories={catgories} />


      <div className="m-12 xl:mx-48">
        <h1 className="text-3xl font-bold">Most Recent Posts</h1>
        <hr className="h-1 my-6 bg-gray-600" />

        {/* Most recent post */}
        {/* lg:visible hidden One Big Card in left and other post in right vertically */}
        <div className="hidden lg:visible lg:flex justify-between gap-12 w-full">
          <Suspense fallback={<CardSkeleton />}>
            <BlogCard
              imgURL={posts[0].image}
              width='FULL'
              altTxt={posts[0].title}
              creationDate={posts[0].publishedAt}
              author={posts[0].author}
              slug={posts[0].slug}
              title={posts[0].title}
            />
          </Suspense>

          <div className="flex flex-col gap-6 w-[45%]">
            {
              posts.slice(1, 3).map((item, index) => {
                return (
                  <Suspense key={index} fallback={<CardSkeleton />}>
                    <BlogCard
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
            }
          </div>
        </div>

        {/* Visible at smaller screens */}
        <div className="lg:hidden">
          <Suspense fallback={<CardSkeleton />}>
            <BlogCard
              imgURL={posts[0].image}
              width='FULL'
              altTxt={posts[0].title}
              creationDate={posts[0].publishedAt}
              author={posts[0].author}
              slug={posts[0].slug}
              title={posts[0].title}
            />
          </Suspense>

          <div className="flex gap-6 flex-col justify-stretch items-stretch  md:flex-row">
            {
              posts.slice(1, 3).map((item, index) => {
                return (
                  <Suspense key={index} fallback={<CardSkeleton />}><BlogCard
                  width="HALF"
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
            }
          </div>
        </div>
      </div>



      {/* NewsLetter */}
      <NewsletterForm />
      {/* Discover Latest in */}
      <h1 className='text-center text-3xl font-bold mt-12'>Discover Latest in...</h1>
      {/* <Skeleton  className="h-12" /> */}
      {/* <div className='grid grid-cols-1 justify-self-stretch sm:grid-rows-2 xl:grid-cols-3 gap-6'> */}
      {
        catgories.map((item, index) => {
          return (
            
            <Suspense key={index} fallback={<CategoryParent/>}>
            <Category
            key={index}
            name={item} />
            </Suspense>
          )
        })
      }
      {/* </div> */}
      <JoinCommunity />
    </div >
  )
}

export default Home