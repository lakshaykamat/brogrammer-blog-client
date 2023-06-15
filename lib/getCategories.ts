import axios from "axios";
import { getToken } from "./getToken";
import {Categories } from "@/types"

export const getCategories = async ():Promise<Categories> => {
  const token = await getToken()
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${process.env.API_URL}blog/category/all`,
    headers: {
      
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
