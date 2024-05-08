const express = require("express")
const cors = require("cors")
const app = express()
const connectDB = require('./config/database')

connectDB.getInstance()

app.use(cors())
app.use(express.json())

//Add routes here

//Exporting app to be used by the server.js
module.exports = app