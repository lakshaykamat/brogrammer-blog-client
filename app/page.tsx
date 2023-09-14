"use client";
import { fetchAllBLogs } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import CTA from "./components/CTA";
import JoinCommunity from "./components/JoinCommunity";
import CardSkeleton from "./components/CardSkeleton";
import BlogCard from "./components/BlogCard";
import NewsletterForm from "./components/NewsLetterForm";
import { CategoryParent } from "./components/CategorySkeleton";
import Category from "./components/Category";
import { fetchCategories } from "@/lib";

const Home = () => {
  const BLOGS = useQuery({
    queryKey: ["fetch_all_blogs"],
    queryFn: () => fetchAllBLogs(),
  });

  const CATEGORIES = useQuery({
    queryKey: ["fetch_all_categories"],
    queryFn: () => fetchCategories(),
  });

  return (
    <>
      <div>
        <CTA />
        <div className="mx-6 my-12 md:mx-16 xl:mx-24 ">
          <h1 className="text-3xl font-bold">Most Recent Posts</h1>
          <hr className="h-1 my-6 bg-gray-600" />
          <div className="justify-between hidden w-full gap-12 lg:visible lg:flex">
            {BLOGS.data ? (
              
              <BlogCard
                imgURL={BLOGS.data.data[0].attributes.image}
                width="FULL"
                altTxt={BLOGS.data.data[0].attributes.title}
                creationDate={BLOGS.data.data[0].attributes.publish}
                author={BLOGS.data.data[0].attributes.author}
                slug={BLOGS.data.data[0].attributes.slug}
                title={BLOGS.data.data[0].attributes.title}
              />
            ) : (
              <CardSkeleton />
            )}

            <div className="flex flex-col gap-6 w-[45%]">
              {BLOGS.data ? (
                // slice
                BLOGS.data.data.slice(1,3).map((blog) => {
                  return (
                    <BlogCard
                    key={blog.id}
                      width="FULL"
                      imgURL={blog.attributes.image}
                      altTxt={blog.attributes.title}
                      creationDate={blog.attributes.publishedAt}
                      author={blog.attributes.author}
                      slug={blog.attributes.slug}
                      title={blog.attributes.title}
                    />
                  );
                })
              ) : (
                <>
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                </>
              )}
            </div>
          </div>

          {/*Visble at smaller screens */}
          <div className="lg:hidden">
            {BLOGS.data ? (
              <BlogCard
                imgURL={BLOGS.data.data[0].attributes.image}
                width="FULL"
                altTxt={BLOGS.data.data[0].attributes.title}
                creationDate={BLOGS.data.data[0].attributes.publishedAt}
                author={BLOGS.data.data[0].attributes.author}
                slug={BLOGS.data.data[0].attributes.slug}
                title={BLOGS.data.data[0].attributes.title}
              />
            ) : (
              <CardSkeleton />
            )}

            <div className="flex flex-col items-stretch gap-6 justify-stretch md:flex-row">
              {BLOGS.data ? (
                // slice
                BLOGS.data.data.slice(1,3).map((blog, index) => {
                  return (
                    <BlogCard
                    key={blog.id}
                      width="HALF"
                      imgURL={blog.attributes.image}
                      altTxt={blog.attributes.title}
                      creationDate={blog.attributes.publishedAt}
                      author={blog.attributes.author}
                      slug={blog.attributes.slug}
                      title={blog.attributes.title}
                    />
                  );
                })
              ) : (
                <>
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                </>
              )}
            </div>
          </div>
        </div>

        <NewsletterForm />
        <h1 className="mt-12 text-3xl font-bold text-center">
          Discover Latest in...
        </h1>
        {CATEGORIES.isLoading && <h1>Loading...</h1>}
          {CATEGORIES.data ? (
            CATEGORIES.data.data.map((item) => <Category key={item.id} name={item.attributes.name} />)
          ) : (
            <CategoryParent />
          )}
        <JoinCommunity />
      </div>
    </>
  );
};

export default Home;
