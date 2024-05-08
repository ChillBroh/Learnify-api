const learnerBaseModel = require("../models/learnerBaseModel")
const HTTPStatus = require('../enums/httpStatus')
const learnerExtendedModel = require("../models/learnerExtendedModel")


exports.getUserByName = async(Name) => {
    try {
        const response =  await learnerBaseModel.findOne({userName: Name})

        return {status: HTTPStatus.OK, body: response}
    } catch (error) {
        console.log(error)
        return {status: HTTPStatus.INTERNAL_SERVER_ERROR, body: error}
    }
}

//Not working yet - ToBe Fixed
exports.saveUserPreferences = async(username,payload) => {
    try {
        const extendedUserModel = learnerBaseModel.discriminator(learnerExtendedModel)
        const response = await extendedUserModel.findOneAndUpdate({userName: username}, payload, { new: true })

        return {status:HTTPStatus.OK, body:response}
    } catch (error) {
        return {status:HTTPStatus.INTERNAL_SERVER_ERROR, body:error}
    }
}

exports.deleteUser =  async(userName) => {
    try {
        const response = await learnerBaseModel.findOneAndDelete({userName:userName})
        return {status:HTTPStatus.OK, body:response}
    } catch (error) {
        console.log("An error occured at deleteUser" + error)
        return {status:HTTPStatus.INTERNAL_SERVER_ERROR, body:error}
    }
}