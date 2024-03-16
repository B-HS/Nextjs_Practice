export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    AnimeKindString: any
    AnimeStatusString: any
    DurationString: any
    ISO8601Date: any
    ISO8601DateTime: any
    MangaKindString: any
    MangaStatusString: any
    MylistString: any
    RatingString: any
    SeasonString: any
}

export type Anime = {
    __typename?: 'Anime'
    airedOn?: Maybe<IncompleteDate>
    characterRoles?: Maybe<Array<CharacterRole>>
    createdAt: Scalars['ISO8601DateTime']
    description?: Maybe<Scalars['String']>
    descriptionHtml?: Maybe<Scalars['String']>
    descriptionSource?: Maybe<Scalars['String']>
    duration?: Maybe<Scalars['Int']>
    english?: Maybe<Scalars['String']>
    episodes: Scalars['Int']
    episodesAired: Scalars['Int']
    externalLinks?: Maybe<Array<ExternalLink>>
    fandubbers: Array<Scalars['String']>
    fansubbers: Array<Scalars['String']>
    franchise?: Maybe<Scalars['String']>
    genres?: Maybe<Array<Genre>>
    id: Scalars['ID']
    isCensored?: Maybe<Scalars['Boolean']>
    japanese?: Maybe<Scalars['String']>
    kind?: Maybe<AnimeKindEnum>
    licenseNameRu?: Maybe<Scalars['String']>
    licensors?: Maybe<Array<Scalars['String']>>
    malId?: Maybe<Scalars['ID']>
    name: Scalars['String']
    nextEpisodeAt?: Maybe<Scalars['ISO8601DateTime']>
    personRoles?: Maybe<Array<PersonRole>>
    poster?: Maybe<Poster>
    rating?: Maybe<AnimeRatingEnum>
    related?: Maybe<Array<Related>>
    releasedOn?: Maybe<IncompleteDate>
    russian?: Maybe<Scalars['String']>
    score?: Maybe<Scalars['Float']>
    scoresStats?: Maybe<Array<ScoreStat>>
    screenshots: Array<Screenshot>
    season?: Maybe<Scalars['String']>
    status?: Maybe<AnimeStatusEnum>
    statusesStats?: Maybe<Array<StatusStat>>
    studios: Array<Studio>
    synonyms: Array<Scalars['String']>
    topic?: Maybe<Topic>
    updatedAt: Scalars['ISO8601DateTime']
    url: Scalars['String']
    userRate?: Maybe<UserRate>
    videos: Array<Video>
}

export enum AnimeKindEnum {
    Tv = 'tv',
    Movie = 'movie',
    Ova = 'ova',
    Ona = 'ona',
    Special = 'special',
    TvSpecial = 'tv_special',
    Music = 'music',
    Pv = 'pv',
    Cm = 'cm',
}

export enum AnimeRatingEnum {
    None = 'none',
    G = 'g',
    Pg = 'pg',
    Pg_13 = 'pg_13',
    R = 'r',
    RPlus = 'r_plus',
    Rx = 'rx',
}

export enum AnimeStatusEnum {
    Anons = 'anons',
    Ongoing = 'ongoing',
    Released = 'released',
}

export type Character = {
    __typename?: 'Character'
    createdAt: Scalars['ISO8601DateTime']
    description?: Maybe<Scalars['String']>
    descriptionHtml?: Maybe<Scalars['String']>
    descriptionSource?: Maybe<Scalars['String']>
    id: Scalars['ID']
    isAnime: Scalars['Boolean']
    isManga: Scalars['Boolean']
    isRanobe: Scalars['Boolean']
    japanese?: Maybe<Scalars['String']>
    malId?: Maybe<Scalars['ID']>
    name: Scalars['String']
    poster?: Maybe<Poster>
    russian?: Maybe<Scalars['String']>
    synonyms: Array<Scalars['String']>
    topic?: Maybe<Topic>
    updatedAt: Scalars['ISO8601DateTime']
    url: Scalars['String']
}

