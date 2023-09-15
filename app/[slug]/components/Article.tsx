import getFormattedDate from '@/utils/getFormattedDate'
import Image from 'next/image'
import Link from 'next/link'
import MarkdownIt from "markdown-it";

type ArticleProps = {
    image:string
    title:string
    publishedAt:string
    author:string
    body:string
}
const Article = ({image,title,publishedAt,author,body}:ArticleProps) => {
    const md = new MarkdownIt();
    const htmlContent = md.render(body);
  return (
    <article className="xl:max-w-[60%] w-full">
    <Image
      src={image}
      alt={title}
      quality={100}
      width={850}
      height={650}
    />
    <h1 className="mt-12 leading-normal text-sky-600 dark:text-sky-100">{title}</h1>
    <p className="mt-2">
      {getFormattedDate(publishedAt)}
      <span> | </span>
      {author}
    </p>
    <section>
      <h3>Table of Content</h3>
    </section>
    <section dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <Link href="/">Back to Home</Link>
  </article>
  )
}

export default Article