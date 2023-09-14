"use client"
import Link from 'next/link'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchCategories } from '@/lib'


const Categories = () => {
    // const data = await fetchCategories()
    const CATEGORIES = useQuery({
        queryKey: ["fetch_categoriessw"],
        queryFn: () => fetchCategories(),
      });
    return (
        <div className='m-12 xl:mx-48'>
            <h1 className='text-3xl font-bold xl:text-4xl'>Categories</h1>
            <p className='my-3'>Each category focuses on a specific area, offering in-depth articles and resources to help you stay informed and enhance your skills. </p>
            <hr className='mb-3'/>
            <section className="grid grid-cols-1 gap-6 justify-self-stretch sm:grid-cols-2 xl:grid-cols-3">
                {
                    CATEGORIES.data && CATEGORIES.data.data.map((item,index)=>{
                        return <CategoryButton key={index} name={item.attributes.name}/>
                    })
                }
            </section>
        </div>
    )
}
type BtnProps = {
    name:string
}
const CategoryButton = ({name}:BtnProps)=>{
    return  <Link href={"categories/"+name}><button className='text-slate-200 w-full dark:text-sky-950 px-16 py-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-600 dark:bg-sky-400 rounded tracking-wider hover:bg-[#0D567A] hover:dark:bg-sky-600 transition-all'>{name}</button></Link>
}
export default Categories