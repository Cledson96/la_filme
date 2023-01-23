import { Router } from "express";
import {films} from "../controllers/films.controller.js";


  const router = Router();

  router.get("/films", films);

  export default router;