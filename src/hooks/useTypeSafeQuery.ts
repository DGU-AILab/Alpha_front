import { wrap } from "../lib/wrapper";
import { useQuery, UseQueryOptions } from "react-query";

type Keys = keyof ReturnType<typeof wrap>["query"];
type Await<T> = T extends Promise<infer U> ? U : T;

export const useTypeSafeQuery = <K extends Keys>(
    key: K,
    opts?: UseQueryOptions,
    params?: Parameters<ReturnType<typeof wrap>["query"][K]> //api return Promise
) => {
    const queryWrap = wrap();
    return useQuery<Await<ReturnType<ReturnType<typeof wrap>["query"][K]>>>(
        key,
        () => {
            const fn = queryWrap.query[typeof key === "string" ? key : key[0]] as any;
            return fn(...(params || []));
        },
        {
            ...opts,
        } as any
    );
};
