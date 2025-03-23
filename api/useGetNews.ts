import axios from "axios";
import { useInfiniteQuery } from "react-query";

export const useGetNews = () => useInfiniteQuery({
    queryKey: ['news'],
    queryFn: () => axios.get('https://api.spaceflightnewsapi.net/v4/articles/', {params: {format: 'json'}}).then((res) => res.data),
    getNextPageParam: lastPage => lastPage.next
})