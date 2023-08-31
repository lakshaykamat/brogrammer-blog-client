import axios from "axios";
// import { getToken } from "./getToken";
import {Categories } from "@/types"

export const getCategories = async ():Promise<Categories> => {
  // const token = await getToken()
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://localhost:8000/api/blog/category/all`,
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
    throw new Error("Failed to fetch Categories")
  }

}
