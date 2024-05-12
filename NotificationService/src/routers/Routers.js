const express = require("express");
const router = express.Router();
const EmailController = require("../controllers/EmailController");
const SMSController = require("../controllers/SMSController");

router.post("/sendMail", EmailController);
router.post("/sendSMS", SMSController);

module.exports = router;
