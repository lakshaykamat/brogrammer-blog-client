import { BlogPost } from "@/types"
import getAllPost from "./getAllPost"
import { getBlogData } from "./getBlogData"

export const fetchAllBlogs = async (): Promise<BlogPost> => {
    return await getAllPost()
}
export const fetchBlogContent = async (postId: string): Promise<BlogPost> => {
    return await getBlogData(postId)
}