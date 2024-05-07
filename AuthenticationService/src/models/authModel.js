/**
 * @description - This file defines the authentication model for mongoDB
 */

const mongoose = require('mongoose')

//Schema for authentication
const authSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userRole: { type: String, required: false, default:'learner'}, //Roles : learner, instructor, admin
    
    
}, { collection: 'authUsers' })

//Creating mongoose model using Schema
const authModel = mongoose.model('authModel', authSchema)

//Exporting model to be used by authController.js
module.exports = authModel