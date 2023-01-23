import { Router } from "express";
import {films} from "../controllers/post_films.controller.js";


  const router = Router();

  router.post("/films", films);

  export default router;