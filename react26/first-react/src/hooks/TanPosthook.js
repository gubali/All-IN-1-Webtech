import { useQuery, useMutation } from "@tanstack/react-query";
import { queryFetchApi, createPostApi } from "../services/api/ApiTanStack";
export const usePosts = () => {
    return useQuery({
        queryKey: ["posts"],
        queryFn: queryFetchApi,
        staleTime: 10000,
    })
}

export const useCreatePost = () => {
    return useMutation({
        mutationFn: createPostApi
    })
}
