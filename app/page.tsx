import React from 'react'
import AllBLogs from './components/BlogCard';

type Props = {}

const Home: React.FC = (props: Props) => {

  return (
    <div className=" ">

      <div className="drop-shadow-2xl home_gradient flex justify-between items-center md:px-32 px-5 py-12">
        <div>
          <h1 className="text-4xl text-[#2D2D36] font-bold">
            <span className='hidden  md:inline'>Welcome to </span>Brogrammer Blog</h1>
          <p className="text-gray-700 mt-4">Discover amazing articles and insights.</p>
        </div>
        <img src="coding.png" className="hidden md:flex" width={350} />
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
    </div>
  )
}
export default Home