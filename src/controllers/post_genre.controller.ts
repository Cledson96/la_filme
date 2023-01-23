import { Request, Response } from 'express'
import genreSchema from "../models/genre.models.js";
import { Genre } from "../protocols/films.js";
import { findGenre, insertGenre } from "../repositories/repositories.js";


export async function genre(req: Request, res: Response) {

    const validation = genreSchema.validate(req.body, { abortEarly: false });

    if (validation.error) {
        res.status(400).send(validation.error.message);
        return
    }
    const body = req.body as Genre;

    const resultFind = await findGenre(body);

    if (resultFind.rowCount > 0) {
        res.status(409).send("Genero já cadastrado!");
    }

    try {
        await insertGenre(body);
        res.send("Genero cadastrado com sucesso!")
    } catch (erro) {
        res.status(500).send(erro)

    }

}