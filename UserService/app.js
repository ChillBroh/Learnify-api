const express = require("express")
const cors = require("cors")
const connectDB = require('./config/database')
const learnerRoutes = require('./src/routes/learnerRoutes')

connectDB.getInstance()

const app = express()

app.use(cors())
app.use(express.json())

//Add routes here
app.use('/learner', learnerRoutes)

//Exporting app to be used by the server.js
module.exports = app