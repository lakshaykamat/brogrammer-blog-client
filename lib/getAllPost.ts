import { BlogPost } from "@/types"
import axios from 'axios'
import { getToken } from './getToken';
export default async function getAllPost():Promise<BlogPost> {
  const token = await getToken()


  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://portfilio-blog-page.onrender.com/api/blog`,
    headers: { }
  };


  try {
    const response = await axios.request(config);
    return response.data
  }
  catch (error) {
    console.log(error);
    throw new Error("Failed to fetch blogs")
  }

}

