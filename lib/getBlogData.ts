import axios from "axios";
import { BlogPost } from "@/types"


export const getBlogData = async(id:string):Promise<BlogPost>=>{
  // const token = await getToken()
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:8000/api/blog?slug=${id}`,
        headers: { 
          'Content-Type': 'application/json'
        }
      };
      try {
        const response = await axios.request(config);
        return response.data
      }
      catch (error) {
        console.log(error);
        throw new Error("Failed to fetch blog content")
      }
}
