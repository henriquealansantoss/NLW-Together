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

//midware - quando esta passando dados para o controlle, recebendo dados na rota
//é necessario configurar o midware - pois ele quem faz o intermédio de tudo que entra
// no exemplo é enviado um formulario parar a rota
// o midware está implicitamente entre a rota e o seu destino pra onde a rota irá mandar
server.use(express.urlencoded({extended:true}))

//informando que pode usar as rotas
server.use(route)

//escolhendo uma porta 
server.listen(3000,()=>console.log('teste'))