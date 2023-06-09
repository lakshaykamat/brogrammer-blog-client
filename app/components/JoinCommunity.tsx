import Image from 'next/image'
import React from 'react'

const JoinCommunity = () => {
  return (
    <section className="drop-shadow-md max-w-5xl m-6 lg:mx-auto my-8 px-4 sm:px-6 lg:px-14 rounded-md py-8 dark:bg-sky-200 dark:text-gray-800 text-slate-200 bg-[#0D567A]">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <Image 
        src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Join Our Community" 
        width={1170} 
        height={780} 
        className="w-full sm:w-[30%] sm:w-1/2 rounded-lg" />
        <div className="flex-1 m-4">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-sm dark:text-gray-700 text-slate-300">Become a part of our thriving community of fellow bloggers, readers, and learners. Engage in discussions, share ideas, and connect with like-minded individuals.</p>
        </div>
      </div>
    </section>
  )
}
export default JoinCommunity