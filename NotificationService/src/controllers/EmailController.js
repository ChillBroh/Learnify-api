const nodeMail = require("nodemailer");

const EmailController = async (req, res) => {
  const { email, subject, text } = req.body;
  const nodeMail = require("nodemailer");

  const SendEmail = async (email, subject, text) => {
    console.log(email, subject, text);
    try {
      const transporter = nodeMail.createTransport({
        service: "gmail",
        auth: {
          user: "isharamadusanka0714@gmail.com",
          pass: "oddlakwxossufvui",
        },
      });

      await transporter.sendMail({
        from: "isharamadusanka0714@gmail.com",
        to: email,
        subject: subject,
        text: text,
      });
      console.log("Email Sent Successfully");
    } catch (error) {
      console.log("Email Not Sent");
      console.log(error);
    }
  };

  module.exports = SendEmail;
};

module.exports = EmailController;
