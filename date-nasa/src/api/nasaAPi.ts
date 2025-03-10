import axios from 'axios';

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = import.meta.env.VITE_NASA_URL;

export const fetchNasaData = async (date: string) => {
    try{
        const response = await axios.get(BASE_URL, {
            params: {
                api_key: API_KEY,
                date: date
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching NASA data:', error);
        throw error;
    }
}