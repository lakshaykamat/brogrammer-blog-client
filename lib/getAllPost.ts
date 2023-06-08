import axios from 'axios'
import { getToken } from './getToken';
export default async function getAllPost() {
  const token = await getToken()


  let config = {
    cache: 'no-store',
    method: 'get',
    maxBodyLength: Infinity,
    url: `${process.env.API_URL}blog-articles/?populate=*&sort=createdAt%3Adesc`,
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
    throw new Error("Failed to fetch blogs")
  }

}

