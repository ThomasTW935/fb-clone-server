import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'

dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())

// Database Configuration
const db = process.env.MONGO_URI as string

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err))

//Routes
const users = require('./routes/api/users')

app.use('/api/users', users)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
