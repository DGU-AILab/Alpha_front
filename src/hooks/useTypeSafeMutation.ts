import { wrap } from "../lib/wrapper";
import { useMutation, UseMutationOptions } from "react-query";

type Keys = keyof ReturnType<typeof wrap>["mutation"];
type Await<T> = T extends Promise<infer U> ? U : T;

export const useTypeSafeMutation = <K extends Keys>(
    key: K,
    opts?: UseMutationOptions<
        Await<ReturnType<ReturnType<typeof wrap>["mutation"][K]>>,
        any,
        Parameters<ReturnType<typeof wrap>["mutation"][K]>,
        any
    >
) => {
    const mutationWrap = wrap();
    return useMutation<
        Await<ReturnType<ReturnType<typeof wrap>["mutation"][K]>>,
        any,
        Parameters<ReturnType<typeof wrap>["mutation"][K]>
    >(
        (params) =>
            (mutationWrap.mutation[typeof key === "string" ? key : key[0]] as any)(...params),
        opts
    );
};
