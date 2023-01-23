import { Request, Response } from 'express'
import filmsSchema from "../models/films.models.js";
import { findFilm, findGenreID, findPlatformID, insertFilms } from "../repositories/repositories.js";
import { Films } from "../protocols/films.js";

export async function films(req: Request, res: Response) {

    const validation = filmsSchema.validate(req.body, { abortEarly: false });

    if (validation.error) {
        res.status(400).send(validation.error.message);
        return
    }

    const body = req.body as Films;

    const resultFind = await findFilm(body);

    if (resultFind.rowCount > 0) {
        res.status(409).send("Filme já cadastrada !");
    }

    const FindGenre = await findGenreID(body);

    if (FindGenre.rowCount < 1) {
        res.status(409).send("Genero de filme inexistente!");
    }

    const findPlatform = await findPlatformID(body);

    if (findPlatform.rowCount < 1) {
        res.status(409).send("Plataforma de filme inexistente!");
    }

    try {
        await insertFilms(body);
        res.send("Filme cadastrado com sucesso!")
    } catch (erro) {
        res.status(500).send(erro)

    }

}