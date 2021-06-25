const Database = require("./config") // em config tem o open onde é aberto o banco


const initDb = {
    async init() { // async tem que está junto com o await - a função tem que ser async
        const db = await Database() // await = rode essa linha e aguarder a resposta, quando receber a resposta rode a proxima linha


        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT 
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT
        )`);

        await db.close() // fechando o banco
    }
}

initDb.init();