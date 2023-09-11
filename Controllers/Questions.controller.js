const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Questions = require("../Models/Questions.model");


router.get("/all", async (req, res) => {
    try {
        const questions = await Questions.find().populate("user")
        if (!questions) {
            return res.status(400).json({ message: "Data Unavailable" })
        }
        res.status(200).json({
            message: "Sucessfully got your data",
            data: questions
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server Error" })
    }
})


router.post("/add", async (req, res) => {
    // new date logic 
    try {
        const postedDate = new Date().toJSON().slice(0, 10);
        const questions = await new Questions(
            {
                ...req.body,
                date: postedDate
            }
        ).save()
        if (!questions) {
            return res.status(400).json({ message: "Error in posting the question" })
        }
        res.status(200).json({ message: "Question Posted Successfully", data: questions })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
})

 //*/answer/id:Question id */

router.put("/answer/:id", async (req, res) => {
    try {
        let id=req.params.id
        const questions = await Questions.find({_id:id})
        let answer=questions[0].answers
        if(answer.length>0){
            answer=[...answer,req.body.answer]
        }
        else{
            answer.push(req.body.answer)
        }
        
        const addAnswers = await Questions.findOneAndUpdate(
            { _id: id },
            { $set:{answers: answer} }
        );
        if (!addAnswers) {
            return res
                .status(400)
                .json({ message: "Error Occured" })
        }
        res.status(200).json({ message: "Answered Sucessfully", data: addAnswers })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
})



module.exports = router;