import { connection } from "../database/db.js";
import {Request,Response} from 'express'
import filmsSchema from "../models/films.models.js";

export async function films(req: Request, res: Response) {

    const validation = filmsSchema.validate(req.body, { abortEarly: false });

    if (validation.error) {
        res.status(400).send(validation.error.message);
        return
    }
    
    const { name, genre_id, platform_id, note,status } = req.body

    try {
        const { rows } = await connection.query("SELECT * FROM films WHERE name=$1;",[name])
        if (rows.length > 0) {
            res.status(409).send("Filme já cadastrado!");
            return
        }
        
    } catch (error) {
        res.status(500).send(error.messsage);
    }

    try {
        const { rows } = await connection.query("SELECT * FROM genre WHERE id=$1;",[genre_id])
        if (rows.length < 1) {
            res.status(409).send("Genero de filme inexistente!");
            return
        }
        
    } catch (error) {
        res.status(500).send(error.messsage);
    }

    try {
        const { rows } = await connection.query("SELECT * FROM platform WHERE id=$1;",[platform_id])
        if (rows.length < 1) {
            res.status(409).send("Plataforma de filme inexistente!");
            return
        }
        
    } catch (error) {
        res.status(500).send(error.messsage);
    }
  
    try {
        await connection.query("INSERT INTO films (name,genre_id,platform_id,note,status) VALUES ($1, $2, $3,$5,$6);", [name, genre_id, platform_id,note,status]);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}