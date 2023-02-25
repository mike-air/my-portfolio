// Load necessary packages
const express = require("express");
const nodemailer = require("nodemailer");
// express router
const router = express.Router();

// respond with index.html when a GET request is made to the homepage
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// route for handling PDF request
router.get("/downloadPDF", (req, res) => {
  res.download("uploads/Resume.pdf");
});

router.post("/mail", (req, res) => {
  const { from, subject, text } = req.body;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mikeandy3310@gmail.com",
      pass: "protoconialanalysis1",
    },
  });
  const mailData = {
    from,
    to: "mikeandy3310@gmail.com",
    subject,
    text,
    html: '<br>"EMAIL SENT"</br>',
  };

  transporter.sendMail(mailData, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

// export router middleware and use it in app.js
module.exports = router;
