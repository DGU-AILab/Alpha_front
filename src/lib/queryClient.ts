import { QueryClient } from "react-query";
import { defaultQueryFn } from "./defaultQueryFn";

export const queryClient = new QueryClient({
    defaultOptions: {
        mutations: {
            onError: (e) => {
                console.log(e);
            },
        },
        queries: {
            retry: false,
            staleTime: 60 * 1000 * 10, // 10분
            onError: (e) => {
                console.log(e);
            },
            queryFn: defaultQueryFn as any,
        },
    },
});
