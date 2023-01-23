export type FilmsEntity = {
    id?: number,
    name: string,
    genre_id: number,
    platform_id: number,
    note?: string,
    status: string
}

export type Films = Omit<FilmsEntity, "id">

export type GenreEntity = {
    id?: number,
    name: string
}

export type Genre = Omit<GenreEntity, "id">

export type PlatformEntity = {
    id?: number,
    name: string
}

export type Platform = Omit<PlatformEntity, "id">