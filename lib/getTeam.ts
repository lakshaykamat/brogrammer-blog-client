import axios from "axios";
import { getToken } from "./getToken";
import { Team } from "@/types";

export const getTeam = async (): Promise<Team> => {
    const token = await getToken()
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.API_URL}teams/`,
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
        throw new Error("Failed to fetch team data")
    }
}