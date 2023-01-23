import { Router } from "express";
import {films} from "../controllers/get_films.controller.js";


  const router = Router();

  router.get("/films", films);

  export default router;