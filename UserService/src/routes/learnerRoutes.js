/**
 * @description - Route file responsible for the learner processes
 */

//Requires
const express = require('express')
const router = express.Router()
const { updateUser, deleteLearner } = require('../services/learnerService')

//Save preferences
router.patch('/', async(req,res) => {
    await updateUser(req,res)
})

//Delete learner
router.delete('/', async(req,res) => {
   await deleteLearner(req,res)
})

//Exporting router to be used by the app.js
module.exports = router