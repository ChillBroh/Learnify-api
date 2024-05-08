/**
 * @description - This file defines the extended learner model for mongoDB
 */

const mongoose = require('mongoose')


const learnerExtendedSchema = new mongoose.Schema({
    userInterests: { type: [String], required: true},
    
    
    
    
}, { collection: 'authUsers' })

//Creating mongoose model using Schema
const learnerExtendedModel = mongoose.model('learnerExtendedModel', learnerExtendedSchema)

//Exporting model to be used by learnerController.js
module.exports = learnerExtendedModel