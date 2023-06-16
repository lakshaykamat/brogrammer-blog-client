import axios from "axios";
export const login = async(email:string,password:string)=>{
    let data = JSON.stringify({
        "email": email,
        "password": password
      });
    
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.API_URL}user/login`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };

    try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
        return response.data
      }
      catch (error) {
        console.log(error);
      }
      
}