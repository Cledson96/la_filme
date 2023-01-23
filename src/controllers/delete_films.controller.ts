import { Request, Response } from 'express'
import { FilmsEntity } from "../protocols/films.js";
import { findFilmID ,deleteFilms} from "../repositories/repositories.js";

export async function delete_films(req: Request, res: Response) {

   let id = Number(req.params.id)

   let body = {id} as FilmsEntity


    const resultFind = await findFilmID(body);

    if (resultFind.rowCount < 1) {
        res.status(409).send("Filme inexistente!");
    }

    try {
        await deleteFilms(body);
        res.send("Filme DELETADO com sucesso!")
    } catch (erro) {
        res.status(500).send(erro)

    }

}