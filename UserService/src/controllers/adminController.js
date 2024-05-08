const learnerBaseModel = require("../models/learnerBaseModel");

exports.createUser = async (userData) => {
    try {
      const response = await learnerBaseModel.create(userData);
      return { status: HttpStatus.CREATED, body: response };
    } catch (error) {
      console.log(
        "Internal server error at createUser(). More details : " + error
      );
      return { status: HttpStatus.INTERNAL_SERVER_ERROR, body: error };
    }
  };