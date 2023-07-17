const express = require('express');
const QuizModel = require('../model/quiz.model');
const quizRoute = express.Router();

quizRoute.post("/createquiz", async (req, res) => {
try {
    const payload = req.body
    const quiz = new QuizModel(payload)
    await quiz.save()
    res.send({
        msg:"QUiz created successfully"
    })
} catch (error) {
   res.send({
msg: error.message
   }) 
}
})

quizRoute.get("/getquiz", async (req, res) => {
    const data = await QuizModel.find()
    res.send({
        msg: data
    })
})

module.exports = quizRoute;