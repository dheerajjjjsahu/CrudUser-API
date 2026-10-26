
import express from 'express'
import ConnectDB from './db.js'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './src/routes/user.routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

ConnectDB()

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
