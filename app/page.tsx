import React from 'react'
import AllBLogs from './components/BlogCard';
import Link from 'next/link';

type Props = {}

const Home: React.FC = (props: Props) => {

  return (
    <div className="">

      <div className='m-12 xl:mx-48'>
        <div className='flex gap-3 flex-col my-3'>
          <h1 className='text-3xl xl:text-4xl font-bold'>Brogramer Blog</h1>
          <p className='text-lg xl:text-xl md:w-[80%]'>Get tips and advice on delivering exceptional customer service, engaging and delighting your customers, and building a customer-centric company.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-wrap justify-around items-center my-12'>
          <button className='text-slate-100 px-16 py-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-500 rounded tracking-wider hover:bg-sky-600 transition-all'>Reactjs</button>
          <button className='text-slate-100 px-16 py-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-500 rounded tracking-wider hover:bg-sky-600 transition-all'>C++</button>
          <button className='text-slate-100 px-16 py-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-500 rounded tracking-wider hover:bg-sky-600 transition-all'>Python</button>
          <button className='text-slate-100 px-16 py-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-500 rounded tracking-wider hover:bg-sky-600 transition-all'>Kotlin</button>
        </div>
      </div>
      <div className="m-12 xl:mx-48">
        <h1 className="text-3xl font-bold">Most Recent Posts</h1>
        <hr className="h-1 my-6 bg-gray-600" />

        {/* Most recent post */}
        {/* lg:visible hidden One Big Card in left and other post in right vertically */}
        <div className="hidden lg:visible lg:flex justify-between gap-12">

          <div className="items-center justify-stretch rounded-lg">
            <div className="relative overflow-hidden">
              <img
                src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                alt="Best Practices for Optimizing Website Performance and Loading Speed"
                className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="mt-auto text-gray-800 text-sm flex gap-3">
              <p>5 Jan 2023</p>
              <p>Lakshay</p>
            </div>
            <div className="flex flex-col">
              <Link
                href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                className="text-lg xl:text-2xl text-gray-800 mb-4 mt-2 font-bold"
              >
                Best Practices for Optimizing Website Performance and Loading Speed
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-1/3">

            <div className="items-center justify-stretch rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                  alt="Best Practices for Optimizing Website Performance and Loading Speed"
                  className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
                />
              </div>
              <div className="mt-auto text-gray-800 text-sm flex gap-3">
                <p>5 Jan 2023</p>
                <p>Lakshay</p>
              </div>
              <div className="flex flex-col">
                <Link
                  href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                  className="text-lg xl:text-2xl text-gray-800 mb-4 mt-2 font-bold"
                >
                  Best Practices for Optimizing Website Performance and Loading Speed
                </Link>
              </div>
            </div>

            <div className="items-center justify-stretch rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                  alt="Best Practices for Optimizing Website Performance and Loading Speed"
                  className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
                />
              </div>
              <div className="mt-auto text-gray-800 text-sm flex gap-3">
                <p>5 Jan 2023</p>
                <p>Lakshay</p>
              </div>
              <div className="flex flex-col">
                <Link
                  href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                  className="text-lg xl:text-2xl text-gray-800 mb-4 mt-2 font-bold"
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
            <div className="relative overflow-hidden">
              <img
                src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                alt="Best Practices for Optimizing Website Performance and Loading Speed"
                className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="mt-auto text-gray-800 text-sm flex gap-3">
              <p>5 Jan 2023</p>
              <p>Lakshay</p>
            </div>
            <div className="flex flex-col">
              <Link
                href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                className="text-lg xl:text-2xl text-gray-800 mb-4 mt-2 font-bold"
              >
                Best Practices for Optimizing Website Performance and Loading Speed
              </Link>
            </div>
          </div>

          <div className="flex gap-6 flex-col md:flex-row">
            <div>
              <div className="relative overflow-hidden">
                <img
                  src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                  alt="Best Practices for Optimizing Website Performance and Loading Speed"
                  className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
                />
              </div>
              <div className="mt-auto text-gray-800 text-sm flex gap-3">
                <p>5 Jan 2023</p>
                <p>Lakshay</p>
              </div>
              <div className="flex flex-col">
                <Link
                  href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                  className="text-lg xl:text-2xl text-gray-800 mb-4 mt-2 font-bold"
                >
                  Best Practices for Optimizing Website Performance and Loading Speed
                </Link>
              </div>
            </div>

            <div>
              <div className="relative overflow-hidden">
                <img
                  src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
                  alt="Best Practices for Optimizing Website Performance and Loading Speed"
                  className="transition-all hover:scale-110 w-full h-auto object-cover mb-4 rounded-lg"
                />
              </div>
              <div className="mt-auto text-gray-800 text-sm flex gap-3">
                <p>5 Jan 2023</p>
                <p>Lakshay</p>
              </div>
              <div className="flex flex-col">
                <Link
                  href="/posts/best-practices-for-optimizing-web-performance-and-loading-speed"
                  className="text-lg xl:text-2xl text-gray-800 mb-4 mt-2 font-bold"
                >
                  Best Practices for Optimizing Website Performance and Loading Speed
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Latest Blog  */}
      <section className="mx-10 md:mx-12 lg:mx-32 xl:mx-40 my-14">
        <h1 className="text-3xl font-bold mb-4">Latest Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AllBLogs />
        </div>
      </section>


      {/* Popular Blog  */}
      <section className="mx-10 md:mx-12 lg:mx-32 xl:mx-40 my-14">
        <h1 className="text-3xl font-bold mb-4">Popular Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AllBLogs />
        </div>
      </section>
    </div >
  )
}
export default Home