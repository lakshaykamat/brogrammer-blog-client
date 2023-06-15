import axios from "axios";
import { getToken } from "./getToken";
import { BlogPost } from "@/types"


export const getBlogData = async(id:string):Promise<BlogPost>=>{
  const token = await getToken()
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.API_URL}blog?slug=${id}`,
        headers: { 
          
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
