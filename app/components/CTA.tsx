"use client";
import { fetchCategories } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const CTA = () => {
  const CATEGORIES = useQuery({
    queryKey: ["fetch_all_categories"],
    queryFn: () => fetchCategories(),
  });

  return (
    <div className="mx-6 my-12 md:mx-16 xl:mx-24">
      <div className="flex flex-col gap-3 my-3">
        <h1 className="text-3xl font-bold xl:text-4xl">Brogramer Blog</h1>
        <p className="text-lg xl:text-xl md:w-[80%]">
          Get tips and advice on delivering exceptional customer service,
          engaging and delighting your customers, and building a
          customer-centric company.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 my-12 justify-self-stretch sm:grid-cols-2 xl:grid-cols-3">
        {CATEGORIES.data &&
          CATEGORIES.data.data.slice(0, 4).map((item) => {
            return (
              <Link
                key={item.id}
                href={"/categories/" + item.attributes.name}
                className="text-slate-200 text-center dark:text-sky-950 px-16 py-4 text-base lg:text-lg drop-shadow-lg font-bold bg-sky-600 dark:bg-sky-400 rounded tracking-wider hover:bg-[#0D567A] hover:dark:bg-sky-600 transition-all">
                {item.attributes.name}
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default CTA;
