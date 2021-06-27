
const Database = require('../db/config') // importando o banco

module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password // 
        let roomId = ''; // iniciei o roomId vazio e resolveu um erro de salvar os numeros
        let isRoom = true


        while (isRoom) {
            //gera o número da sala
            for (var i = 0; i < 6; i++) {
                roomId += Math.floor(Math.random() * 10).toString() // converteu para string para concatenar os valores

                // a solução em aula foi está--
                // i == 0 ? roomId = Math.floor(Math.random()*10).toString() : roomId += Math.floor(Math.random()*10).toString()

            }

            //verifica se numero já existe
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)

            // o some faz uma conparação com o que existe dentro do array = retorno boolean
            isRoom = roomsExistIds.some(roomsExistId => roomsExistId === roomId)


            if (!isRoom) {
                // insere a sala no banco
                await db.run(`INSERT INTO rooms (
            id,
            pass
            ) VALUES (
            ${parseInt(roomId)},
            ${pass}
            )`)

            }

        }


        await db.close()

        res.redirect(`/room/${roomId}`)

    },
    async open(req, res) {
        const db = await Database()
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)

        res.render("room",{roomId: roomId, questions: questions, questionsRead: questionsRead})
    }
}
