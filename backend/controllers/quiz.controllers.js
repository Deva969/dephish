import { Quiz } from "../models/quiz.model.js";


export const handleQuiz = async (req, res)=>{
    const { quizId, quizName, questionsData, correctOpitonIndex } = req.body;

    //json req check
    if (!quizId || !quizName || !questionsData) {
        throw new Error("All fields are required")
    }

    // make new quiz object
    const newQuiz = new Quiz({
        quizId: quizId,
        quizName: quizName,
        questionsData: questionsData,
        correctOptionIndex: correctOpitonIndex
    })

    //save
    newQuiz.save().then(() => console.log('Quiz saved'))
        .catch(err => console.log(err));

    
    //send ack
    res.status(200).json({
        success:true,
        quizAdded:newQuiz
    })

}