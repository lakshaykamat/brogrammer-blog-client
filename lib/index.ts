import { BlogPost, Categories } from "@/types";
import API from "./api";

//Fetch all blogs
export const fetchAllBLogs = async (): Promise<BlogPost> => {
    const response = await API.get("blogs?populate=*");
    return response.data;
};


export const fetchBlog = async (slug: string): Promise<BlogPost> => {
    const response = await API.get(`blogs?populate=*&filters[slug][$eq]=${slug}`);
    return response.data;
};


export const fetchCategories = async (): Promise<Categories> => {
    const response = await API.get(`categories`);
    console.log(response.data)
    return response.data;
}

export const fetchBlogByCategory = async (category: string): Promise<BlogPost> => {
    const response = await API.get(`blogs?populate=*&filters[category][name][$eq]=${category}`)
    return response.data
}