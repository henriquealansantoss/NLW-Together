const express = require('express')

// route guarda todas as funcionalidades de rotas que o express tem
const route = express.Router()

route.get('/', (req , res) => res.render("index"))
route.get('/create-pass', (req , res) => res.render("create-pass"))
route.get('/room', (req , res) => res.render("room")) //room.ejs = não precisa colocar o ejs na frente
// os : informa que não sabemos o conteudo que será passado na váriavel
//formato que o formulario de dentro da modal tem que passar informação
// route.post('/room/:room/:question/:action',(req,res)=>res.render()) 

//exportando route
module.exports = route