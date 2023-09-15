"use client";
import getFormattedDate from "@/utils/getFormattedDate";
import Link from "next/link";

import NewsLetter from "./components/NewsLetter";
import { fetchBlog } from "@/lib";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Spinner from "./components/Spinner";
import Article from "./components/Article";

const BlogView = ({ params }: { params: { slug: string } }) => {

  const BLOG = useQuery({
    queryKey: ["fetch_a_blog"],
    queryFn: () => fetchBlog(params.slug),
  });
  if (BLOG.isLoading) return <Spinner />;

  if (BLOG.data) {
    if (BLOG.data.data.length === 0) return notFound();
    const { image, author, title, publishedAt, body } =
      BLOG.data.data[0].attributes;

    return (
      <main className="flex flex-col items-center justify-center max-w-3xl gap-6 p-8 mx-auto prose xl:justify-between xl:max-w-full mb-28 prose-zinc xl:flex-row dark:prose-invert xl:mx-10 dark:prose-headings:text-sky-100 prose-headings:text-sky-800">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Article
          image={image}
          author={author}
          title={title}
          publishedAt={publishedAt}
          body={body}
        />
        <NewsLetter title={title} url={"$"} hastag="" />
      </main>
    );
  }
};

export default BlogView;
