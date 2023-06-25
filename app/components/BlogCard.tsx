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

const BlogCard = async ({ imgURL, altTxt, creationDate, author, slug, title, width }: Props) => {


  const size = await getHeightAndWidth(imgURL)


  return (
    <Link
      href={`/${slug}`}
      className="text-lg xl:text-2xl mb-4 mt-2 font-bold"
    >
      <div className={`${width == "HALF" ? "w-auto md:w-[50%]" : "overflow-hidden items-center text-gray-800 dark:text-slate-200 justify-stretch rounded-lg"} `}>
        <div>
          <Image src={imgURL} alt={altTxt} className="transition-all hover:scale-105 w-full h-auto object-cover mb-4 rounded-lg" width={size.width} height={size.height} priority />
        </div>
        <div className="mt-auto text-sm flex gap-3">
          <p>{getFormattedDate(creationDate)}</p>
          <p>{author}</p>
        </div>
        <h1 className="flex flex-col">{title}</h1>
      </div>
    </Link>


  )
}
export default BlogCard