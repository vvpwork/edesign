const { router } = require("../../config");
const nodemailer = require("nodemailer");
const path = require("path");

const mailer = nodemailer.createTransport({
  host: "smtp.gamil.com",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: "vovvva33@gamil.com",
    pass: "vvpwork2018"
  }
});

router.post("/", (req, res, next) => {
  const body = req.body;
  console.log(body);

  res.status(200);
  res.json(body);
  // mailer.sendMail("Hellow world", err => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log("massage send");
  // });
});

module.exports = router;
