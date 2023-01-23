import {Request,Response} from 'express'
import { films_genre } from "../repositories/repositories.js";

export async function films(req: Request, res: Response) {

    try {
      let result = await films_genre();
        res.send(result.rows)
    } catch (erro) {
        res.status(500).send(erro)

    }
  
}