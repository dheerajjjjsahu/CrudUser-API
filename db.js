import dns from 'node:dns'
import mongoose from 'mongoose'

dns.setServers(['1.1.1.1'])

async function ConnectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database")
    }
    catch (err) {
        console.log("Database error", err)
        process.exit(1)
    }
}

export default ConnectDB