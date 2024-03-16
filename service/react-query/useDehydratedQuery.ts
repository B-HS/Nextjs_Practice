import { QueryClient, QueryKey, dehydrate } from '@tanstack/react-query'
import { cache } from 'react'

interface QueryProps<ResponseType = unknown> {
    queryKey: QueryKey
    queryFn: () => Promise<ResponseType>
}

export const getQueryClient = cache(() => new QueryClient())
export async function getDehydratedQuery<Q extends QueryProps>({ queryKey, queryFn }: Q) {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery({ queryKey, queryFn })
    return dehydrate(queryClient)
}

export async function getDehydratedQueries<Q extends QueryProps[]>(queries: Q) {
    const queryClient = getQueryClient()
    await Promise.all(queries.map(({ queryKey, queryFn }) => queryClient.prefetchQuery({ queryKey, queryFn })))
    return dehydrate(queryClient)
}
