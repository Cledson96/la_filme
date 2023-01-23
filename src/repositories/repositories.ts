import {QueryResult} from "pg"
import { connection } from "../database/db.js";
import { Genre,GenreEntity,Platform,PlatformEntity,Films,FilmsEntity} from "../protocols/films.js";

export async function findGenre(body: Genre): Promise<QueryResult<GenreEntity>>{
    return connection.query("SELECT * FROM genre WHERE name=$1;",[body.name])
}

export async function findGenreID(body: Films): Promise<QueryResult<GenreEntity>>{
    return connection.query("SELECT * FROM genre WHERE id=$1;",[body.genre_id])
}

export async function insertGenre(body: Genre): Promise<QueryResult<GenreEntity>>{
    return connection.query("INSERT INTO genre (name) VALUES ($1);",[body.name])
}

export async function findPlatform(body: Platform): Promise<QueryResult<PlatformEntity>>{
    return connection.query("SELECT * FROM platform WHERE name=$1;",[body.name])
}
export async function findPlatformID(body: Films): Promise<QueryResult<PlatformEntity>>{
    return connection.query("SELECT * FROM platform WHERE id=$1;",[body.platform_id])
}

export async function insertPlatform(body: Platform): Promise<QueryResult<PlatformEntity>>{
    return connection.query("INSERT INTO platform (name) VALUES ($1);",[body.name])
}

export async function findFilm(body: Films): Promise<QueryResult<FilmsEntity>>{
    return connection.query("SELECT * FROM films WHERE name=$1;",[body.name])
}
export async function findFilmID(body: FilmsEntity): Promise<QueryResult<FilmsEntity>>{
    return connection.query("SELECT * FROM films WHERE id=$1;",[body.id])
}

export async function insertFilms(body: Films): Promise<QueryResult<FilmsEntity>>{
    return connection.query("INSERT INTO films (name,genre_id,platform_id,note,status) VALUES ($1,$2,$3,$4,$5);",[body.name,body.genre_id,body.platform_id,body.note,body.status])
}

export async function updateFilms(body: FilmsEntity): Promise<QueryResult<FilmsEntity>>{
    return connection.query("UPDATE  films SET status ='assistido' WHERE id=$1;",[body.id])
}

export async function deleteFilms(body: FilmsEntity): Promise<QueryResult<FilmsEntity>>{
    return connection.query("DELETE FROM films  WHERE id=$1;",[body.id])
}

export async function films_genre(): Promise<QueryResult<FilmsEntity>>{
    return connection.query("SELECT genre.name ,count(films.*) FROM genre JOIN films ON films.genre_id = genre.id WHERE id=$1;")
}