export type CharacterRole = {
    __typename?: 'CharacterRole'
    character: Character
    id: Scalars['ID']
    rolesEn: Array<Scalars['String']>
    rolesRu: Array<Scalars['String']>
}

export type Contest = {
    __typename?: 'Contest'
    description?: Maybe<Scalars['String']>
    descriptionHtml?: Maybe<Scalars['String']>
    descriptionSource?: Maybe<Scalars['String']>
    finishedOn?: Maybe<Scalars['ISO8601Date']>
    id: Scalars['ID']
    matchDuration?: Maybe<Scalars['Int']>
    matchesInterval?: Maybe<Scalars['Int']>
    matchesPerRound?: Maybe<Scalars['Int']>
    memberType: ContestMemberTypeEnum
    name: Scalars['String']
    rounds: Array<ContestRound>
    startedOn?: Maybe<Scalars['ISO8601Date']>
    state: ContestStateEnum
    strategyType: ContestStrategyTypeEnum
}

export type ContestMatch = {
    __typename?: 'ContestMatch'
    id: Scalars['ID']
    leftAnime?: Maybe<Anime>
    leftCharacter?: Maybe<Character>
    leftId?: Maybe<Scalars['Int']>
    leftVotes?: Maybe<Scalars['Int']>
    rightAnime?: Maybe<Anime>
    rightCharacter?: Maybe<Character>
    rightId?: Maybe<Scalars['Int']>
    rightVotes?: Maybe<Scalars['Int']>
    state: ContestMatchStateEnum
    winnerId?: Maybe<Scalars['Int']>
}

export enum ContestMatchStateEnum {
    Created = 'created',
    Started = 'started',
    Finished = 'finished',
}

export enum ContestMemberTypeEnum {
    Anime = 'anime',
    Character = 'character',
}

export type ContestRound = {
    __typename?: 'ContestRound'
    id: Scalars['ID']
    isAdditional: Scalars['Boolean']
    matches: Array<ContestMatch>
    name: Scalars['String']
    number: Scalars['Int']
    state: ContestRoundStateEnum
}

export enum ContestRoundStateEnum {
    Created = 'created',
    Started = 'started',
    Finished = 'finished',
}

export enum ContestStateEnum {
    Created = 'created',
    Proposing = 'proposing',
    Started = 'started',
    Finished = 'finished',
}

export enum ContestStrategyTypeEnum {
    DoubleElimination = 'double_elimination',
    PlayOff = 'play_off',
    Swiss = 'swiss',
}

export type ExternalLink = {
    __typename?: 'ExternalLink'
    createdAt?: Maybe<Scalars['ISO8601DateTime']>
    id?: Maybe<Scalars['ID']>
    kind: ExternalLinkKindEnum
    updatedAt?: Maybe<Scalars['ISO8601DateTime']>
    url: Scalars['String']
}

export enum ExternalLinkKindEnum {
    OfficialSite = 'official_site',
    Wikipedia = 'wikipedia',
    AnimeNewsNetwork = 'anime_news_network',
    Myanimelist = 'myanimelist',
    AnimeDb = 'anime_db',
    WorldArt = 'world_art',
    Kinopoisk = 'kinopoisk',
    KageProject = 'kage_project',
    SubsComRu = 'subs_com_ru',
    Twitter = 'twitter',
    SmotretAnime = 'smotret_anime',
    Readmanga = 'readmanga',
    Mangalib = 'mangalib',
    Remanga = 'remanga',
    Mangaupdates = 'mangaupdates',
    Mangadex = 'mangadex',
    Mangafox = 'mangafox',
    Mangachan = 'mangachan',
    Mangahub = 'mangahub',
    NovelTl = 'novel_tl',
    Ruranobe = 'ruranobe',
    Ranobelib = 'ranobelib',
    Novelupdates = 'novelupdates',
}

