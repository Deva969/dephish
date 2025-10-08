import mongoose from "mongoose";


const quizSchema = new mongoose.Schema(
    {
        "quizId" : Number,
        "quizName" : String,
        "questionsData" : Array, // array of object which is an object of a question and four options
        "correctOptionIndex": Number
    }
)

//collection name is quiz
export const Quiz = mongoose.model("Quiz",quizSchema,"quiz");