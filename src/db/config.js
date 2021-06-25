const sqlite3 = require("sqlite3");
const {open} = require("sqlite"); // desta forma é retornado somente o metodo open de sqlite

module.exports = () => 
open({        //sempre colocar o '.' ponto no começo
        filename:'./src/db/rocketq.sqlite', // nome e caminho do banco
        driver: sqlite3.Database, // o driver é quem comnda o banco de dados se caso desejar alterar o banco é driver que devera alterar
        //verificar se ultima virgula é necessaria
    })

