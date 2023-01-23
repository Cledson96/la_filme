import { Router } from "express";
import {delete_films} from "../controllers/delete_films.controller.js";

  const router = Router();

  router.delete("/films/:id", delete_films);

  export default router;    