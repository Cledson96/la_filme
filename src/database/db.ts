import pg from "pg"
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg
export const connection = new Pool({
    connectionString: "postgres://eozwscte:wfRvVWKDaP0sgC7d1No4CTP0oVekN0AK@salt.db.elephantsql.com/eozwscte"
  })
