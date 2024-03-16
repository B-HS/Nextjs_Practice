const endpoint = 'https://shikimori.one/api/graphql'

interface AnimesParams {
    limit?: number
    page?: number
    search?: string
    season?: string
}

export const useAnimes = ({ limit = 10, page = 1, search = '', season = '' }: AnimesParams) => {
    const query = ` { animes (search: "${search}", limit: ${limit}, page: ${page}, season: "${season}") {
        id
        malId
        name
        russian
        licenseNameRu
        english
        japanese
        synonyms
        kind
        rating
        score
        status
        episodes
        episodesAired
        duration
        airedOn {
          year
          month
          day
          date
        }
        releasedOn {
          year
          month
          day
          date
        }
        url
        season
    
        poster {
          id
          originalUrl
          mainUrl
        }
        createdAt
        updatedAt
        nextEpisodeAt
        genres {
          id
          name
          russian
          kind
        }
        studios {
          id
          name
          imageUrl
        }
        description
        descriptionHtml
        descriptionSource
      }
    }`
    console.log(query)

    return {
        queryKey: ['animes'],
        queryFn: () =>
            fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query,
                }),
            }).then((res) => res.json()),
    }
}
