"use client"
import getFormattedDate from '@/utils/getFormattedDate'
import { getHeightAndWidth } from '@/utils/getHeightAndWidth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

type Props = {
  imgURL: string,
  altTxt: string,
  creationDate: string,
  author: string,
  slug: string,
  title: string,
  width: string
}

const BlogCard =  ({ imgURL, altTxt, creationDate, author, slug, title, width }: Props) => {

  // const size = await getHeightAndWidth(imgURL)


  return (
    <Link
      href={`/${slug}`}
      className="mt-2 mb-4 text-lg font-bold xl:text-2xl"
    >
      <div className={`${width == "HALF" ? "w-auto md:w-[50%]" : "overflow-hidden items-center text-gray-800 dark:text-slate-200 justify-stretch rounded-lg"} `}>
        <div>
          <Image src={imgURL} alt={altTxt} className="object-cover h-auto min-w-full m-auto mb-4 transition-all rounded-lg outline hover:scale-105" width={700} height={600} priority />
        </div>
        <div className="flex gap-3 mt-auto text-sm">
          <p>{getFormattedDate(creationDate)}</p>
          <p>{author}</p>
        </div>
        <h1 className="flex flex-col">{title}</h1>
      </div>
    </Link>


  )
}
export default BlogCard