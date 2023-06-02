import React from 'react'
import Post from './components/Post';

type Props = {}

const Home: React.FC = (props: Props) => {

  return (
    <div className="dark:bg-slate-800 dark:text-slate-50 text-gray-900 bg-gray-100 min-h-screen">

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold ">Welcome to Brogrammer Blog</h1>
        <p className="dark:text-slate-100 text-gray-600 mt-4">Discover amazing articles and insights.</p>
      </div>
      <section className='m-5'>
        <h2 className='text-3xl font-bold'>Latest Blogs</h2>
        <Post />
      </section>
    </div>
  )
}
export default Home