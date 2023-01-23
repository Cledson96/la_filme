import { connection } from "../database/db.js";
import {Request,Response} from 'express'

export async function films(req: Request, res: Response) {

    
    try {
        const { rows } = await connection.query("SELECT * FROM films ;")
      res.send(rows)
      return

    } catch (error) {
        res.status(500).send(error.messsage);
    }
  
}