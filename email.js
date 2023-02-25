const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mikeandy3310@gmail.com",
    pass: "protoconialanalysis1",
  },

});
var mailOptions = {
  from: "mikeandy3310@gmail.com",
  to: "andyson3310@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

module.exports = transporter;
