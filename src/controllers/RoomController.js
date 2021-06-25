const Database = require('../db/config')  // importando o banco

module.exports = {
    async create(req, res){
        const db = await Database()
        const pass = req.body.password // 
        let roomId = ''; // iniciei o roomId vazio e resolveu um erro de salvar os numeros
        

        for(var i = 0; i < 6; i++){ 
           roomId += Math.floor(Math.random()*10).toString() // converteu para string para concatenar os valores
            
           // a solução em aula foi está--
        // i == 0 ? roomId = Math.floor(Math.random()*10).toString() : roomId += Math.floor(Math.random()*10).toString()

        }


        await db.run(`INSERT INTO rooms (
                id,
                pass
            ) VALUES (
                ${parseInt(roomId)},
                ${pass}
            )`)
        
        await db.close()

        res.redirect(`/room/${roomId}`)

    }
}


