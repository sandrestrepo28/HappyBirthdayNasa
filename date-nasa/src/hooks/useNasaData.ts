import { useQuery } from '@tanstack/react-query';
import { fetchNasaData } from '@/api/nasaAPi';

export const useNasaData = (date: string) => {
    return useQuery({
        queryKey: ['nasaData', date], // Query Key
        queryFn: () => fetchNasaData(date), // Query Function
        enabled: !!date, // Only run the query if there is a date
    });
};