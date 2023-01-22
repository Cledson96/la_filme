import { connection } from "../database/db.js";

export async function films(req, res) {


    try {
        const { rows } = await connection.query("SELECT * FROM films ;")
      res.send(rows)
      return

    } catch (error) {
        res.status(500).send(error.messsage);
    }
  
}