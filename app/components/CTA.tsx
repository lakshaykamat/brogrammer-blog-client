import { Categories } from '@/types'
import Link from 'next/link'
import React from 'react'
type Props = {
    categories:Categories
}

const CTA = ({categories}: Props) => {

    return (
        <div className='m-12 xl:mx-48'>
            <div className='flex gap-3 flex-col my-3'>
                <h1 className='text-3xl xl:text-4xl font-bold'>Brogramer Blog</h1>
                <p className='text-lg xl:text-xl md:w-[80%]'>Get tips and advice on delivering exceptional customer service, engaging and delighting your customers, and building a customer-centric company.</p>
            </div>
            <div className="grid grid-cols-1 justify-self-stretch sm:grid-cols-2 xl:grid-cols-3 gap-6 my-12">
                {
                    categories.slice(0,4).map((item)=>{
                        return <Link href={`/categories/${item}`} className='text-slate-200 text-center dark:text-sky-950 px-16 py-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-600 dark:bg-sky-400 rounded tracking-wider hover:bg-[#0D567A] hover:dark:bg-sky-600 transition-all' key={item}>{item}</Link>
                    })
                }
            </div>
        </div>
    )
}
export default CTA