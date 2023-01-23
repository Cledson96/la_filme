import { Router } from "express";
import {platform} from "../controllers/post_platform.controller.js";


  const router = Router();

  router.post("/platform", platform);

  export default router;