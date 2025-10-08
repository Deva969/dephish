import express from "express"
import { displayLeaderboard } from "../controllers/leaderboard.controllers.js";
import { updateLeaderboard } from "../controllers/leaderboard.controllers.js";

const router  = express.Router();


router.get("/display",displayLeaderboard)
router.post("/update",updateLeaderboard);



export default router