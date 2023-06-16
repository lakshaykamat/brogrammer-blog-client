import axios from "axios";
export const login = async(email:string,password:string)=>{
    let data = JSON.stringify({
        "email": email,
        "password": password
      });
    
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:80/api/user/login',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };

    try {
        const response = await axios.request(config);
        return response.data
      }
      catch (error) {
        return error;
        console.log(error);
      }

      
}
