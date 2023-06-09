import Link from 'next/link'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className="max-w-fit my-28 flex flex-col justify-center items-center mx-auto px-4 py-8">
    <div>
    <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>

    <p className="mb-4">The requested blog could not be found. Please check the URL or go back to the homepage.</p>
    <Link href="/">
    <button className='text-slate-200 dark:text-sky-950 py-2 px-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-600 dark:bg-sky-400 rounded tracking-wider hover:bg-[#0D567A] hover:dark:bg-sky-600 transition-all'>Home</button>
    </Link>
    </div>
  </div>
  )
}
export default NotFound