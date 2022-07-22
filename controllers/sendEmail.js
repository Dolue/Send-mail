const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "maya.dickinson@ethereal.email",
      pass: "TnwGw7T1WNNU3g7QEg",
    },
  });

  let info = await transporter.sendMail({
    from: '"Coding Arinze" <arinzechukwudolue@gmail.com>',
    to: "bar@example.com",
    subject: "Hello",
    html: "<h2>Sending Emails with Node.js</h2>",
  });

  res.json(info);
};

module.exports = sendEmail;
