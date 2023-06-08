import axios from "axios";
import { getToken } from "./getToken";


export const getCategories = async()=>{
    const token = await getToken()
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:1337/api/categories',
  headers: { 
    'Authorization': `Bearer ${token.jwt}`
  }
};
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    return response.data
  }
  catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Categories")
  }

}
getCategories()
