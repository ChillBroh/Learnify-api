const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

//Add routes here

//Exporting app to be used by the server.js
module.exports = app