// import NewsletterForm from './components/NewsLetterForm';
// import { fetchAllBlogs, fetchCategories } from '@/lib/fetchData';
// import CTA from './components/CTA';
// import BlogCard from './components/BlogCard';
// import Category from './components/Category';
// import JoinCommunity from './components/JoinCommunity';
// import { Suspense } from 'react'
// import { CategoryParent} from './components/CategorySkeleton'
// import CardSkeleton from './components/CardSkeleton';
"use client";
import { fetchAllBlogs } from "@/lib/fetchData";
import { useQuery } from "@tanstack/react-query";
import CTA from "./components/CTA";
import JoinCommunity from "./components/JoinCommunity";
import CardSkeleton from "./components/CardSkeleton";
import BlogCard from "./components/BlogCard";
import NewsletterForm from "./components/NewsLetterForm";
import getAllPost from "@/lib/getAllPost";
import { getCategories } from "@/lib/getCategories";
import { CategoryParent } from "./components/CategorySkeleton";
import Category from "./components/Category";

// const Home = async () => {

//   const posts = await fetchAllBlogs()
//   const catgories = await fetchCategories()

//   return (
//     <div>

//       <CTA categories={catgories} />

//       <div className="mx-6 my-12 md:mx-16 xl:mx-24 ">
//         <h1 className="text-3xl font-bold">Most Recent Posts</h1>
//         <hr className="h-1 my-6 bg-gray-600" />

//         {/* Most recent post */}
//         {/* lg:visible hidden One Big Card in left and other post in right vertically */}
//         <div className="justify-between hidden w-full gap-12 lg:visible lg:flex">
//           <Suspense fallback={<CardSkeleton />}>
//             <BlogCard
//               imgURL={posts[0].image}
//               width='FULL'
//               altTxt={posts[0].title}
//               creationDate={posts[0].publishedAt}
//               author={posts[0].author}
//               slug={posts[0].slug}
//               title={posts[0].title}
//             />
//           </Suspense>

//           <div className="flex flex-col gap-6 w-[45%]">
//             {
//               posts.slice(1, 3).map((item, index) => {
//                 return (
//                   <Suspense key={index} fallback={<CardSkeleton />}>
//                     <BlogCard
//                       width="FULL"
//                       imgURL={item.image}
//                       altTxt={item.title}
//                       creationDate={item.publishedAt}
//                       author={item.author}
//                       slug={item.slug}
//                       title={item.title}
//                     />
//                   </Suspense>
//                 )
//               })
//             }
//           </div>
//         </div>

//         {/* Visible at smaller screens */}
//         <div className="lg:hidden">
//           <Suspense fallback={<CardSkeleton />}>
//             <BlogCard
//               imgURL={posts[0].image}
//               width='FULL'
//               altTxt={posts[0].title}
//               creationDate={posts[0].publishedAt}
//               author={posts[0].author}
//               slug={posts[0].slug}
//               title={posts[0].title}
//             />
//           </Suspense>

//           <div className="flex flex-col items-stretch gap-6 justify-stretch md:flex-row">
//             {
//               posts.slice(1, 3).map((item, index) => {
//                 return (
//                   <Suspense key={index} fallback={<CardSkeleton />}><BlogCard
//                   width="HALF"
//                   imgURL={item.image}
//                   altTxt={item.title}
//                   creationDate={item.publishedAt}
//                   author={item.author}
//                   slug={item.slug}
//                   title={item.title}
//                   />
//                   </Suspense>
//                 )
//               })
//             }
//           </div>
//         </div>
//       </div>

//       {/* NewsLetter */}
//       <NewsletterForm />
//       {/* Discover Latest in */}
//       <h1 className='mt-12 text-3xl font-bold text-center'>Discover Latest in...</h1>
//       {/* <Skeleton  className="h-12" /> */}
//       {/* <div className='grid grid-cols-1 gap-6 justify-self-stretch sm:grid-rows-2 xl:grid-cols-3'> */}
//       {
//         catgories.map((item, index) => {
//           return (

//             <Suspense key={index} fallback={<CategoryParent/>}>
//             <Category
//             key={index}
//             name={item} />
//             </Suspense>
//           )
//         })
//       }
//       {/* </div> */}
//       <JoinCommunity />
//     </div >
//   )
// }

// export default Home

const Home = () => {
  const BLOGS = useQuery({
    queryKey: ["fetch_all_blogs"],
    queryFn: () => getAllPost(),
  });

  const CATEGORIES = useQuery({
    queryKey: ["fetch_all_categories"],
    queryFn: () => getCategories(),
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
                imgURL={BLOGS.data[0].image}
                width="FULL"
                altTxt={BLOGS.data[0].title}
                creationDate={BLOGS.data[0].publishedAt}
                author={BLOGS.data[0].author}
                slug={BLOGS.data[0].slug}
                title={BLOGS.data[0].title}
              />
            ) : (
              <CardSkeleton />
            )}

            <div className="flex flex-col gap-6 w-[45%]">
              {BLOGS.data ? (
                // slice
                BLOGS.data.slice(1,3).map((blog, index) => {
                  return (
                    <BlogCard
                    key={index}
                      width="FULL"
                      imgURL={blog.image}
                      altTxt={blog.title}
                      creationDate={blog.publishedAt}
                      author={blog.author}
                      slug={blog.slug}
                      title={blog.title}
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
                imgURL={BLOGS.data[0].image}
                width="FULL"
                altTxt={BLOGS.data[0].title}
                creationDate={BLOGS.data[0].publishedAt}
                author={BLOGS.data[0].author}
                slug={BLOGS.data[0].slug}
                title={BLOGS.data[0].title}
              />
            ) : (
              <CardSkeleton />
            )}

            <div className="flex flex-col items-stretch gap-6 justify-stretch md:flex-row">
              {BLOGS.data ? (
                // slice
                BLOGS.data.slice(1,3).map((blog, index) => {
                  return (
                    <BlogCard
                    key={index}
                      width="HALF"
                      imgURL={blog.image}
                      altTxt={blog.title}
                      creationDate={blog.publishedAt}
                      author={blog.author}
                      slug={blog.slug}
                      title={blog.title}
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
          {CATEGORIES.data ? (
            CATEGORIES.data.map((item, index) => <Category key={index} name={item} />)
          ) : (
            <CategoryParent />
          )}
        <JoinCommunity />
      </div>
    </>
  );
};

export default Home;
