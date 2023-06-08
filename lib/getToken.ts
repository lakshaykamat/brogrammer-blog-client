import axios from "axios";
export const getToken = async () => {

    let data = JSON.stringify({
      "identifier": "lakshaykamat2048@gmail.com",
      "password": "_;;BB!wa%DbgDA9"
    });
  
    let config = {
      cache: 'no-store',
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:1337/api/auth/local',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
  
  
    try {
      // const response = await axios.request(config);
      // return response.data
      return {
        jwt:"8d2162345fd5613ce7d193ecc3b4e9b9e923f2d3ad770c097cfd0f7f35e60dee0d191bb207715e93b93948ed042486707a7b70cd12043512b9d41319d74bc9b1e8c81173df5c02dffa741d014a73b12dc50a8cc521097ed2ae8c2ba34e35a8aedb946466c549a36ab89a56bf5b2573106ea684654e5676dd0d2fab8d48a4f31c"
      }
    }
    catch (error) {
      console.log(error);
      throw new Error("Failed to fetch token")
    }
  
  
  }