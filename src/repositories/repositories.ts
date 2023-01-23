import {QueryResult} from "pg"
import { connection } from "../database/db.js";
import { Genre,GenreEntity,Platform,PlatformEntity} from "../protocols/films.js";

export async function findGenre(body: Genre): Promise<QueryResult<GenreEntity>>{
    return connection.query("SELECT * FROM genre WHERE name=$1;",[body.name])
}

export async function insertGenre(body: Genre): Promise<QueryResult<GenreEntity>>{
    return connection.query("INSERT INTO genre (name) VALUES ($1);",[body.name])
}

export async function findPlatform(body: Platform): Promise<QueryResult<PlatformEntity>>{
    return connection.query("SELECT * FROM platform WHERE name=$1;",[body.name])
}

export async function insertPlatform(body: Platform): Promise<QueryResult<PlatformEntity>>{
    return connection.query("INSERT INTO platform (name) VALUES ($1);",[body.name])
}