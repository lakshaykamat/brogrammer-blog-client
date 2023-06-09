import { BlogPost, Categories, Team } from "@/types"
import getAllPost from "./getAllPost"
import { getBlogData } from "./getBlogData"
import { getCategories } from "./getCategories"
import { getBlogsByCategory } from "./getBlogByCategory"
import { getTeam } from "./getTeam"

export const fetchAllBlogs = async (): Promise<BlogPost> => {
    return await getAllPost()
}
export const fetchBlogContent = async (postId: string): Promise<BlogPost> => {
    return await getBlogData(postId)
}
export const fetchCategories = async (): Promise<Categories> => {
    return await getCategories()
}
export const fetchBlogsByCategory = async (category: string):Promise<BlogPost> => {
    return await getBlogsByCategory(category)
}
export const fetchTeam = async():Promise<Team>=>{
    return await getTeam()
}