const express = require('express')
const connectDB = require('./config/db')
const router = require('./routes/movieRoutes')
const cors = require('cors')

const colors = require('colors')
const dotenv = require('dotenv').config()

const app = express()


const port = process.env.PORT || 5001

connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/movies", router)

app.listen(port, () => {
    console.log(`Server start at port ${port}`);
})