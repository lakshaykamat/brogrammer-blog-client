import axios from "axios";
import { getToken } from "./getToken";



export const getBlogData = async(id:string)=>{
  const token = await getToken()
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://127.0.0.1:1337/api/blog-articles/?filters[slug][$eq]=${id}`,
        headers: { 
          'Authorization': `Bearer ${token.jwt}`
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
