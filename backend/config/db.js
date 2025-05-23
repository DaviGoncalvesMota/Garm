const mongoose = require("mongoose")
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

// Connection
const conn = async () => {
    try {
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.knwuz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

        console.log("Conectou ao Banco!")

        return dbConn
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn 

