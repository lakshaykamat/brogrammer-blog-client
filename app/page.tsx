import React from 'react'
import Post from './components/Post';

type Props = {}

const Home: React.FC = (props: Props) => {

  return (
    <div className="dark:bg-slate-800  dark:text-slate-50 text-gray-900 bg-gray-100 min-h-screen">

      <div className=" flex justify-between home items-center md:px-32 px-5 py-12">
        <div>
          <h1 className="text-4xl text-[#2D2D36] text-gray-700 font-bold">
            <span className='hidden md:inline'>Welcome to </span>Brogrammer Blog</h1>
          <p className="dark:text-slate-100 text-gray-700 mt-4">Discover amazing articles and insights.</p>
        </div>
        <img src="coding.png" className="hidden md:flex" width={350} />
      </div>
      <section className='m-5'>
        <h2 className='text-3xl font-bold'>Latest Blogs</h2>
        <Post />
      </section>
    </div>
  )
}
export default Home