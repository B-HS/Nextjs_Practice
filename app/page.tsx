import ToVisible from '@/components/animate/to-visible'
import { Anime } from '@/model/query-model'
import { getDehydratedQuery } from '@/service/react-query/useDehydratedQuery'
import { useAnimes } from '@/service/useAnimeService'
import { HydrationBoundary } from '@tanstack/react-query'

const Page = async () => {
    const initialQuery = { limit: 10, page: 1 }
    const query = await getDehydratedQuery(useAnimes(initialQuery))
    const animes = () => (query.queries.find((q) => q.queryKey[0] === 'animes')?.state.data || []) as { data: { animes: Anime[] } }
    return (
        <HydrationBoundary state={query}>
            {animes().data?.animes?.map((a, idx) => (
                <ToVisible delay={idx * 0.1} key={idx}>
                    <p>{a.japanese}</p>
                </ToVisible>
            ))}
        </HydrationBoundary>
    )
}

export default Page
