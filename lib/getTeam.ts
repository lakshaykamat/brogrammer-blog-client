// import axios from "axios";
// // import { getToken } from "./getToken";
// import { Team } from "@/types";

// export const getTeam = async (): Promise<Team> => {
//     //TODO Remove this line no 7
//     // const token = await getToken()
//     let config = {
//         method: 'get',
//         maxBodyLength: Infinity,
//         url: `https://portfilio-blog-page.onrender.com/api/user/all`,
//         headers: { 'Content-Type': 'application/json'}
//     };


//     try {
//         const response = await axios.request(config);
//         return response.data
//     }
//     catch (error) {
//         console.log(error);
//         throw new Error("Failed to fetch team data")
//     }
// }