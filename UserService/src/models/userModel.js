/**
 * @description - This file defines the base learner model for mongoDB
 */

const mongoose = require('mongoose')

const UserRole = {
    LEARNER: "learner",
    INSTRUCTOR: "instructor",
    ADMIN: "admin",
  }

const learnerBaseSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: false },
    password: { type: String, required: true },
    mobileNo: { type: String, required: false },
    userRole: {
      type: String,
      required: false,
      enum: Object.values(UserRole),
      default: "learner",
    }, //Roles : learner, instructor, admin
  }, { collection: 'authUsers',discriminatorKey: 'learner' })

//Creating mongoose model using Schema
const learnerBaseModel = mongoose.model('learnerBaseModel', learnerBaseSchema)

//Exporting model to be used by learnerController.js
module.exports = learnerBaseModel