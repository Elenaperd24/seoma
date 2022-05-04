const Questions = require("../models/questions")
const Equipments = require("../models/equipments")

const questionsControllers = {
    cargarQuestions: async (req, res) => {
        let { equipment, message, user, date } = req.body.dataQuestions;
        let newEquipment = await Equipments.findOne({_id:equipment})  
        console.log(newEquipment)           
        new Questions({ 
            idEquipment:equipment,      
            equipment:newEquipment,
            user: user,
            questions: message,
            date:date
        }).save()
        let question
        try {
            question = await Questions.find({ idEquipment: equipment }).populate("user")
        } catch (error) {
            console.log(error)
        }
        res.json({ success: true, response: { question } })
    },

    obtenerQuestions: async (req, res) => {
        let id = req.params.id;
        let questions
        try {
            questions = await Questions.find({ idEquipment: id }).populate("user")
        } catch (error) {
            console.log(error)
        }
        res.json({ success: true, response: { questions  } })
    },

    deleteQuestions: async (req, res) => {
        let id = req.params.id;
        let question
        try {
            question = await Questions.findOneAndDelete({ _id: id })
        } catch (error) {
            console.log(error)
        }
        res.json({ success: true, response: { question } })
    },
    editQuestions: async (req, res) => {
        let id = req.params.id;
        let newQuestion = {questions:req.body.data }
        let newfecha = {date:req.body.newDate}
        let date                      
        let question
        try {
            question = await Questions.findOneAndUpdate( {_id:id}, newQuestion )
            date = await Questions.findOneAndUpdate( {_id:id}, newfecha )

        } catch (error) {
            console.log(error)
        }
    
        res.json({ success: true, response: { question } })
    },
    obtenerQuestionsAdmin: async (req, res) => {
        let questions
        let error = null
        try {
            questions = await Questions.find().populate("user")
        } catch (err) {
            error = err
            console.log(error);
        }
        res.json({
            response: error ? 'ERROR' : { questions },
            success: error ? false : true,
            error: error
        })
    },   
    answerQuestions: async (req, res) => {
        let id = req.params.id;
        let newAnswer = {answer:req.body.data }
        let newfecha = {dateAnswer:req.body.newDate}
        let date                      
        let answer
        try {
            answer = await Questions.findOneAndUpdate( {_id:id}, newAnswer )
            date = await Questions.findOneAndUpdate( {_id:id}, newfecha )

        } catch (error) {
            console.log(error)
        }
    
        res.json({ success: true, response: { answer } })
    },
    checkQuestions: async (req, res) => {
        let id = req.params.id;
        console.log(req.params.id)
        let newCheck = {check:true }        
        let check                      
        let answer
        try {
            check = await Questions.findOneAndUpdate( {_id:id}, newCheck )
            

        } catch (error) {
            console.log(error)
        }
    
        res.json({ success: true, response: { check } })
    },
 
    
}
module.exports = questionsControllers;