// importar o express
const express = require('express')
// importar arquivo de rotas
const route = require('./route');
// express iniciado
const server = express()
// importar o modulo path
const path = require('path')

//informando para o express que aview engine irá ser ejs
server.set('view engine', 'ejs')

//express use a pasta public
server.use(express.static("public"))

// o path pega o caminho 'join' = juntar, então ele junta pegando o __dirname(que nesse caso representa a pasta src) que é o
// caminho de onde eu estou 
server.set('views', path.join(__dirname,'views'))


//informando que pode usar as rotas
server.use(route)

//escolhendo uma porta 
server.listen(3000,()=>console.log('teste'))