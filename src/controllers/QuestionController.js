const Database = require('../db/config')

module.exports = {


    async index(req, res) { //'/room/:room/:question/:action'
        const db = await Database();
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action

        const password = req.body.password

        //verificar se senha esta correta
        const verifyRoom = await db.get(`SELECT * FROM rooms WHARE id = ${roomId}`)
        if(verifyRoom.pass == password){
            if(action == "delete"){
                await db.run(`DELETE FROM questions WHERE id = ${questionId}`)
            }else if(action == "check"){
                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`);
            }
            res.redirect(`/room/${roomId}`)
        } else{
            res.render('passincorrect', {roomId: roomId})
        }
         
    },

    //criando a questão
    async create(req, res) {
        const db = await Database()
        const question = req.body.question; a
        const roomId = req.params.room;

        //salvando no banco
        await db.run(`INSERT INTO questions(
            title,
            room,
            read
        )VALUES(
           "${question}",
            ${roomId},
            0
        )`)


        // para onde vai redirecionar
        res.redirect(`/room/${roomId}`)


    }


}