export type Genre = {
    __typename?: 'Genre'
    entryType: GenreEntryTypeEnum
    id: Scalars['ID']
    kind: GenreKindEnum
    name: Scalars['String']
    russian: Scalars['String']
}

export enum GenreEntryTypeEnum {
    Anime = 'Anime',
    Manga = 'Manga',
}

export enum GenreKindEnum {
    Demographic = 'demographic',
    Genre = 'genre',
    Theme = 'theme',
}

export type IncompleteDate = {
    __typename?: 'IncompleteDate'
    date?: Maybe<Scalars['ISO8601Date']>
    day?: Maybe<Scalars['Int']>
    month?: Maybe<Scalars['Int']>
    year?: Maybe<Scalars['Int']>
}

export type Manga = {
    __typename?: 'Manga'
    airedOn?: Maybe<IncompleteDate>
    chapters: Scalars['Int']
    characterRoles?: Maybe<Array<CharacterRole>>
    createdAt: Scalars['ISO8601DateTime']
    description?: Maybe<Scalars['String']>
    descriptionHtml?: Maybe<Scalars['String']>
    descriptionSource?: Maybe<Scalars['String']>
    english?: Maybe<Scalars['String']>
    externalLinks?: Maybe<Array<ExternalLink>>
    franchise?: Maybe<Scalars['String']>
    genres?: Maybe<Array<Genre>>
    id: Scalars['ID']
    isCensored?: Maybe<Scalars['Boolean']>
    japanese?: Maybe<Scalars['String']>
    kind?: Maybe<MangaKindEnum>
    licenseNameRu?: Maybe<Scalars['String']>
    licensors?: Maybe<Array<Scalars['String']>>
    malId?: Maybe<Scalars['ID']>
    name: Scalars['String']
    personRoles?: Maybe<Array<PersonRole>>
    poster?: Maybe<Poster>
    publishers: Array<Publisher>
    related?: Maybe<Array<Related>>
    releasedOn?: Maybe<IncompleteDate>
    russian?: Maybe<Scalars['String']>
    score?: Maybe<Scalars['Float']>
    scoresStats?: Maybe<Array<ScoreStat>>
    status?: Maybe<MangaStatusEnum>
    statusesStats?: Maybe<Array<StatusStat>>
    synonyms: Array<Scalars['String']>
    topic?: Maybe<Topic>
    updatedAt: Scalars['ISO8601DateTime']
    url: Scalars['String']
    userRate?: Maybe<UserRate>
    volumes: Scalars['Int']
}

export enum MangaKindEnum {
    Manga = 'manga',
    Manhwa = 'manhwa',
    Manhua = 'manhua',
    LightNovel = 'light_novel',
    Novel = 'novel',
    OneShot = 'one_shot',
    Doujin = 'doujin',
}

export enum MangaStatusEnum {
    Anons = 'anons',
    Ongoing = 'ongoing',
    Released = 'released',
    Paused = 'paused',
    Discontinued = 'discontinued',
}

export type Mutation = {
    __typename?: 'Mutation'
    testField: Scalars['String']
}

export enum OrderEnum {
    Id = 'id',
    IdDesc = 'id_desc',
    Ranked = 'ranked',
    Kind = 'kind',
    Popularity = 'popularity',
    Name = 'name',
    AiredOn = 'aired_on',
    Episodes = 'episodes',
    Status = 'status',
    Random = 'random',
    RankedRandom = 'ranked_random',
    RankedShiki = 'ranked_shiki',
    CreatedAt = 'created_at',
    CreatedAtDesc = 'created_at_desc',
}

