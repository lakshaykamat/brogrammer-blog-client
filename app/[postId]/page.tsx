"use client";
import getFormattedDate from "@/utils/getFormattedDate";
import Link from "next/link";
import MarkdownIt from "markdown-it";
import NewsLetter from "./components/NewsLetter";
import { fetchBlog } from "@/lib";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const BlogView = ({ params }: { params: { postId: string } }) => {
  const { postId } = params;
  const md = new MarkdownIt();

  const BLOG = useQuery({
    queryKey: ["fetch_a_blog"],
    queryFn: () => fetchBlog(postId),
  });
  if (BLOG.isLoading) {
    return <div className="flex items-center justify-center min-h-screen"><div className="text-center">
    <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
</div></div>;
  }

  if (BLOG.data) {
    if (BLOG.data.data.length === 0) return notFound();
    const { image, author, title, publishedAt, body } =
      BLOG.data.data[0].attributes;
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
          <section>
            <h3>Table of Content</h3>
          </section>
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

export default BlogView;
