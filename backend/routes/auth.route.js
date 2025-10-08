import express from "express"

const router  = express.Router();

import { login } from "../controllers/auth.controllers.js";
import { logout } from "../controllers/auth.controllers.js";


router.post("/login",login)
router.get("/logout",logout)



export default router