export type Person = {
    __typename?: 'Person'
    birthOn?: Maybe<IncompleteDate>
    createdAt: Scalars['ISO8601DateTime']
    deceasedOn?: Maybe<IncompleteDate>
    id: Scalars['ID']
    isMangaka: Scalars['Boolean']
    isProducer: Scalars['Boolean']
    isSeyu: Scalars['Boolean']
    japanese?: Maybe<Scalars['String']>
    malId?: Maybe<Scalars['ID']>
    name: Scalars['String']
    poster?: Maybe<Poster>
    russian?: Maybe<Scalars['String']>
    synonyms: Array<Scalars['String']>
    topic?: Maybe<Topic>
    updatedAt: Scalars['ISO8601DateTime']
    url: Scalars['String']
    website?: Maybe<Scalars['String']>
}

export type PersonRole = {
    __typename?: 'PersonRole'
    id: Scalars['ID']
    person: Person
    rolesEn: Array<Scalars['String']>
    rolesRu: Array<Scalars['String']>
}

export type Poster = {
    __typename?: 'Poster'
    id: Scalars['ID']
    main2xUrl: Scalars['String']
    mainAlt2xUrl: Scalars['String']
    mainAltUrl: Scalars['String']
    mainUrl: Scalars['String']
    mini2xUrl: Scalars['String']
    miniAlt2xUrl: Scalars['String']
    miniAltUrl: Scalars['String']
    miniUrl: Scalars['String']
    originalUrl: Scalars['String']
    preview2xUrl: Scalars['String']
    previewAlt2xUrl: Scalars['String']
    previewAltUrl: Scalars['String']
    previewUrl: Scalars['String']
}

export type Publisher = {
    __typename?: 'Publisher'
    id: Scalars['ID']
    name: Scalars['String']
}

export type Query = {
    __typename?: 'Query'
    animes: Array<Anime>
    characters: Array<Character>
    contests: Array<Contest>
    currentUser?: Maybe<User>
    genres: Array<Genre>
    mangas: Array<Manga>
    people: Array<Person>
    userRates: Array<UserRate>
}

export type QueryAnimesArgs = {
    page?: Maybe<Scalars['Int']>
    limit?: Maybe<Scalars['Int']>
    order?: Maybe<OrderEnum>
    kind?: Maybe<Scalars['AnimeKindString']>
    status?: Maybe<Scalars['AnimeStatusString']>
    season?: Maybe<Scalars['SeasonString']>
    score?: Maybe<Scalars['Int']>
    duration?: Maybe<Scalars['DurationString']>
    rating?: Maybe<Scalars['RatingString']>
    genre?: Maybe<Scalars['String']>
    studio?: Maybe<Scalars['String']>
    franchise?: Maybe<Scalars['String']>
    censored?: Maybe<Scalars['Boolean']>
    mylist?: Maybe<Scalars['MylistString']>
    ids?: Maybe<Scalars['String']>
    excludeIds?: Maybe<Scalars['String']>
    search?: Maybe<Scalars['String']>
}

export type QueryCharactersArgs = {
    page?: Maybe<Scalars['Int']>
    limit?: Maybe<Scalars['Int']>
    ids?: Maybe<Array<Scalars['ID']>>
    search?: Maybe<Scalars['String']>
}

export type QueryContestsArgs = {
    page?: Maybe<Scalars['Int']>
    limit?: Maybe<Scalars['Int']>
    ids?: Maybe<Array<Scalars['ID']>>
}

export type QueryGenresArgs = {
    entryType: GenreEntryTypeEnum
}

export type QueryMangasArgs = {
    page?: Maybe<Scalars['Int']>
    limit?: Maybe<Scalars['Int']>
    order?: Maybe<OrderEnum>
    kind?: Maybe<Scalars['MangaKindString']>
    status?: Maybe<Scalars['MangaStatusString']>
    season?: Maybe<Scalars['SeasonString']>
    score?: Maybe<Scalars['Int']>
    genre?: Maybe<Scalars['String']>
    publisher?: Maybe<Scalars['String']>
    franchise?: Maybe<Scalars['String']>
    censored?: Maybe<Scalars['Boolean']>
    mylist?: Maybe<Scalars['MylistString']>
    ids?: Maybe<Scalars['String']>
    excludeIds?: Maybe<Scalars['String']>
    search?: Maybe<Scalars['String']>
}

