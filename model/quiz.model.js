const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    creator : String,
    title: String,
    description : String,
    category: String,
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    correctAnswer: Number
})

const QuizModel = mongoose.model("quiz", quizSchema)

module.exports = QuizModel