import client from "./client";
import { AxiosResponse } from "axios";

export const defaultQueryFn = async ({ queryKey }: { queryKey: string }) => {
    // token 가져오기
    try {
        const r: AxiosResponse = await client.get(`${queryKey}`, {
            headers: {
                // 토큰 보내기
            },
        });
        // 토큰 받아오기
        return await r.data;
    } catch (error) {
        console.log(error.data);
    }
};
