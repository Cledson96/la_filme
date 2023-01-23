import { Request, Response } from 'express'
import { FilmsEntity } from "../protocols/films.js";
import { findFilmID ,updateFilms} from "../repositories/repositories.js";

export async function update_films(req: Request, res: Response) {

   let id = Number(req.params.id)

   let body = {id} as FilmsEntity


    const resultFind = await findFilmID(body);

    if (resultFind.rowCount < 1) {
        res.status(409).send("Filme inexistente!");
    }

    try {
        await updateFilms(body);
        res.send("Filme atualizado com sucesso!")
    } catch (erro) {
        res.status(500).send(erro)

    }

}