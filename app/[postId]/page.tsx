"use client";
import getFormattedDate from "@/utils/getFormattedDate";
import Link from "next/link";
import MarkdownIt from "markdown-it";
import NewsLetter from "./components/NewsLetter";
import { fetchBlogContent } from "@/lib/fetchData";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import {Helmet} from 'react-helmet'

const page =  ({ params }: { params: { postId: string } }) => {
  const { postId } = params;
  const md = new MarkdownIt();

  const BLOG = useQuery({
    queryKey: ["fetch_a_blog"],
    queryFn: () => fetchBlogContent(postId),
  });

  // const post = await fetchBlogContent(postId)
  // if(post.length <= 0) return notFound()
  if (BLOG.isLoading) {
    return <h1>Loading...</h1>;
  }
  if(BLOG.data === null) return notFound()
  if (BLOG.data) {
    const { image, author, title, publishedAt, body } = BLOG.data;
    const htmlContent = md.render(body);
    return (
      <main className="flex flex-col justify-between max-w-full gap-6 p-6 mx-auto prose prose-base lg:prose-lg prose-slate dark:prose-invert lg:flex-row lg:mx-6 sm:mx-12 md:mx-20">
        <Helmet>
        <title>{title}</title>
      </Helmet>
        <article className="lg:max-w-[60%]">
          <Image
            src={image}
            alt={title}
            quality={100}
            width={750}
            height={650}
          />
          <h1 className="mt-12 lg:leading-snug">{title}</h1>
          <p className="mt-2">
            {getFormattedDate(publishedAt)}
            <span> | </span>
            {author}
          </p>
          <section dangerouslySetInnerHTML={{ __html: htmlContent }} />
          <p>
            <Link href="/">← Back to home </Link>
          </p>
        </article>

        <NewsLetter title={title} url={"$"} hastag="" />
      </main>
    );
  }
};

export default page;
