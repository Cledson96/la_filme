import { Router } from "express";
import {genre} from "../controllers/post_genre.controller.js";


  const router = Router();

  router.post("/genre", genre);

  export default router;