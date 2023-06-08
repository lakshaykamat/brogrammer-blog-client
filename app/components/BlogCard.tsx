import getFormattedDate from '@/lib/getFormattedDate'
import { BlogPost } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    imgURL:string,
    altTxt:string,
    creationDate:string,
    author:string,
    slug:string,
    title:string,
    width:string
}

const BlogCard = ({imgURL,altTxt,creationDate,author,slug,title,width}:Props) => {
    const CLASSES = {
            class1: "relative overflow-hidden items-center text-gray-800 dark:text-slate-200 justify-stretch rounded-lg",
            class2: "w-auto md:w-[50%] relative overflow-hidden items-center text-gray-800 dark:text-slate-200 justify-stretch rounded-lg"
    }

    return (
        <div className={`${width=="HALF" ? "w-auto md:w-[50%]" : "relative overflow-hidden items-center text-gray-800 dark:text-slate-200 justify-stretch rounded-lg"} `}>
        <div>
          <Image src={imgURL} alt={altTxt} className="transition-all hover:scale-105 w-full h-auto object-cover mb-4 rounded-lg" width={1050} height={1050}/>
        </div>
        <div className="mt-auto text-sm flex gap-3">
          <p>{getFormattedDate(creationDate)}</p>
          <p>{author}</p>
        </div>
        <div className="flex flex-col">
          <Link
            href={`/posts/${slug}`}
            className="text-lg xl:text-2xl mb-4 mt-2 font-bold"
          >
            {title}
          </Link>
        </div>
      </div>
    )
}
export default BlogCard