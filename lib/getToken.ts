import axios from "axios";
export const getToken = async () => {

    let data = JSON.stringify({
      "identifier": process.env.SUPER_ADMIN_EMAIl,
      "password": process.env.SUPER_ADMIN_PASSWORD
    });
  
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.API_URL}auth/local`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
  
  
    try {
      // const response = await axios.request(config);
      // return response.data
      return {
        jwt:process.env.SUPER_ADMIN_TOKEN
      }
    }
    catch (error) {
      console.log(error);
      throw new Error("Failed to fetch token")
    }
  
  
  }