import { Request, Response } from 'express'
import platformSchema from "../models/platform.models.js";
import { Platform } from "../protocols/films.js";
import { findPlatform, insertPlatform } from "../repositories/repositories.js";

export async function platform(req: Request, res: Response) {

    const validation = platformSchema.validate(req.body, { abortEarly: false });

    if (validation.error) {
        res.status(400).send(validation.error.message);
        return
    }
    const body = req.body as Platform;

    const resultFind = await findPlatform(body);

    if (resultFind.rowCount > 0) {
        res.status(409).send("Plataforma já cadastrada !");
    }

    try {
        await insertPlatform(body);
        res.send("Plataforma cadastrado com sucesso!")
    } catch (erro) {
        res.status(500).send(erro)

    }

}