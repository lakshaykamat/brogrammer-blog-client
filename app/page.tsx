// "use client"
import Link from 'next/link';
// import ScrollReveal from 'scrollreveal';
import NewsletterForm from './components/NewsLetterForm';
import { fetchAllBlogs } from '@/lib/fetchData';
import CTA from './components/CTA';
import BlogCard from './components/BlogCard';

type Props = {}

const Home = async () => {
  const posts = await fetchAllBlogs()
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

          <div className="flex flex-col gap-6 w-[30%]">

          {
              posts.data.slice(1,3).map((item, index) => {
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
              posts.data.slice(1,3).map((item, index) => {
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
      <section className='animate p-6 md:mx-16 xl:mx-24 mb-12'>
        <div className='flex justify-between my-3'>
          <h1 className='text-2xl font-bold'>Python</h1>
          <Link href={"/"} className='underline text-sky-600'>View all post</Link>
        </div>
        <hr className='my-3' />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
          <div className='animate'>
            <div className="text-gray-800 dark:text-slate-200 relative overflow-hidden">
              <img
                src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                alt="Best Practices for Optimizing Website Performance and Loading Speed"
                className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="mt-auto text-sm flex gap-3">
              <p>5 Jan 2023</p>
              <p>Lakshay</p>
            </div>
            <div className="flex flex-col">
              <Link
                href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                className="text-lg xl:text-2xl mb-4 mt-2 font-bold"
              >
                Best Practices for Optimizing Website Performance and Loading Speed
              </Link>
            </div>
          </div>
          <div className='animate2'>
            <div className="text-gray-800 dark:text-slate-200 relative overflow-hidden">
              <img
                src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                alt="Best Practices for Optimizing Website Performance and Loading Speed"
                className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="mt-auto text-sm flex gap-3">
              <p>5 Jan 2023</p>
              <p>Lakshay</p>
            </div>
            <div className="flex flex-col">
              <Link
                href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                className="text-lg xl:text-2xl mb-4 mt-2 font-bold"
              >
                Best Practices for Optimizing Website Performance and Loading Speed
              </Link>
            </div>
          </div>
          <div className='animate3'>
            <div className="text-gray-800 dark:text-slate-200 overflow-hidden">
              <img
                src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                alt="Best Practices for Optimizing Website Performance and Loading Speed"
                className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="mt-auto text-sm flex gap-3">
              <p>5 Jan 2023</p>
              <p>Lakshay</p>
            </div>
            <div className="flex flex-col">
              <Link
                href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                className="text-lg xl:text-2xl mb-4 mt-2 font-bold"
              >
                Best Practices for Optimizing Website Performance and Loading Speed
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='animate p-6 md:mx-16 xl:mx-24 mb-12'>
        <div className='flex justify-between my-3'>
          <h1 className='text-2xl font-bold'>C/C++</h1>
          <Link href={"/"} className='underline text-sky-600'>View all post</Link>
        </div>
        <hr className='my-3' />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
          <div className='animate'>
            <div className="text-gray-800 dark:text-slate-200 relative overflow-hidden">
              <img
                src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                alt="Best Practices for Optimizing Website Performance and Loading Speed"
                className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="mt-auto text-sm flex gap-3">
              <p>5 Jan 2023</p>
              <p>Lakshay</p>
            </div>
            <div className="flex flex-col">
              <Link
                href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                className="text-lg xl:text-2xl mb-4 mt-2 font-bold"
              >
                Best Practices for Optimizing Website Performance and Loading Speed
              </Link>
            </div>
          </div>
          <div className='animate'>
            <div className="text-gray-800 dark:text-slate-200 relative overflow-hidden">
              <img
                src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                alt="Best Practices for Optimizing Website Performance and Loading Speed"
                className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="mt-auto text-sm flex gap-3">
              <p>5 Jan 2023</p>
              <p>Lakshay</p>
            </div>
            <div className="flex flex-col">
              <Link
                href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                className="text-lg xl:text-2xl mb-4 mt-2 font-bold"
              >
                Best Practices for Optimizing Website Performance and Loading Speed
              </Link>
            </div>
          </div>
          <div className='animate'>
            <div className="text-gray-800 dark:text-slate-200 overflow-hidden">
              <img
                src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                alt="Best Practices for Optimizing Website Performance and Loading Speed"
                className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="mt-auto text-sm flex gap-3">
              <p>5 Jan 2023</p>
              <p>Lakshay</p>
            </div>
            <div className="flex flex-col">
              <Link
                href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                className="text-lg xl:text-2xl mb-4 mt-2 font-bold"
              >
                Best Practices for Optimizing Website Performance and Loading Speed
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='animate p-6 md:mx-16 xl:mx-24 mb-12'>
        <div className='flex justify-between my-3'>
          <h1 className='text-2xl font-bold'>Reactjs</h1>
          <Link href={"/"} className='underline text-sky-600'>View all post</Link>
        </div>
        <hr className='my-3' />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
          <div className='animate'>
            <div className="text-gray-800 dark:text-slate-200 relative overflow-hidden">
              <img
                src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                alt="Best Practices for Optimizing Website Performance and Loading Speed"
                className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="mt-auto text-sm flex gap-3">
              <p>5 Jan 2023</p>
              <p>Lakshay</p>
            </div>
            <div className="flex flex-col">
              <Link
                href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                className="text-lg xl:text-2xl mb-4 mt-2 font-bold"
              >
                Best Practices for Optimizing Website Performance and Loading Speed
              </Link>
            </div>
          </div>
          <div className='animate'>
            <div className="text-gray-800 dark:text-slate-200 relative overflow-hidden">
              <img
                src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                alt="Best Practices for Optimizing Website Performance and Loading Speed"
                className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="mt-auto text-sm flex gap-3">
              <p>5 Jan 2023</p>
              <p>Lakshay</p>
            </div>
            <div className="flex flex-col">
              <Link
                href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                className="text-lg xl:text-2xl mb-4 mt-2 font-bold"
              >
                Best Practices for Optimizing Website Performance and Loading Speed
              </Link>
            </div>
          </div>
          <div className='animate'>
            <div className="text-gray-800 dark:text-slate-200 overflow-hidden">
              <img
                src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                alt="Best Practices for Optimizing Website Performance and Loading Speed"
                className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="mt-auto text-sm flex gap-3">
              <p>5 Jan 2023</p>
              <p>Lakshay</p>
            </div>
            <div className="flex flex-col">
              <Link
                href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                className="text-lg xl:text-2xl mb-4 mt-2 font-bold"
              >
                Best Practices for Optimizing Website Performance and Loading Speed
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='animate p-6 md:mx-16 xl:mx-24 mb-12'>
        <div className='flex justify-between my-3'>
          <h1 className='text-2xl font-bold'>Nodejs</h1>
          <Link href={"/"} className='underline text-sky-600'>View all post</Link>
        </div>
        <hr className='my-3' />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
          <div className='animate'>
            <div className="text-gray-800 dark:text-slate-200 relative overflow-hidden">
              <img
                src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                alt="Best Practices for Optimizing Website Performance and Loading Speed"
                className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="mt-auto text-sm flex gap-3">
              <p>5 Jan 2023</p>
              <p>Lakshay</p>
            </div>
            <div className="flex flex-col">
              <Link
                href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                className="text-lg xl:text-2xl mb-4 mt-2 font-bold"
              >
                Best Practices for Optimizing Website Performance and Loading Speed
              </Link>
            </div>
          </div>
          <div className='animate'>
            <div className="text-gray-800 dark:text-slate-200 relative overflow-hidden">
              <img
                src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                alt="Best Practices for Optimizing Website Performance and Loading Speed"
                className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="mt-auto text-sm flex gap-3">
              <p>5 Jan 2023</p>
              <p>Lakshay</p>
            </div>
            <div className="flex flex-col">
              <Link
                href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                className="text-lg xl:text-2xl mb-4 mt-2 font-bold"
              >
                Best Practices for Optimizing Website Performance and Loading Speed
              </Link>
            </div>
          </div>
          <div className='animate'>
            <div className="text-gray-800 dark:text-slate-200 overflow-hidden">
              <img
                src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                alt="Best Practices for Optimizing Website Performance and Loading Speed"
                className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="mt-auto text-sm flex gap-3">
              <p>5 Jan 2023</p>
              <p>Lakshay</p>
            </div>
            <div className="flex flex-col">
              <Link
                href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                className="text-lg xl:text-2xl mb-4 mt-2 font-bold"
              >
                Best Practices for Optimizing Website Performance and Loading Speed
              </Link>
            </div>
          </div>
        </div>
      </section>



      <section className="animate drop-shadow-md max-w-5xl m-6 lg:mx-auto my-8 px-4 sm:px-6 lg:px-14 rounded-md py-8 dark:bg-sky-200 dark:text-gray-800 text-slate-200 bg-[#0D567A]">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Join Our Community" className=" w-full sm:w-[30%] sm:w-1/2 rounded-lg" />
          <div className="flex-1 m-4">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-sm dark:text-gray-700 text-slate-300">Become a part of our thriving community of fellow bloggers, readers, and learners. Engage in discussions, share ideas, and connect with like-minded individuals.</p>
          </div>
        </div>
      </section>

    </div >
  )
}

export async function generateStaticParams() {

  const posts = await fetchAllBlogs()

  return posts.data.map(post => (
    { postId: post.attributes.slug }
  ))
}
export default Home