const Router = require ('express').Router()
const datosController = require('../controller/datosControlles')
const questionsControllers = require('../controller/questionsControlles')
const passport = require('../config/passport')

const {obtenerApp , obtenerSocialMedia, obtenerEquipments, equipment, favorite} = datosController //desestructuracion

const userController = require("../controller/userControlles.js")
const validator = require("../controller/validador")
const {nuevoUsuario, verifyEmail , accesUser, cerrarSesion, verifyToken} = userController
const {cargarQuestions, obtenerQuestions, deleteQuestions, editQuestions, obtenerQuestionsAdmin, answerQuestions, checkQuestions} = questionsControllers

Router.route('/apps')
.get(obtenerApp)

Router.route('/smedia')
.get(obtenerSocialMedia)

Router.route('/equipments')
.get(obtenerEquipments)

Router.route('/detailEquipment/:equipment')
.get(equipment)

Router.route("/signup")
.post(validator, nuevoUsuario)

Router.route("/verify/:uniqueString")
.get(verifyEmail)

Router.route("/signin")
.post(accesUser)

Router.route("/signout")
.post(cerrarSesion)

Router.route("/questions")
.post(cargarQuestions)
.get(obtenerQuestionsAdmin)

Router.route("/answer/:id")
.put(answerQuestions)

Router.route("/check/:id")
.put(checkQuestions)

Router.route("/questions/:id")
.get(obtenerQuestions)
.delete(deleteQuestions)
.put(editQuestions)


Router.route("/signinToken")
.get(passport.authenticate("jwt",{session:false}),verifyToken)

Router.route("/favorite/:id")
.put(passport.authenticate("jwt",{session:false}),favorite)

module.exports = Router