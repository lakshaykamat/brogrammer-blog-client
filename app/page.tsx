// "use client"
import Link from 'next/link';
// import ScrollReveal from 'scrollreveal';
import NewsletterForm from './components/NewsLetterForm';
import { fetchAllBlogs, fetchCategories } from '@/lib/fetchData';
import CTA from './components/CTA';
import BlogCard from './components/BlogCard';
import Category from './components/Category';
import JoinCommunity from './components/JoinCommunity';


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

      <CTA />


      <div className="m-12 xl:mx-48">
        <h1 className="text-3xl font-bold">Most Recent Posts</h1>
        <hr className="h-1 my-6 bg-gray-600" />

        {/* Most recent post */}
        {/* lg:visible hidden One Big Card in left and other post in right vertically */}
        <div className="hidden lg:visible lg:flex justify-between gap-12 w-full">

          <BlogCard
            imgURL={posts.data[0].attributes.coverImageURL}
            width='FULL'
            altTxt={posts.data[0].attributes.title}
            creationDate={posts.data[0].attributes.creation}
            author={posts.data[0].attributes.author}
            slug={posts.data[0].attributes.slug}
            title={posts.data[0].attributes.title}
          />

          <div className="flex flex-col gap-6 w-[45%]">

            {
              posts.data.slice(1, 3).map((item, index) => {
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
            }
          </div>
        </div>

        {/* Visible at smaller screens */}
        <div className="lg:hidden">
          <BlogCard
            imgURL={posts.data[0].attributes.coverImageURL}
            width='FULL'
            altTxt={posts.data[0].attributes.title}
            creationDate={posts.data[0].attributes.creation}
            author={posts.data[0].attributes.author}
            slug={posts.data[0].attributes.slug}
            title={posts.data[0].attributes.title}
          />

          <div className="flex gap-6 flex-col justify-stretch items-stretch  md:flex-row">
            {
              posts.data.slice(1, 3).map((item, index) => {
                return <BlogCard
                  key={index}
                  width="HALF"
                  imgURL={item.attributes.coverImageURL}
                  altTxt={item.attributes.title}
                  creationDate={item.attributes.creation}
                  author={item.attributes.author}
                  slug={item.attributes.slug}
                  title={item.attributes.title}
                />
              })
            }
          </div>
        </div>
      </div>



      {/* NewsLetter */}
      <NewsletterForm />
      {/* Discover Latest in */}
      <h1 className='text-center text-3xl font-bold mt-12'>Discover Latest in...</h1>
      {
        catgories.data.map((item, index) => {
          return <Category
            key={index}
            name={item.attributes.name} />
        })
      }
      <JoinCommunity />
    </div >
  )
}

export default Home