export type QueryPeopleArgs = {
    page?: Maybe<Scalars['Int']>
    limit?: Maybe<Scalars['Int']>
    ids?: Maybe<Array<Scalars['ID']>>
    search?: Maybe<Scalars['String']>
    isSeyu?: Maybe<Scalars['Boolean']>
    isProducer?: Maybe<Scalars['Boolean']>
    isMangaka?: Maybe<Scalars['Boolean']>
}

export type QueryUserRatesArgs = {
    page?: Maybe<Scalars['Int']>
    limit?: Maybe<Scalars['Int']>
    userId?: Maybe<Scalars['ID']>
    targetType: UserRateTargetTypeEnum
    status?: Maybe<UserRateStatusEnum>
}

export type Related = {
    __typename?: 'Related'
    anime?: Maybe<Anime>
    id: Scalars['ID']
    manga?: Maybe<Manga>
    relationEn: Scalars['String']
    relationRu: Scalars['String']
}

export type ScoreStat = {
    __typename?: 'ScoreStat'
    count: Scalars['Int']
    score: Scalars['Int']
}

export type Screenshot = {
    __typename?: 'Screenshot'
    id: Scalars['ID']
    originalUrl: Scalars['String']
    x166Url: Scalars['String']
    x332Url: Scalars['String']
}

export type StatusStat = {
    __typename?: 'StatusStat'
    count: Scalars['Int']
    status: UserRateStatusEnum
}

export type Studio = {
    __typename?: 'Studio'
    id: Scalars['ID']
    imageUrl?: Maybe<Scalars['String']>
    name: Scalars['String']
}

export type Topic = {
    __typename?: 'Topic'
    body: Scalars['String']
    commentsCount: Scalars['Int']
    createdAt: Scalars['ISO8601DateTime']
    htmlBody: Scalars['String']
    id?: Maybe<Scalars['ID']>
    tags: Array<Scalars['String']>
    title: Scalars['String']
    type: Scalars['String']
    updatedAt: Scalars['ISO8601DateTime']
    url: Scalars['String']
}

export type User = {
    __typename?: 'User'
    avatarUrl: Scalars['String']
    id: Scalars['ID']
    lastOnlineAt: Scalars['ISO8601DateTime']
    nickname: Scalars['String']
    url: Scalars['String']
}

export type UserRate = {
    __typename?: 'UserRate'
    anime?: Maybe<Anime>
    chapters: Scalars['Int']
    createdAt: Scalars['ISO8601DateTime']
    episodes: Scalars['Int']
    id: Scalars['ID']
    manga?: Maybe<Manga>
    rewatches: Scalars['Int']
    score: Scalars['Int']
    status: UserRateStatusEnum
    text?: Maybe<Scalars['String']>
    updatedAt: Scalars['ISO8601DateTime']
    volumes: Scalars['Int']
}

export enum UserRateStatusEnum {
    Planned = 'planned',
    Watching = 'watching',
    Rewatching = 'rewatching',
    Completed = 'completed',
    OnHold = 'on_hold',
    Dropped = 'dropped',
}

export enum UserRateTargetTypeEnum {
    Anime = 'Anime',
    Manga = 'Manga',
}

export type Video = {
    __typename?: 'Video'
    id: Scalars['ID']
    imageUrl: Scalars['String']
    kind: VideoKindEnum
    name?: Maybe<Scalars['String']>
    playerUrl: Scalars['String']
    url: Scalars['String']
}

export enum VideoKindEnum {
    Pv = 'pv',
    CharacterTrailer = 'character_trailer',
    Cm = 'cm',
    Op = 'op',
    Ed = 'ed',
    OpEdClip = 'op_ed_clip',
    Clip = 'clip',
    Other = 'other',
    EpisodePreview = 'episode_preview',
}
