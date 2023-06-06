import React from 'react'
import AllBLogs from './components/BlogCard';
import Link from 'next/link';
import NewsletterForm from './components/NewsLetterForm';

type Props = {}

const Home: React.FC = (props: Props) => {

  return (
    <div className="">

      <div className='m-12 xl:mx-48'>
        <div className='flex gap-3 flex-col my-3'>
          <h1 className='text-3xl xl:text-4xl font-bold'>Brogramer Blog</h1>
          <p className='text-lg xl:text-xl md:w-[80%]'>Get tips and advice on delivering exceptional customer service, engaging and delighting your customers, and building a customer-centric company.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center my-12'>
          <button className='text-slate-100 px-16 py-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-600 rounded tracking-wider hover:bg-[#0D567A] transition-all'>Reactjs</button>
          <button className='text-slate-100 px-16 py-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-600 rounded tracking-wider hover:bg-[#0D567A] transition-all'>C++</button>
          <button className='text-slate-100 px-16 py-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-600 rounded tracking-wider hover:bg-[#0D567A] transition-all'>Python</button>
          <button className='text-slate-100 px-16 py-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-600 rounded tracking-wider hover:bg-[#0D567A] transition-all'>Kotlin</button>
        </div>
      </div>


      <div className="m-12 xl:mx-48">
        <h1 className="text-3xl font-bold">Most Recent Posts</h1>
        <hr className="h-1 my-6 bg-gray-600" />

        {/* Most recent post */}
        {/* lg:visible hidden One Big Card in left and other post in right vertically */}
        <div className="hidden lg:visible lg:flex justify-between gap-12">

          <div className="items-center dark:text-slate-200 text-gray-800 justify-stretch rounded-lg">
            <div className="relative overflow-hidden">
              <img
                src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                alt="Best Practices for Optimizing Website Performance and Loading Speed"
                className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="mt-auto  text-sm flex gap-3">
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

          <div className="flex flex-col gap-6 w-1/3">

            <div className="items-center text-gray-800 dark:text-slate-200 justify-stretch rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                  alt="Best Practices for Optimizing Website Performance and Loading Speed"
                  className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
                />
              </div>
              <div className="mt-auto  text-sm flex gap-3">
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

            <div className="items-center  text-gray-800 dark:text-slate-200 justify-stretch rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                  alt="Best Practices for Optimizing Website Performance and Loading Speed"
                  className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
                />
              </div>
              <div className="mt-auto  text-sm flex gap-3">
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
        </div>

        {/* Visible at smaller screens */}
        <div className="lg:hidden">
          <div>
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

          <div className="flex gap-6 flex-col md:flex-row">
            <div>
              <div className="dark:text-slate-200 text-gray-800 relative overflow-hidden">
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

            <div>
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
          </div>
        </div>
      </div>



      {/* NewsLetter */}
      <NewsletterForm />
      {/* Discover Latest in */}
        <h1 className='text-center text-3xl font-bold mt-12'>Discover Latest in...</h1>
      <section className='p-6 md:mx-16 xl:mx-24 mb-12'>
        <div className='flex justify-between my-3'>
          <h1 className='text-2xl font-bold'>Python</h1>
          <Link href={"/"} className='underline text-sky-600'>View all post</Link>
        </div>
        <hr className='my-3'/>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
          <div>
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
          <div >
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
          <div >
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



      <section className="drop-shadow-md max-w-5xl mx-auto my-8 px-4 sm:px-6 lg:px-14 rounded-md py-8 dark:bg-sky-200 dark:text-gray-800 text-slate-200 bg-[#0D567A]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Join Our Community" className=" w-[20%] md:w-1/2 rounded-lg" />
          <div className="flex-1 ml-0 md:ml-8 mt-8 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-sm dark:text-gray-700 text-slate-300">Become a part of our thriving community of fellow bloggers, readers, and learners. Engage in discussions, share ideas, and connect with like-minded individuals.</p>
          </div>
        </div>
      </section>

    </div >
  )
}
export default Home