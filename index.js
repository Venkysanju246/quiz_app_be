const express = require("express")
const connectionToDb = require("./config/connection")
const userRoute = require("./controllers/user.controller")
const app = express()
const cors = require("cors")
const quizRoute = require("./controllers/quiz.controller")
app.use(cors())
app.use(express.json())
app.use("/user", userRoute)
app.use("/quiz", quizRoute)

app.listen(9000,async ()=>{
    try {
        await connectionToDb
        console.log("Connected to database")
        console.log("server is running")
    } catch (error) {
        console.error(error.message)
    }
})