
import { Router } from "express";
import {update_films} from "../controllers/update_films.controller.js";

  const router = Router();

  router.patch("/films/:id", update_films);

  export default router;    