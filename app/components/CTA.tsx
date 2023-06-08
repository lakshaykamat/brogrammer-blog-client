import React from 'react'
type Props = {}

const CTA = (props: Props) => {

    return (
        <div className='m-12 xl:mx-48'>
            <div className='flex gap-3 flex-col my-3'>
                <h1 className='text-3xl xl:text-4xl font-bold'>Brogramer Blog</h1>
                <p className='text-lg xl:text-xl md:w-[80%]'>Get tips and advice on delivering exceptional customer service, engaging and delighting your customers, and building a customer-centric company.</p>
            </div>
            <div className='animate grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center my-12'>
                <button className='text-slate-200 dark:text-sky-950 px-16 py-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-600 dark:bg-sky-400 rounded tracking-wider hover:bg-[#0D567A] hover:dark:bg-sky-600 transition-all'>Reactjs</button>
                <button className='text-slate-200 dark:text-sky-950 px-16 py-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-600 dark:bg-sky-400 rounded tracking-wider hover:bg-[#0D567A] hover:dark:bg-sky-600 transition-all'>C/C++</button>
                <button className='text-slate-200 dark:text-sky-950 px-16 py-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-600 dark:bg-sky-400 rounded tracking-wider hover:bg-[#0D567A] hover:dark:bg-sky-600 transition-all'>Java</button>
                <button className='text-slate-200 dark:text-sky-950 px-16 py-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-600 dark:bg-sky-400 rounded tracking-wider hover:bg-[#0D567A] hover:dark:bg-sky-600 transition-all'>Kotlin</button>

            </div>
        </div>
    )
}
export default CTA