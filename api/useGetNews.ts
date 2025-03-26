import axios from "axios";
import { useInfiniteQuery } from "react-query";

export const useGetNews = () => useInfiniteQuery({
    queryKey: ['news'],
    queryFn: ({pageParam = 0}) => 
     axios.get('https://api.spaceflightnewsapi.net/v4/articles/', {params: {format: 'json', offset: pageParam}}).then((res) => res.data),
    getNextPageParam: (_, allPages) => allPages.length + 10
})