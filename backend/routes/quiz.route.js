import express from "express"
import { handleQuiz } from "../controllers/quiz.controllers.js";

const router  = express.Router();


router.post("/",handleQuiz)




export default router