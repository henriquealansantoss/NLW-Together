const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

// route guarda todas as funcionalidades de rotas que o express tem
const route = express.Router()

route.get('/', (req , res) => res.render("index", {page:'enter-room'})) // {page:'enter-room'} - passando uma variável para o objetivo de redenrizando parte da pagina na layout principal

/*route.get('/create-pass', (req , res) => res.render("create-pass", {page:'create-pass'})) 
foi alterado pois agr é o mesmo arquivo e só irá renderizar as partes*/
route.get('/create-pass', (req , res) => res.render("index", {page:'create-pass'}))



route.get('/room/:room', RoomController.open) //room.ejs = não precisa colocar o ejs na frente
route.post('/create-room', RoomController.create)





route.post('/question/create/:room', QuestionController.create)
// os : informa que não sabemos o conteudo que será passado na váriavel
//formato que o formulario de dentro da modal tem que passar informação
route.post('/question/:room/:question/:action',QuestionController.index) 

//exportando route
module.exports = route


